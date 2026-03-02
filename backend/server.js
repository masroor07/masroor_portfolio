const express = require("express");
const nodemailer = require("nodemailer");
const rateLimit = require("express-rate-limit");
const cors = require("cors");
const helmet = require("helmet");
const { body, validationResult } = require("express-validator");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// ── Security middleware ──────────────────────────────────────────────────────

app.use(helmet());                           // Sets secure HTTP headers
app.use(express.json({ limit: "10kb" }));    // Cap body size to block huge payloads

// CORS — only allow your frontend origin
const allowedOrigins = (process.env.ALLOWED_ORIGINS || "http://localhost:5173")
  .split(",")
  .map((o) => o.trim());

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no Origin header:
      // - UptimeRobot / health check pings
      // - Server-side fetches (no browser origin)
      // - curl / Postman during testing
      // Browser requests always send an Origin, so this doesn't weaken security.
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      callback(new Error(`CORS: origin ${origin} not allowed`));
    },
    methods: ["GET", "POST"],   // GET needed for /health preflight
    optionsSuccessStatus: 200,
  })
);

// Rate limiting — max 5 contact requests per 15 minutes per IP
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { success: false, message: "Too many requests. Please try again in 15 minutes." },
  standardHeaders: true,
  legacyHeaders: false,
});

// ── Nodemailer transporter ───────────────────────────────────────────────────

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,   // Use an App Password, not your real password
  },
});

// ── Routes ───────────────────────────────────────────────────────────────────

app.get("/health", (_req, res) => res.json({ status: "ok" }));

app.post(
  "/api/contact",
  contactLimiter,
  [
    body("name")
      .trim()
      .notEmpty().withMessage("Name is required")
      .isLength({ max: 100 }).withMessage("Name too long"),
    body("email")
      .trim()
      .isEmail().withMessage("Valid email is required")
      .normalizeEmail(),
    body("subject")
      .trim()
      .optional()
      .isLength({ max: 200 }).withMessage("Subject too long"),
    body("message")
      .trim()
      .notEmpty().withMessage("Message is required")
      .isLength({ min: 10, max: 2000 }).withMessage("Message must be 10–2000 characters"),
  ],
  async (req, res) => {
    // Validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        success: false,
        message: errors.array()[0].msg,
      });
    }

    const { name, email, subject, message } = req.body;

    try {
      // Email to you (the portfolio owner)
      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO || process.env.EMAIL_USER,
        replyTo: email,
        subject: `[Portfolio] ${subject || "New message"} — from ${name}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#f9f9f9;border-radius:8px">
            <h2 style="color:#0a0a0f;margin-bottom:24px">New Contact Form Submission</h2>
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;color:#666;width:100px">Name</td><td style="padding:8px 0;font-weight:600">${escapeHtml(name)}</td></tr>
              <tr><td style="padding:8px 0;color:#666">Email</td><td style="padding:8px 0"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
              <tr><td style="padding:8px 0;color:#666">Subject</td><td style="padding:8px 0">${escapeHtml(subject || "—")}</td></tr>
            </table>
            <hr style="margin:24px 0;border:none;border-top:1px solid #e0e0e0"/>
            <p style="color:#333;line-height:1.7;white-space:pre-wrap">${escapeHtml(message)}</p>
            <p style="margin-top:32px;font-size:12px;color:#999">Sent from masroorshah.dev portfolio</p>
          </div>
        `,
      });

      // Auto-reply to the sender
      await transporter.sendMail({
        from: `"Masroor Shah" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Thanks for reaching out!",
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#0a0a0f;color:#e8e8f0;border-radius:8px">
            <h2 style="color:#7effd4;margin-bottom:16px">Hey ${escapeHtml(name)}! 👋</h2>
            <p style="line-height:1.8;color:#a0a0b8">Thanks for getting in touch. I've received your message and will get back to you as soon as possible — usually within 24–48 hours.</p>
            <p style="line-height:1.8;color:#a0a0b8;margin-top:16px">In the meantime, feel free to check out my GitHub or LinkedIn.</p>
            <div style="margin-top:32px;padding-top:24px;border-top:1px solid #1e1e2e;font-size:12px;color:#6b6b8a">
              Masroor Shah · Schmalkalden, DE<br/>
              <a href="https://github.com/masroor07" style="color:#7effd4">GitHub</a> · 
              <a href="https://linkedin.com/in/masroorshah" style="color:#7effd4">LinkedIn</a>
            </div>
          </div>
        `,
      });

      res.json({ success: true, message: "Message sent successfully!" });
    } catch (err) {
      console.error("Mail error:", err.message);
      res.status(500).json({
        success: false,
        message: "Failed to send message. Please try emailing directly.",
      });
    }
  }
);

// ── Helpers ──────────────────────────────────────────────────────────────────

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

// ── Start ─────────────────────────────────────────────────────────────────────

app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));