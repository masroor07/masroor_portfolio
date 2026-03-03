const express = require("express");
const FormData = require("form-data");
const Mailgun = require("mailgun.js");
const rateLimit = require("express-rate-limit");
const cors = require("cors");
const helmet = require("helmet");
const { body, validationResult } = require("express-validator");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// ── Security middleware ──────────────────────────────────────────────────────

app.use(helmet());
app.use(express.json({ limit: "10kb" }));

// ── /health — BEFORE cors so any origin can reach it ────────────────────────
app.get("/health", (_req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json({ status: "ok" });
});

// ── CORS ──────────────────────────────────────────────────────────────────────
const allowedOrigins = (process.env.ALLOWED_ORIGINS || "http://localhost:5173")
  .split(",")
  .map((o) => o.trim());

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      callback(new Error(`CORS: origin ${origin} not allowed`));
    },
    methods: ["GET", "POST"],
    optionsSuccessStatus: 200,
  })
);

// ── Rate limiting ─────────────────────────────────────────────────────────────
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { success: false, message: "Too many requests. Please try again in 15 minutes." },
  standardHeaders: true,
  legacyHeaders: false,
});

// ── Mailgun — lazy init ───────────────────────────────────────────────────────
let mgClient = null;

function getMailgun() {
  if (mgClient) return mgClient;
  if (!process.env.MAILGUN_API_KEY) throw new Error("MAILGUN_API_KEY is not set.");
  if (!process.env.MAILGUN_DOMAIN)  throw new Error("MAILGUN_DOMAIN is not set.");
  const mailgun = new Mailgun(FormData);
  mgClient = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY,
    // EU accounts: uncomment the line below
    // url: "https://api.eu.mailgun.net",
  });
  return mgClient;
}

// ── Routes ────────────────────────────────────────────────────────────────────

app.post(
  "/api/contact",
  contactLimiter,
  [
    body("name").trim().notEmpty().withMessage("Name is required").isLength({ max: 100 }).withMessage("Name too long"),
    body("email").trim().isEmail().withMessage("Valid email is required").normalizeEmail(),
    body("subject").trim().optional().isLength({ max: 200 }).withMessage("Subject too long"),
    body("message").trim().notEmpty().withMessage("Message is required").isLength({ min: 10, max: 2000 }).withMessage("Message must be 10-2000 characters"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ success: false, message: errors.array()[0].msg });
    }

    const { name, email, subject, message } = req.body;
    const DOMAIN   = process.env.MAILGUN_DOMAIN;
    const FROM     = process.env.MAILGUN_FROM_EMAIL || `Portfolio Contact <noreply@${DOMAIN}>`;
    const EMAIL_TO = process.env.EMAIL_TO;

    if (!EMAIL_TO) {
      console.error("EMAIL_TO not set");
      return res.status(500).json({ success: false, message: "Server misconfiguration. Please email directly." });
    }

    try {
      const mg = getMailgun();

      // Notification email to you
      await mg.messages.create(DOMAIN, {
        from: FROM,
        to: EMAIL_TO,
        "h:Reply-To": `${name} <${email}>`,
        subject: `[Portfolio] ${subject || "New message"} - from ${name}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#f9f9f9;border-radius:8px">
            <h2 style="color:#0a0a0f;margin-bottom:24px">New Contact Form Submission</h2>
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;color:#666;width:100px">Name</td><td style="padding:8px 0;font-weight:600">${escapeHtml(name)}</td></tr>
              <tr><td style="padding:8px 0;color:#666">Email</td><td style="padding:8px 0"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
              <tr><td style="padding:8px 0;color:#666">Subject</td><td style="padding:8px 0">${escapeHtml(subject || "-")}</td></tr>
            </table>
            <hr style="margin:24px 0;border:none;border-top:1px solid #e0e0e0"/>
            <p style="color:#333;line-height:1.7;white-space:pre-wrap">${escapeHtml(message)}</p>
            <p style="margin-top:32px;font-size:12px;color:#999">Sent from masroorshah.dev portfolio</p>
          </div>
        `,
      });

      // Auto-reply to sender
      await mg.messages.create(DOMAIN, {
        from: `Masroor Shah <noreply@${DOMAIN}>`,
        to: email,
        subject: "Thanks for reaching out!",
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#0a0a0f;color:#e8e8f0;border-radius:8px">
            <h2 style="color:#7effd4;margin-bottom:16px">Hey ${escapeHtml(name)}!</h2>
            <p style="line-height:1.8;color:#a0a0b8">Thanks for getting in touch. I received your message and will get back to you as soon as possible - usually within 24-48 hours.</p>
            <p style="line-height:1.8;color:#a0a0b8;margin-top:16px">In the meantime, feel free to check out my GitHub or LinkedIn.</p>
            <div style="margin-top:32px;padding-top:24px;border-top:1px solid #1e1e2e;font-size:12px;color:#6b6b8a">
              Masroor Shah - Schmalkalden, DE<br/>
              <a href="https://github.com/masroor07" style="color:#7effd4">GitHub</a> -
              <a href="https://linkedin.com/in/masroorshah" style="color:#7effd4">LinkedIn</a>
            </div>
          </div>
        `,
      });

      res.json({ success: true, message: "Message sent successfully!" });
    } catch (err) {
      const detail = err?.details || err?.message || "Unknown error";
      console.error("Mailgun error:", detail);
      res.status(500).json({ success: false, message: "Failed to send message. Please try emailing directly." });
    }
  }
);

// ── Helpers ───────────────────────────────────────────────────────────────────

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

// ── Start ─────────────────────────────────────────────────────────────────────

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
  console.log(`Allowed origins: ${allowedOrigins.join(", ")}`);
  console.log(`Mailgun configured: ${!!(process.env.MAILGUN_API_KEY && process.env.MAILGUN_DOMAIN)}`);
  console.log(`Mailgun domain: ${process.env.MAILGUN_DOMAIN || "NOT SET"}`);
});
