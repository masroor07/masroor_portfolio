import { useState, useEffect, useRef } from "react";

const NAV_LINKS = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const SKILLS = [
  { label: "AI / ML", tags: ["LangChain", "Hugging Face", "FAISS", "MBART", "RoBERTa", "YOLO", "OpenAI API", "n8n"] },
  { label: "Programming", tags: ["Python", "JavaScript", "Java", "C/C++"] },
  { label: "Cloud & DevOps", tags: ["AWS CDK", "Docker", "Jenkins", "CodePipeline", "Git", "Linux"] },
  { label: "Web & Automation", tags: ["ReactJS", "NodeJS", "Spring Boot", "MongoDB", "UiPath RPA"] },
];

const EXPERIENCES = [
  {
    company: "Vision Cosmos",
    badge: "AI / IoT",
    badgeType: "ai",
    role: "AI Developer Intern · Srinagar",
    date: "Oct 2024 – Jan 2025",
    bullets: [
      "Architected an intelligent IoT-based telescope control system using Raspberry Pi as the edge device.",
      "Executed AI-driven voice command processing locally for automated telescope positioning.",
      "Integrated Stellarium Remote Control API and OpenAI for real-time celestial data retrieval.",
    ],
  },
  {
    company: "Corover",
    badge: "AI / NLP",
    badgeType: "ai",
    role: "AI/ML Intern · Remote",
    date: "Dec 2023 – Jul 2024",
    bullets: [
      "Developed an on-premises language prediction model using MBART and RoBERTa.",
      "Implemented FAISS-based knowledge bases for chatbots, enabling fast semantic retrieval.",
      "Scraped complex websites and performed data analysis for model training pipelines.",
      "Trained chatbots using open-source Hugging Face models and collaborated across teams.",
    ],
  },
  {
    company: "Pointers",
    badge: "DevOps",
    badgeType: "devops",
    role: "DevOps Engineering Associate Intern · Remote",
    date: "Mar 2023 – Jul 2023",
    bullets: [
      "Migrated 100+ existing Lambda functions and API Gateway configurations to AWS CDK.",
      "Coordinated a new CDK-based CI/CD pipeline via AWS CodePipeline.",
      "Participated in code reviews and contributed to high code quality standards.",
    ],
  },
  {
    company: "Ersilia (Outreachy)",
    badge: "Open Source",
    badgeType: "oss",
    role: "Contributor · Remote",
    date: "Mar 2023 – Apr 2023",
    bullets: [
      "Reviewed 10+ scientific articles to integrate 5 new models into the Ersilia Model Hub.",
      "Managed, integrated, and tested third-party open-source libraries (10+ dependencies).",
      "Conducted literature research to expand the biomedical model catalog.",
    ],
  },
];

const PROJECTS = [
  {
    icon: "🔭",
    title: "IoT Telescope Control System",
    period: "Oct 2024 – Jan 2025",
    desc: "Voice-controlled telescope running on a Raspberry Pi edge device. Integrated Stellarium API and OpenAI for automated celestial object positioning via natural language commands.",
    tech: ["Raspberry Pi", "OpenAI", "Stellarium API", "IoT", "Voice AI"],
  },
  {
    icon: "🌐",
    title: "Language Prediction System",
    period: "Apr 2024 – Jun 2024",
    desc: "Hinglish-to-Hindi translation pipeline combining a custom transformer model for transliteration with multilingual language detection. Built RESTful APIs for production deployment.",
    tech: ["XLM-RoBERTa", "MBART", "Transformers", "REST API", "Python"],
  },
  {
    icon: "📄",
    title: "Cheque OCR System",
    period: "Jan 2023 – Mar 2023",
    desc: "Document processing system for bank cheques combining YOLO for field detection with Google Vision API for text extraction. Includes signature detection and expiry validation.",
    tech: ["YOLO", "Google Vision API", "Computer Vision", "OCR", "Python"],
  },
  {
    icon: "🤖",
    title: "Counsel Bot",
    period: "Aug 2022 – Dec 2022",
    desc: "AI-driven career counselling system with an AR avatar. Built a generative knowledge base for context-aware responses and integrated RPA with UiPath for LinkedIn data retrieval.",
    tech: ["Generative AI", "Augmented Reality", "UiPath RPA", "Knowledge Base"],
  },
];

// ---------- Sub-components ----------

function AnimatedSection({ id, children, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </section>
  );
}

function SectionHeader({ num, title }) {
  return (
    <div className="flex items-center gap-4 mb-16">
      <span style={{ color: "var(--accent)", fontSize: 11, letterSpacing: "0.15em" }}>{num}</span>
      <div style={{ width: 60, height: 1, background: "var(--border)" }} />
      <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(28px,4vw,48px)", letterSpacing: -1.5, lineHeight: 1.05 }}>
        {title}
      </h2>
    </div>
  );
}

function SkillCard({ label, tags }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered ? "var(--accent)" : "var(--border)"}`,
        borderRadius: 8, background: "var(--card)", padding: "20px 24px",
        transform: hovered ? "translateX(4px)" : "none",
        transition: "all 0.2s",
      }}
    >
      <div style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 10 }}>{label}</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {tags.map(t => (
          <span key={t} style={{ background: "var(--surface)", border: "1px solid var(--border)", padding: "3px 10px", borderRadius: 3, fontSize: 12, color: "var(--text)" }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

function TimelineItem({ item, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setTimeout(() => { setVisible(true); obs.disconnect(); }, index * 100); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [index]);

  const badgeColors = {
    ai: { bg: "rgba(126,255,212,0.1)", color: "var(--accent)", border: "rgba(126,255,212,0.2)" },
    devops: { bg: "rgba(255,107,107,0.1)", color: "#ff6b6b", border: "rgba(255,107,107,0.2)" },
    oss: { bg: "rgba(255,209,102,0.1)", color: "#ffd166", border: "rgba(255,209,102,0.2)" },
  };
  const bc = badgeColors[item.badgeType] || badgeColors.ai;

  return (
    <div
      ref={ref}
      style={{
        position: "relative", paddingLeft: 32, marginBottom: 56,
        opacity: visible ? 1 : 0, transform: visible ? "none" : "translateX(-16px)",
        transition: "all 0.5s ease",
      }}
    >
      <div style={{ position: "absolute", left: -5, top: 6, width: 10, height: 10, border: "2px solid var(--accent)", borderRadius: "50%", background: "var(--bg)" }} />
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4, flexWrap: "wrap" }}>
        <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 16 }}>{item.company}</span>
        <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 3, letterSpacing: "0.08em", textTransform: "uppercase", background: bc.bg, color: bc.color, border: `1px solid ${bc.border}` }}>{item.badge}</span>
      </div>
      <div style={{ fontSize: 13, color: "var(--muted)", marginBottom: 2 }}>{item.role}</div>
      <div style={{ fontSize: 11, color: "var(--accent)", letterSpacing: "0.05em", marginBottom: 14 }}>{item.date}</div>
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
        {item.bullets.map((b, i) => (
          <li key={i} style={{ color: "var(--muted)", paddingLeft: 16, position: "relative", fontSize: 13, lineHeight: 1.7 }}>
            <span style={{ position: "absolute", left: 0, color: "var(--accent)", fontSize: 11 }}>→</span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setTimeout(() => { setVisible(true); obs.disconnect(); }, index * 80); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered ? "rgba(126,255,212,0.3)" : "var(--border)"}`,
        borderRadius: 12, background: "var(--card)", padding: 32, position: "relative", overflow: "hidden",
        opacity: visible ? 1 : 0, transform: visible ? (hovered ? "translateY(-6px)" : "none") : "translateY(20px)",
        transition: "all 0.3s ease",
        boxShadow: hovered ? "0 24px 60px rgba(0,0,0,0.4)" : "none",
      }}
    >
      {hovered && <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(126,255,212,0.04),transparent)", pointerEvents: "none" }} />}
      <div style={{ width: 48, height: 48, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 20, background: "var(--surface)", border: "1px solid var(--border)" }}>{project.icon}</div>
      <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 17, marginBottom: 6 }}>{project.title}</div>
      <div style={{ fontSize: 11, color: "var(--accent)", letterSpacing: "0.05em", marginBottom: 10 }}>{project.period}</div>
      <div style={{ fontSize: 12.5, color: "var(--muted)", lineHeight: 1.75, marginBottom: 18 }}>{project.desc}</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {project.tech.map(t => (
          <span key={t} style={{ fontSize: 10, padding: "3px 8px", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 100, color: "var(--muted)", letterSpacing: "0.04em" }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("sending");
  setErrorMsg("");

  const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

  try {
    // Wake the server up first, retry until alive (max 30s)
    await wakeServer(API);

    const res = await fetch(`${API}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Something went wrong");
    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
  } catch (err) {
    setStatus("error");
    setErrorMsg(err.message);
  }
};

async function wakeServer(apiUrl, maxWaitMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < maxWaitMs) {
    try {
      const res = await fetch(`${apiUrl}/health`, { signal: AbortSignal.timeout(5000) });
      if (res.ok) return; // server is awake
    } catch (_) {}
    await new Promise(r => setTimeout(r, 2000)); // wait 2s, retry
  }
  throw new Error("Server is taking too long to wake up. Please try again.");
}

  const inputStyle = {
    background: "var(--card)", border: "1px solid var(--border)", borderRadius: 6,
    padding: "12px 16px", color: "var(--text)", fontFamily: "'DM Mono',monospace",
    fontSize: 13, outline: "none", width: "100%", transition: "border-color 0.2s, box-shadow 0.2s",
  };

  const labelStyle = { fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", display: "block", marginBottom: 6 };

  if (status === "success") {
    return (
      <div style={{ textAlign: "center", padding: 40, border: "1px solid rgba(126,255,212,0.3)", borderRadius: 8, background: "rgba(126,255,212,0.05)", color: "var(--accent)" }}>
        <div style={{ fontSize: 32, marginBottom: 12 }}>✓</div>
        <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 18, marginBottom: 8 }}>Message Sent!</div>
        <div style={{ fontSize: 13, color: "var(--muted)" }}>I'll get back to you soon.</div>
        <button onClick={() => setStatus("idle")} style={{ marginTop: 20, background: "transparent", border: "1px solid var(--border)", color: "var(--muted)", padding: "8px 20px", borderRadius: 6, cursor: "pointer", fontSize: 12 }}>Send Another</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div>
          <label style={labelStyle}>Name</label>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required style={inputStyle}
            onFocus={e => { e.target.style.borderColor = "var(--accent)"; e.target.style.boxShadow = "0 0 0 3px rgba(126,255,212,0.08)"; }}
            onBlur={e => { e.target.style.borderColor = "var(--border)"; e.target.style.boxShadow = "none"; }} />
        </div>
        <div>
          <label style={labelStyle}>Email</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required style={inputStyle}
            onFocus={e => { e.target.style.borderColor = "var(--accent)"; e.target.style.boxShadow = "0 0 0 3px rgba(126,255,212,0.08)"; }}
            onBlur={e => { e.target.style.borderColor = "var(--border)"; e.target.style.boxShadow = "none"; }} />
        </div>
      </div>
      <div>
        <label style={labelStyle}>Subject</label>
        <input name="subject" value={form.subject} onChange={handleChange} placeholder="What's this about?" style={inputStyle}
          onFocus={e => { e.target.style.borderColor = "var(--accent)"; e.target.style.boxShadow = "0 0 0 3px rgba(126,255,212,0.08)"; }}
          onBlur={e => { e.target.style.borderColor = "var(--border)"; e.target.style.boxShadow = "none"; }} />
      </div>
      <div>
        <label style={labelStyle}>Message</label>
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project, opportunity, or idea..." required rows={5}
          style={{ ...inputStyle, resize: "vertical" }}
          onFocus={e => { e.target.style.borderColor = "var(--accent)"; e.target.style.boxShadow = "0 0 0 3px rgba(126,255,212,0.08)"; }}
          onBlur={e => { e.target.style.borderColor = "var(--border)"; e.target.style.boxShadow = "none"; }} />
      </div>
      {status === "error" && (
        <div style={{ fontSize: 12, color: "#ff6b6b", padding: "10px 14px", background: "rgba(255,107,107,0.08)", border: "1px solid rgba(255,107,107,0.2)", borderRadius: 6 }}>
          ✗ {errorMsg}
        </div>
      )}
      <button type="submit" disabled={status === "sending"}
        style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: status === "sending" ? "#5de8ba" : "var(--accent)", color: "#0a0a0f", padding: "14px 32px", borderRadius: 6, fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.06em", border: "none", cursor: "pointer", width: "100%", transition: "all 0.2s" }}>
        {status === "sending" ? "Sending..." : "Send Message →"}
      </button>
    </form>
  );
}

// ---------- Main App ----------

export default function App() {
  const [scrollPct, setScrollPct] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [trailPos, setTrailPos] = useState({ x: -100, y: -100 });
  const [cursorBig, setCursorBig] = useState(false);
  const trailRef = useRef({ x: -100, y: -100 });
  const mouseRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef(null);

  useEffect(() => {
    const onMouseMove = (e) => { mouseRef.current = { x: e.clientX, y: e.clientY }; setCursorPos({ x: e.clientX, y: e.clientY }); };
    window.addEventListener("mousemove", onMouseMove);
    const animate = () => {
      trailRef.current.x += (mouseRef.current.x - trailRef.current.x) * 0.12;
      trailRef.current.y += (mouseRef.current.y - trailRef.current.y) * 0.12;
      setTrailPos({ x: trailRef.current.x, y: trailRef.current.y });
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    const onScroll = () => setScrollPct((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
    window.addEventListener("scroll", onScroll);
    return () => { window.removeEventListener("mousemove", onMouseMove); window.removeEventListener("scroll", onScroll); cancelAnimationFrame(rafRef.current); };
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div style={{ background: "var(--bg)", color: "var(--text)", fontFamily: "'DM Mono',monospace", fontSize: 14, lineHeight: 1.6, overflowX: "hidden", cursor: "none" }}>
      {/* Scroll bar */}
      <div style={{ position: "fixed", top: 0, left: 0, height: 2, width: `${scrollPct}%`, background: "linear-gradient(to right,var(--accent),#ff6b6b)", zIndex: 200, transition: "width 0.1s" }} />

      {/* Custom cursor */}
      <div style={{ position: "fixed", width: cursorBig ? 20 : 12, height: cursorBig ? 20 : 12, background: "var(--accent)", borderRadius: "50%", pointerEvents: "none", zIndex: 9999, left: cursorPos.x, top: cursorPos.y, transform: "translate(-50%,-50%)", transition: "width 0.2s,height 0.2s", mixBlendMode: "screen" }} />
      <div style={{ position: "fixed", width: cursorBig ? 56 : 36, height: cursorBig ? 56 : 36, border: "1px solid var(--accent)", borderRadius: "50%", pointerEvents: "none", zIndex: 9998, left: trailPos.x, top: trailPos.y, transform: "translate(-50%,-50%)", opacity: 0.4, transition: "width 0.2s,height 0.2s" }} />

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 48px", background: "rgba(10,10,15,0.85)", backdropFilter: "blur(16px)", borderBottom: "1px solid var(--border)" }}>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ fontFamily: "'Syne',sans-serif", fontSize: 18, fontWeight: 800, color: "var(--accent)", background: "none", border: "none", cursor: "none" }}>MS.</button>
        <ul style={{ display: "flex", gap: 36, listStyle: "none" }}>
          {NAV_LINKS.map(link => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                onMouseEnter={() => setCursorBig(true)}
                onMouseLeave={() => setCursorBig(false)}
                style={{ color: "var(--muted)", background: "none", border: "none", cursor: "none", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", transition: "color 0.2s" }}
                onMouseOver={e => e.currentTarget.style.color = "var(--accent)"}
                onMouseOut={e => e.currentTarget.style.color = "var(--muted)"}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* HERO */}
      <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 48px 80px", position: "relative", overflow: "hidden" }}>
        {/* Grid */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px)", backgroundSize: "64px 64px", opacity: 0.3, maskImage: "radial-gradient(ellipse at 50% 0%,black 20%,transparent 70%)" }} />
        {/* Glow */}
        <div style={{ position: "absolute", width: 600, height: 600, background: "radial-gradient(circle,rgba(126,255,212,0.08) 0%,transparent 70%)", top: -100, right: -100, animation: "float 8s ease-in-out infinite" }} />

        <div style={{ position: "relative", maxWidth: 1200, width: "100%" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid var(--border)", background: "var(--card)", padding: "6px 14px", borderRadius: 100, fontSize: 11, letterSpacing: "0.08em", color: "var(--accent)", marginBottom: 32, animation: "fadeUp 0.6s ease 0.2s both" }}>
            <span style={{ width: 6, height: 6, background: "var(--accent)", borderRadius: "50%", animation: "pulse 2s infinite" }} />
            Available for opportunities
          </div>
          <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(52px,8vw,100px)", fontWeight: 800, lineHeight: 0.95, letterSpacing: -3, marginBottom: 24, animation: "fadeUp 0.6s ease 0.3s both" }}>
            Masroor<br /><span style={{ fontFamily: "'Instrument Serif',serif", fontStyle: "italic", color: "var(--accent)", fontWeight: 400 }}>Shah</span>
          </h1>
          <p style={{ fontSize: 14, color: "var(--muted)", maxWidth: 480, lineHeight: 1.8, marginBottom: 40, animation: "fadeUp 0.6s ease 0.4s both" }}>
            AI Developer & Master's student in Applied Computer Science. Building intelligent systems, automation workflows, and AI-driven solutions that actually matter.
          </p>
          <div style={{ display: "flex", gap: 16, animation: "fadeUp 0.6s ease 0.5s both", flexWrap: "wrap" }}>
            <button
              onClick={() => scrollTo("contact")}
              onMouseEnter={() => setCursorBig(true)}
              onMouseLeave={() => setCursorBig(false)}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--accent)", color: "#0a0a0f", padding: "12px 28px", borderRadius: 4, fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.05em", border: "none", cursor: "none", transition: "all 0.2s" }}
              onMouseOver={e => { e.currentTarget.style.background = "#5de8ba"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseOut={e => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.transform = "none"; }}
            >Let's Connect →</button>
            <button
              onClick={() => scrollTo("projects")}
              onMouseEnter={() => setCursorBig(true)}
              onMouseLeave={() => setCursorBig(false)}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid var(--border)", color: "var(--text)", padding: "12px 28px", borderRadius: 4, fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: "0.05em", background: "none", cursor: "none", transition: "all 0.2s" }}
              onMouseOver={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.transform = "none"; }}
            >View Projects</button>
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", width: "fit-content", marginTop: 48, border: "1px solid var(--border)", borderRadius: 8, overflow: "hidden", gap: 1, background: "var(--border)", animation: "fadeUp 0.6s ease 0.6s both" }}>
            {[["4+", "Internships"], ["3+", "Projects"], ["8", "IELTS Band"], ["4+", "Languages"]].map(([num, label]) => (
              <div key={label} style={{ background: "var(--card)", padding: "24px 32px", textAlign: "center" }}>
                <span style={{ fontFamily: "'Syne',sans-serif", fontSize: 36, fontWeight: 800, color: "var(--accent)", display: "block", lineHeight: 1 }}>{num}</span>
                <div style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: "linear-gradient(to right,transparent,var(--border),transparent)", margin: "0 48px" }} />

      {/* ABOUT */}
      <AnimatedSection id="about" style={{ padding: "100px 48px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ padding: "100px 0" }}>
          <SectionHeader num="01 — ABOUT" title="Who I Am" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
            <div>
              {[
                <>I'm a <span style={{ color: "var(--text)" }}>Master's student in Applied Computer Science</span> at Hochschule Schmalkalden, Germany, with a deep passion for AI, automation, and intelligent system design.</>,
                <>My journey spans from building <span style={{ color: "var(--text)" }}>IoT-based telescope control systems</span> with Raspberry Pi and voice AI, to developing <span style={{ color: "var(--text)" }}>on-premises NLP models</span> and knowledge bases for enterprise chatbots.</>,
                <>Currently sharpening my German (A2 → B1) while expanding my toolkit in <span style={{ color: "var(--text)" }}>LLMs, LangChain, computer vision, and workflow automation</span>. I believe the best code makes people's lives genuinely easier.</>,
                <>AWS Certified Cloud Practitioner · IELTS Band 8 · Goethe-Zertifikat A1</>,
              ].map((txt, i) => (
                <p key={i} style={{ color: "var(--muted)", lineHeight: 1.9, marginBottom: 16 }}>{txt}</p>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {SKILLS.map(s => <SkillCard key={s.label} {...s} />)}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <div style={{ height: 1, background: "linear-gradient(to right,transparent,var(--border),transparent)", margin: "0 48px" }} />

      {/* EXPERIENCE */}
      <AnimatedSection id="experience">
        <div style={{ padding: "100px 48px", maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeader num="02 — EXPERIENCE" title="Work History" />
          <div style={{ position: "relative", paddingLeft: 32 }}>
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 1, background: "linear-gradient(to bottom,var(--accent),transparent)" }} />
            {EXPERIENCES.map((item, i) => <TimelineItem key={item.company} item={item} index={i} />)}
          </div>
        </div>
      </AnimatedSection>

      <div style={{ height: 1, background: "linear-gradient(to right,transparent,var(--border),transparent)", margin: "0 48px" }} />

      {/* PROJECTS */}
      <AnimatedSection id="projects">
        <div style={{ padding: "100px 48px", maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeader num="03 — PROJECTS" title="Selected Work" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 24 }}>
            {PROJECTS.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
          </div>
        </div>
      </AnimatedSection>

      <div style={{ height: 1, background: "linear-gradient(to right,transparent,var(--border),transparent)", margin: "0 48px" }} />

      {/* CONTACT */}
      <AnimatedSection id="contact">
        <div style={{ padding: "100px 48px", maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeader num="04 — CONTACT" title="Get In Touch" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 80, alignItems: "start" }}>
            <div>
              <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 24, fontWeight: 700, marginBottom: 14, letterSpacing: -0.5 }}>Let's build something meaningful.</h3>
              <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 36, fontSize: 13 }}>Whether you have an internship opportunity, a project collaboration, or just want to talk about AI and automation — my inbox is always open.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { icon: "✉", label: "masroorhussainshah01@gmail.com", href: "mailto:masroorhussainshah01@gmail.com" },
                  { icon: "📞", label: "+49 152 253 99501", href: "tel:+4915225399501" },
                  { icon: "in", label: "linkedin.com/in/masroorshah", href: "https://linkedin.com/in/masroorshah" },
                  { icon: "⌥", label: "github.com/masroor07", href: "https://github.com/masroor07" },
                ].map(link => (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                    onMouseEnter={() => setCursorBig(true)}
                    onMouseLeave={() => setCursorBig(false)}
                    style={{ display: "flex", alignItems: "center", gap: 12, color: "var(--muted)", textDecoration: "none", fontSize: 13, transition: "color 0.2s" }}
                    onMouseOver={e => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.querySelector('.icon-box').style.borderColor = "var(--accent)"; }}
                    onMouseOut={e => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.querySelector('.icon-box').style.borderColor = "var(--border)"; }}
                  >
                    <div className="icon-box" style={{ width: 36, height: 36, border: "1px solid var(--border)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, background: "var(--card)", transition: "border-color 0.2s", flexShrink: 0 }}>{link.icon}</div>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </AnimatedSection>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid var(--border)", padding: "32px 48px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <p style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.05em" }}>© 2025 <span style={{ color: "var(--accent)" }}>Masroor Shah</span>. Designed & built with intention.</p>
        <p style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.05em" }}>Schmalkalden, DE · Available for opportunities</p>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Instrument+Serif:ital@0;1&family=DM+Mono:wght@300;400&display=swap');
        :root {
          --bg: #0a0a0f; --surface: #111118; --border: #1e1e2e;
          --accent: #7effd4; --accent2: #ff6b6b; --accent3: #ffd166;
          --text: #e8e8f0; --muted: #6b6b8a; --card: #13131e;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { overflow-x: hidden; }
        @keyframes float { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-30px,30px) scale(1.05)} }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(0.7)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: var(--bg); } ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }
      `}</style>
    </div>
  );
}
