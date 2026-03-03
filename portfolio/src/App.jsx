import React, { useState, useEffect, useRef } from "react";

// ── Translations ──────────────────────────────────────────────────────────────
const T = {
  en: {
    nav: ["About", "Experience", "Projects", "Contact"],
    heroTag: "Available for opportunities",
    heroCta1: "Let's Connect →",
    heroCta2: "View Projects",
    stats: [["4+", "Internships"], ["3+", "Projects"], ["8", "IELTS Band"], ["4+", "Languages"]],
    sec1: "01 — ABOUT", secTitle1: "Who I Am",
    about1: <>I'm a <b>Master's student in Applied Computer Science</b> at Hochschule Schmalkalden, Germany, with a deep passion for AI, automation, and intelligent system design.</>,
    about2: <>My journey spans from building <b>IoT-based telescope control systems</b> with Raspberry Pi and voice AI, to developing <b>on-premises NLP models</b> and knowledge bases for enterprise chatbots.</>,
    about3: <>Currently sharpening my German (A2 → B1) while expanding my toolkit in <b>LLMs, LangChain, computer vision, and workflow automation</b>. I believe the best code makes people's lives genuinely easier.</>,
    about4: "AWS Certified Cloud Practitioner · IELTS Band 8 · Goethe-Zertifikat A1",
    skills: [
      { label: "AI / ML", tags: ["LangChain", "Hugging Face", "FAISS", "MBART", "RoBERTa", "YOLO", "OpenAI API", "n8n"] },
      { label: "Programming", tags: ["Python", "JavaScript", "Java", "C/C++"] },
      { label: "Cloud & DevOps", tags: ["AWS CDK", "Docker", "Jenkins", "CodePipeline", "Git", "Linux"] },
      { label: "Web & Automation", tags: ["ReactJS", "NodeJS", "Spring Boot", "MongoDB", "UiPath RPA"] },
    ],
    sec2: "02 — EXPERIENCE", secTitle2: "Work History",
    sec3: "03 — PROJECTS", secTitle3: "Selected Work",
    viewProject: "View Project →",
    sec4: "04 — CONTACT", secTitle4: "Get In Touch",
    contactHeading: "Let's build something meaningful.",
    contactSubtext: "Whether you have an internship opportunity, a project collaboration, or just want to talk about AI and automation — my inbox is always open.",
    formName: "Name", formEmail: "Email", formSubject: "Subject", formMessage: "Message",
    formNamePh: "Your name", formEmailPh: "your@email.com", formSubjectPh: "What's this about?", formMsgPh: "Tell me about your project, opportunity, or idea...",
    formSend: "Send Message →", formSending: "⏳ Waking server...", formSuccess: "Message Sent!", formSuccessMsg: "I'll get back to you soon.",
    formAnother: "Send Another", formError: "Server is taking too long. Please try again.",
    footerLeft: "Designed & built with intention.",
    footerRight: "Schmalkalden, DE · Available for opportunities",
    experiences: [
      {
        company: "Vision Cosmos", badge: "AI / IoT", badgeType: "ai",
        role: "AI Developer Intern · Srinagar", date: "Oct 2024 – Jan 2025",
        bullets: [
          "Architected an intelligent IoT-based telescope control system using Raspberry Pi as the edge device.",
          "Executed AI-driven voice command processing locally for automated telescope positioning.",
          "Integrated Stellarium Remote Control API and OpenAI for real-time celestial data retrieval.",
        ],
      },
      {
        company: "Corover", badge: "AI / NLP", badgeType: "ai",
        role: "AI/ML Intern · Remote", date: "Dec 2023 – Jul 2024",
        bullets: [
          "Developed an on-premises language prediction model using MBART and RoBERTa.",
          "Implemented FAISS-based knowledge bases for chatbots, enabling fast semantic retrieval.",
          "Scraped complex websites and performed data analysis for model training pipelines.",
          "Trained chatbots using open-source Hugging Face models and collaborated across teams.",
        ],
      },
      {
        company: "Pointers", badge: "DevOps", badgeType: "devops",
        role: "DevOps Engineering Associate Intern · Remote", date: "Mar 2023 – Jul 2023",
        bullets: [
          "Migrated 100+ existing Lambda functions and API Gateway configurations to AWS CDK.",
          "Coordinated a new CDK-based CI/CD pipeline via AWS CodePipeline.",
          "Participated in code reviews and contributed to high code quality standards.",
        ],
      },
      {
        company: "Ersilia (Outreachy)", badge: "Open Source", badgeType: "oss",
        role: "Contributor · Remote", date: "Mar 2023 – Apr 2023",
        bullets: [
          "Reviewed 10+ scientific articles to integrate 5 new models into the Ersilia Model Hub.",
          "Managed, integrated, and tested third-party open-source libraries (10+ dependencies).",
          "Conducted literature research to expand the biomedical model catalog.",
        ],
      },
    ],
    projects: [
      {
        icon: "🔭", title: "IoT Telescope Control System", period: "Oct 2024 – Jan 2025",
        desc: "Voice-controlled telescope running on a Raspberry Pi edge device. Integrated Stellarium API and OpenAI for automated celestial object positioning via natural language commands.",
        tech: ["Raspberry Pi", "OpenAI", "Stellarium API", "IoT", "Voice AI"],
        link: "https://github.com/masroor07",
      },
      {
        icon: "🌐", title: "Language Prediction System", period: "Apr 2024 – Jun 2024",
        desc: "Hinglish-to-Hindi translation pipeline combining a custom transformer model for transliteration with multilingual language detection. Built RESTful APIs for production deployment.",
        tech: ["XLM-RoBERTa", "MBART", "Transformers", "REST API", "Python"],
        link: "https://github.com/masroor07",
      },
      {
        icon: "📄", title: "Cheque OCR System", period: "Jan 2023 – Mar 2023",
        desc: "Document processing system for bank cheques combining YOLO for field detection with Google Vision API for text extraction. Includes signature detection and expiry validation.",
        tech: ["YOLO", "Google Vision API", "Computer Vision", "OCR", "Python"],
        link: "https://github.com/masroor07",
      },
      {
        icon: "🤖", title: "Counsel Bot", period: "Aug 2022 – Dec 2022",
        desc: "AI-driven career counselling system with an AR avatar. Built a generative knowledge base for context-aware responses and integrated RPA with UiPath for LinkedIn data retrieval.",
        tech: ["Generative AI", "Augmented Reality", "UiPath RPA", "Knowledge Base"],
        link: "https://github.com/masroor07",
      },
    ],
  },
  de: {
    nav: ["Über mich", "Erfahrung", "Projekte", "Kontakt"],
    heroTag: "Offen für Möglichkeiten",
    heroCta1: "Kontakt aufnehmen →",
    heroCta2: "Projekte ansehen",
    stats: [["4+", "Praktika"], ["3+", "Projekte"], ["8", "IELTS Band"], ["4+", "Sprachen"]],
    sec1: "01 — ÜBER MICH", secTitle1: "Wer ich bin",
    about1: <>Ich bin <b>Masterstudent der Angewandten Informatik</b> an der Hochschule Schmalkalden mit großer Leidenschaft für KI, Automatisierung und intelligente Systeme.</>,
    about2: <>Mein Weg reicht von der Entwicklung <b>IoT-basierter Teleskopsteuerungssysteme</b> mit Raspberry Pi und Sprach-KI bis hin zu <b>On-Premises-NLP-Modellen</b> und Wissensdatenbanken für Unternehmens-Chatbots.</>,
    about3: <>Ich vertiefe derzeit meine Deutschkenntnisse (A2 → B1) und erweitere mein Know-how in <b>LLMs, LangChain, Computer Vision und Workflow-Automatisierung</b>. Ich glaube, der beste Code macht das Leben der Menschen wirklich einfacher.</>,
    about4: "AWS Certified Cloud Practitioner · IELTS Band 8 · Goethe-Zertifikat A1",
    skills: [
      { label: "KI / ML", tags: ["LangChain", "Hugging Face", "FAISS", "MBART", "RoBERTa", "YOLO", "OpenAI API", "n8n"] },
      { label: "Programmierung", tags: ["Python", "JavaScript", "Java", "C/C++"] },
      { label: "Cloud & DevOps", tags: ["AWS CDK", "Docker", "Jenkins", "CodePipeline", "Git", "Linux"] },
      { label: "Web & Automatisierung", tags: ["ReactJS", "NodeJS", "Spring Boot", "MongoDB", "UiPath RPA"] },
    ],
    sec2: "02 — ERFAHRUNG", secTitle2: "Berufserfahrung",
    sec3: "03 — PROJEKTE", secTitle3: "Ausgewählte Projekte",
    viewProject: "Projekt ansehen →",
    sec4: "04 — KONTAKT", secTitle4: "Kontakt aufnehmen",
    contactHeading: "Lass uns etwas Sinnvolles bauen.",
    contactSubtext: "Ob Praktikumsangebot, Projektzusammenarbeit oder einfach ein Gespräch über KI und Automatisierung — mein Posteingang steht immer offen.",
    formName: "Name", formEmail: "E-Mail", formSubject: "Betreff", formMessage: "Nachricht",
    formNamePh: "Dein Name", formEmailPh: "deine@email.de", formSubjectPh: "Worum geht es?", formMsgPh: "Erzähl mir von deinem Projekt, Angebot oder deiner Idee...",
    formSend: "Nachricht senden →", formSending: "⏳ Server wird gestartet...", formSuccess: "Nachricht gesendet!", formSuccessMsg: "Ich melde mich bald bei dir.",
    formAnother: "Weitere Nachricht", formError: "Server antwortet nicht. Bitte erneut versuchen.",
    footerLeft: "Mit Sorgfalt entworfen und entwickelt.",
    footerRight: "Schmalkalden, DE · Offen für Möglichkeiten",
    experiences: [
      {
        company: "Vision Cosmos", badge: "KI / IoT", badgeType: "ai",
        role: "KI-Entwickler Praktikant · Srinagar", date: "Okt 2024 – Jan 2025",
        bullets: [
          "Entwurf und Implementierung eines intelligenten IoT-basierten Teleskopsteuerungssystems mit Raspberry Pi als Edge-Gerät.",
          "Lokale Ausführung einer KI-gesteuerten Sprachbefehlsverarbeitung zur automatischen Positionierung des Teleskops.",
          "Anschluss des Raspberry Pi an die Teleskop-Hardware und Integration der Stellarium Remote Control API und OpenAI.",
        ],
      },
      {
        company: "Corover", badge: "KI / NLP", badgeType: "ai",
        role: "KI/ML Praktikant · Remote", date: "Dez 2023 – Jul 2024",
        bullets: [
          "Entwicklung eines On-Premises-Sprachvorhersagemodells mit MBART und RoBERTa.",
          "Nutzung und Implementierung von FAISS zur Erstellung von Wissensdatenbanken für Chatbots.",
          "Scraping komplexer Websites, Datensammlung und -analyse für Trainings-Pipelines.",
          "Training von Chatbots mit Open-Source-Modellen von Hugging Face.",
        ],
      },
      {
        company: "Pointers", badge: "DevOps", badgeType: "devops",
        role: "DevOps Engineering Associate Praktikant · Remote", date: "Mär 2023 – Jul 2023",
        bullets: [
          "Migration von über 100 vorhandenen Lambda-Funktionen und API-Gateway-Konfigurationen zu AWS CDK.",
          "Implementierung einer neuen CDK-basierten CI/CD-Pipeline über AWS CodePipeline.",
          "Teilnahme an Code-Reviews zur Sicherstellung hoher Codequalität.",
        ],
      },
      {
        company: "Ersilia (Outreachy)", badge: "Open Source", badgeType: "oss",
        role: "Contributor · Remote", date: "Mär 2023 – Apr 2023",
        bullets: [
          "Analyse von mehr als 10 wissenschaftlichen Artikeln zur Integration von 5 neuen Modellen in das Modell-Hub.",
          "Verwaltung, Integration und Testung umfangreicher Open-Source-Abhängigkeiten (10+ Libraries).",
          "Durchführung von Literaturrecherchen zur Erweiterung des Modellkatalogs.",
        ],
      },
    ],
    projects: [
      {
        icon: "🔭", title: "IoT-Teleskopsteuerungssystem", period: "Okt 2024 – Jan 2025",
        desc: "Sprachgesteuertes Teleskop auf Raspberry Pi-Basis. Integration der Stellarium API und OpenAI zur automatisierten Ausrichtung auf Himmelsobjekte per natürlicher Sprache.",
        tech: ["Raspberry Pi", "OpenAI", "Stellarium API", "IoT", "Sprach-KI"],
        link: "https://github.com/masroor07",
      },
      {
        icon: "🌐", title: "Sprachvorhersagesystem", period: "Apr 2024 – Jun 2024",
        desc: "Hinglish-zu-Hindi-Übersetzungspipeline mit benutzerdefiniertem Transformer-Modell für Transliteration und Übersetzung. REST-APIs und mehrsprachige Spracherkennung mit XLM-RoBERTa.",
        tech: ["XLM-RoBERTa", "MBART", "Transformers", "REST API", "Python"],
        link: "https://github.com/masroor07",
      },
      {
        icon: "📄", title: "Scheck-OCR-System", period: "Jan 2023 – Mär 2023",
        desc: "Dokumentenverarbeitungssystem für Bankschecks mit YOLO zur Felderkennung und Google Vision API zur Textextraktion. Enthält Signaturerkennung und Ablaufprüfung.",
        tech: ["YOLO", "Google Vision API", "Computer Vision", "OCR", "Python"],
        link: "https://github.com/masroor07",
      },
      {
        icon: "🤖", title: "Counsel Bot", period: "Aug 2022 – Dez 2022",
        desc: "KI-basiertes Karriereberatungssystem mit AR-Avatar. Generative Wissensdatenbank für kontextbezogene Antworten und RPA-Integration mit UiPath für LinkedIn-Daten.",
        tech: ["Generative KI", "Augmented Reality", "UiPath RPA", "Wissensdatenbank"],
        link: "https://github.com/masroor07",
      },
    ],
  },
};

// ── Theme CSS vars ────────────────────────────────────────────────────────────
const DARK = {
  "--bg": "#0a0a0f", "--surface": "#111118", "--border": "#1e1e2e",
  "--accent": "#7effd4", "--accent2": "#ff6b6b", "--accent3": "#ffd166",
  "--text": "#e8e8f0", "--muted": "#6b6b8a", "--card": "#13131e",
  "--nav-bg": "rgba(10,10,15,0.85)", "--shadow": "rgba(0,0,0,0.4)",
};
const LIGHT = {
  "--bg": "#f5f5f0", "--surface": "#ebebе4", "--border": "#d8d8cc",
  "--accent": "#0a8a5e", "--accent2": "#d94f4f", "--accent3": "#b8860b",
  "--text": "#111118", "--muted": "#666670", "--card": "#ffffff",
  "--nav-bg": "rgba(245,245,240,0.9)", "--shadow": "rgba(0,0,0,0.12)",
};

// ── Sub-components ────────────────────────────────────────────────────────────

function AnimatedSection({ id, children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <section id={id} ref={ref} style={{ transition: "all 0.7s ease", opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(28px)" }}>
      {children}
    </section>
  );
}

function SectionHeader({ num, title }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 56 }}>
      <span style={{ color: "var(--accent)", fontSize: 11, letterSpacing: "0.15em", whiteSpace: "nowrap" }}>{num}</span>
      <div style={{ width: 60, height: 1, background: "var(--border)", flexShrink: 0 }} />
      <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(26px,4vw,46px)", letterSpacing: -1.5, lineHeight: 1.05, color: "var(--text)" }}>{title}</h2>
    </div>
  );
}

function SkillCard({ label, tags }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ border: `1px solid ${hov ? "var(--accent)" : "var(--border)"}`, borderRadius: 8, background: "var(--card)", padding: "18px 22px", transform: hov ? "translateX(4px)" : "none", transition: "all 0.2s" }}>
      <div style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 10 }}>{label}</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {tags.map(t => <span key={t} style={{ background: "var(--surface)", border: "1px solid var(--border)", padding: "3px 10px", borderRadius: 3, fontSize: 12, color: "var(--text)" }}>{t}</span>)}
      </div>
    </div>
  );
}

function TimelineItem({ item, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setTimeout(() => { setVisible(true); obs.disconnect(); }, index * 100); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [index]);
  const bc = { ai: { bg: "rgba(126,255,212,0.1)", color: "var(--accent)", border: "rgba(126,255,212,0.2)" }, devops: { bg: "rgba(255,107,107,0.1)", color: "var(--accent2)", border: "rgba(255,107,107,0.2)" }, oss: { bg: "rgba(255,209,102,0.1)", color: "var(--accent3)", border: "rgba(255,209,102,0.2)" } }[item.badgeType] || {};
  return (
    <div ref={ref} style={{ position: "relative", paddingLeft: 32, marginBottom: 52, opacity: visible ? 1 : 0, transform: visible ? "none" : "translateX(-16px)", transition: "all 0.5s ease" }}>
      <div style={{ position: "absolute", left: -5, top: 6, width: 10, height: 10, border: "2px solid var(--accent)", borderRadius: "50%", background: "var(--bg)" }} />
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4, flexWrap: "wrap" }}>
        <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 16, color: "var(--text)" }}>{item.company}</span>
        <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 3, letterSpacing: "0.08em", textTransform: "uppercase", background: bc.bg, color: bc.color, border: `1px solid ${bc.border}` }}>{item.badge}</span>
      </div>
      <div style={{ fontSize: 13, color: "var(--muted)", marginBottom: 2 }}>{item.role}</div>
      <div style={{ fontSize: 11, color: "var(--accent)", letterSpacing: "0.05em", marginBottom: 14 }}>{item.date}</div>
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
        {item.bullets.map((b, i) => (
          <li key={i} style={{ color: "var(--muted)", paddingLeft: 16, position: "relative", fontSize: 13, lineHeight: 1.7 }}>
            <span style={{ position: "absolute", left: 0, color: "var(--accent)", fontSize: 11 }}>→</span>{b}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ project, index, viewLabel }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hov, setHov] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setTimeout(() => { setVisible(true); obs.disconnect(); }, index * 80); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [index]);
  return (
    <div ref={ref} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ border: `1px solid ${hov ? "rgba(126,255,212,0.35)" : "var(--border)"}`, borderRadius: 12, background: "var(--card)", padding: 28, position: "relative", overflow: "hidden", display: "flex", flexDirection: "column",
        opacity: visible ? 1 : 0, transform: visible ? (hov ? "translateY(-6px)" : "none") : "translateY(20px)", transition: "all 0.3s ease",
        boxShadow: hov ? `0 20px 50px var(--shadow)` : "none" }}>
      {hov && <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(126,255,212,0.04),transparent)", pointerEvents: "none" }} />}
      <div style={{ width: 46, height: 46, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 18, background: "var(--surface)", border: "1px solid var(--border)" }}>{project.icon}</div>
      <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 16, marginBottom: 5, color: "var(--text)" }}>{project.title}</div>
      <div style={{ fontSize: 11, color: "var(--accent)", letterSpacing: "0.05em", marginBottom: 10 }}>{project.period}</div>
      <div style={{ fontSize: 12.5, color: "var(--muted)", lineHeight: 1.75, marginBottom: 16, flexGrow: 1 }}>{project.desc}</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 18 }}>
        {project.tech.map(t => <span key={t} style={{ fontSize: 10, padding: "3px 8px", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 100, color: "var(--muted)" }}>{t}</span>)}
      </div>
      <a href={project.link} target="_blank" rel="noopener noreferrer"
        style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--accent)", textDecoration: "none", fontFamily: "'Syne',sans-serif", fontWeight: 600, letterSpacing: "0.04em", borderTop: "1px solid var(--border)", paddingTop: 14, transition: "gap 0.2s" }}
        onMouseEnter={e => e.currentTarget.style.gap = "10px"} onMouseLeave={e => e.currentTarget.style.gap = "6px"}>
        {viewLabel}
      </a>
    </div>
  );
}

function ContactForm({ t }) {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [errMsg, setErrMsg] = useState("");
  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const wakeServer = async (apiUrl, maxMs = 30000) => {
    const start = Date.now();
    while (Date.now() - start < maxMs) {
      try { const r = await fetch(`${apiUrl}/health`, { signal: AbortSignal.timeout(5000) }); if (r.ok) return; } catch (_) {}
      await new Promise(r => setTimeout(r, 2000));
    }
    throw new Error(t.formError);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus("sending"); setErrMsg("");
    const API = import.meta.env.VITE_API_URL || "http://localhost:5000";
    try {
      await wakeServer(API);
      const res = await fetch(`${API}/api/contact`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Something went wrong");
      setStatus("success"); setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) { setStatus("error"); setErrMsg(err.message); }
  };

  const inp = { background: "var(--card)", border: "1px solid var(--border)", borderRadius: 6, padding: "12px 16px", color: "var(--text)", fontFamily: "'DM Mono',monospace", fontSize: 13, outline: "none", width: "100%", transition: "border-color 0.2s, box-shadow 0.2s" };
  const lbl = { fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", display: "block", marginBottom: 6 };
  const onFocus = e => { e.target.style.borderColor = "var(--accent)"; e.target.style.boxShadow = "0 0 0 3px rgba(126,255,212,0.08)"; };
  const onBlur  = e => { e.target.style.borderColor = "var(--border)";  e.target.style.boxShadow = "none"; };

  if (status === "success") return (
    <div style={{ textAlign: "center", padding: 40, border: "1px solid rgba(126,255,212,0.3)", borderRadius: 8, background: "rgba(126,255,212,0.05)", color: "var(--accent)" }}>
      <div style={{ fontSize: 32, marginBottom: 12 }}>✓</div>
      <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 18, marginBottom: 8 }}>{t.formSuccess}</div>
      <div style={{ fontSize: 13, color: "var(--muted)" }}>{t.formSuccessMsg}</div>
      <button onClick={() => setStatus("idle")} style={{ marginTop: 20, background: "transparent", border: "1px solid var(--border)", color: "var(--muted)", padding: "8px 20px", borderRadius: 6, cursor: "pointer", fontSize: 12 }}>{t.formAnother}</button>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div><label style={lbl}>{t.formName}</label><input name="name" value={form.name} onChange={handleChange} placeholder={t.formNamePh} required style={inp} onFocus={onFocus} onBlur={onBlur} /></div>
        <div><label style={lbl}>{t.formEmail}</label><input name="email" type="email" value={form.email} onChange={handleChange} placeholder={t.formEmailPh} required style={inp} onFocus={onFocus} onBlur={onBlur} /></div>
      </div>
      <div><label style={lbl}>{t.formSubject}</label><input name="subject" value={form.subject} onChange={handleChange} placeholder={t.formSubjectPh} style={inp} onFocus={onFocus} onBlur={onBlur} /></div>
      <div><label style={lbl}>{t.formMessage}</label><textarea name="message" value={form.message} onChange={handleChange} placeholder={t.formMsgPh} required rows={5} style={{ ...inp, resize: "vertical" }} onFocus={onFocus} onBlur={onBlur} /></div>
      {status === "error" && <div style={{ fontSize: 12, color: "var(--accent2)", padding: "10px 14px", background: "rgba(255,107,107,0.08)", border: "1px solid rgba(255,107,107,0.2)", borderRadius: 6 }}>✗ {errMsg}</div>}
      <button type="submit" disabled={status === "sending"}
        style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "var(--accent)", color: "#0a0a0f", padding: "14px 32px", borderRadius: 6, fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.06em", border: "none", cursor: "pointer", width: "100%", opacity: status === "sending" ? 0.8 : 1, transition: "all 0.2s" }}>
        {status === "sending" ? t.formSending : t.formSend}
      </button>
    </form>
  );
}

// ── Toggle Button ─────────────────────────────────────────────────────────────
function ToggleBtn({ onClick, children, title }) {
  const [hov, setHov] = useState(false);
  return (
    <button onClick={onClick} title={title} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ display: "flex", alignItems: "center", gap: 6, background: hov ? "var(--surface)" : "transparent", border: "1px solid var(--border)", borderRadius: 8, padding: "7px 12px", color: "var(--muted)", fontSize: 12, cursor: "pointer", transition: "all 0.2s", fontFamily: "'DM Mono',monospace", whiteSpace: "nowrap" }}>
      {children}
    </button>
  );
}

// ── Main App ──────────────────────────────────────────────────────────────────
export default function App() {
  const [lang, setLang] = useState("en");
  const [dark, setDark] = useState(true);
  const [scrollPct, setScrollPct] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [trailPos, setTrailPos] = useState({ x: -100, y: -100 });
  const [cursorBig, setCursorBig] = useState(false);
  const trailRef = useRef({ x: -100, y: -100 });
  const mouseRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef(null);

  const t = T[lang];
  const theme = dark ? DARK : LIGHT;

  // Apply theme CSS vars to :root
  useEffect(() => {
    Object.entries(theme).forEach(([k, v]) => document.documentElement.style.setProperty(k, v));
  }, [dark]);

  useEffect(() => {
    const onMove = e => { mouseRef.current = { x: e.clientX, y: e.clientY }; setCursorPos({ x: e.clientX, y: e.clientY }); };
    window.addEventListener("mousemove", onMove);
    const animate = () => {
      trailRef.current.x += (mouseRef.current.x - trailRef.current.x) * 0.12;
      trailRef.current.y += (mouseRef.current.y - trailRef.current.y) * 0.12;
      setTrailPos({ x: trailRef.current.x, y: trailRef.current.y });
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    const onScroll = () => setScrollPct((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
    window.addEventListener("scroll", onScroll);
    return () => { window.removeEventListener("mousemove", onMove); window.removeEventListener("scroll", onScroll); cancelAnimationFrame(rafRef.current); };
  }, []);

  const scrollTo = id => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: "smooth" });
  };

  const big = e => { setCursorBig(true); };
  const small = e => { setCursorBig(false); };

  return (
    <div style={{ background: "var(--bg)", color: "var(--text)", fontFamily: "'DM Mono',monospace", fontSize: 14, lineHeight: 1.6, overflowX: "hidden", cursor: "none", transition: "background 0.3s, color 0.3s" }}>

      {/* Scroll bar */}
      <div style={{ position: "fixed", top: 0, left: 0, height: 2, width: `${scrollPct}%`, background: "linear-gradient(to right,var(--accent),var(--accent2))", zIndex: 200, transition: "width 0.1s" }} />

      {/* Cursor */}
      <div style={{ position: "fixed", width: cursorBig ? 20 : 12, height: cursorBig ? 20 : 12, background: "var(--accent)", borderRadius: "50%", pointerEvents: "none", zIndex: 9999, left: cursorPos.x, top: cursorPos.y, transform: "translate(-50%,-50%)", transition: "width 0.2s,height 0.2s", mixBlendMode: dark ? "screen" : "multiply" }} />
      <div style={{ position: "fixed", width: cursorBig ? 56 : 36, height: cursorBig ? 56 : 36, border: "1px solid var(--accent)", borderRadius: "50%", pointerEvents: "none", zIndex: 9998, left: trailPos.x, top: trailPos.y, transform: "translate(-50%,-50%)", opacity: 0.4, transition: "width 0.2s,height 0.2s" }} />

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 40px", background: "var(--nav-bg)", backdropFilter: "blur(16px)", borderBottom: "1px solid var(--border)", gap: 16 }}>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} onMouseEnter={big} onMouseLeave={small}
          style={{ fontFamily: "'Syne',sans-serif", fontSize: 18, fontWeight: 800, color: "var(--accent)", background: "none", border: "none", cursor: "none", flexShrink: 0 }}>MS.</button>

        <ul style={{ display: "flex", gap: 28, listStyle: "none", margin: 0, padding: 0 }}>
          {t.nav.map((label, i) => (
            <li key={i}>
              <button onClick={() => scrollTo(["about","experience","projects","contact"][i])} onMouseEnter={big} onMouseLeave={small}
                style={{ color: "var(--muted)", background: "none", border: "none", cursor: "none", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", transition: "color 0.2s", fontFamily: "'DM Mono',monospace" }}
                onMouseOver={e => e.currentTarget.style.color = "var(--accent)"} onMouseOut={e => e.currentTarget.style.color = "var(--muted)"}>
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Toggles */}
        <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
          <ToggleBtn onClick={() => setLang(l => l === "en" ? "de" : "en")} title="Toggle language">
            <span style={{ fontSize: 14 }}>{lang === "en" ? "🇩🇪" : "🇬🇧"}</span>
            <span style={{ color: "var(--text)", fontWeight: 600 }}>{lang === "en" ? "DE" : "EN"}</span>
          </ToggleBtn>
          <ToggleBtn onClick={() => setDark(d => !d)} title="Toggle theme">
            <span style={{ fontSize: 14 }}>{dark ? "☀️" : "🌙"}</span>
            <span style={{ color: "var(--text)", fontWeight: 600 }}>{dark ? "Light" : "Dark"}</span>
          </ToggleBtn>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 48px 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px)", backgroundSize: "64px 64px", opacity: 0.3, maskImage: "radial-gradient(ellipse at 50% 0%,black 20%,transparent 70%)" }} />
        <div style={{ position: "absolute", width: 600, height: 600, background: "radial-gradient(circle,rgba(126,255,212,0.08) 0%,transparent 70%)", top: -100, right: -100, animation: "float 8s ease-in-out infinite" }} />
        <div style={{ position: "relative", maxWidth: 1200, width: "100%" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid var(--border)", background: "var(--card)", padding: "6px 14px", borderRadius: 100, fontSize: 11, letterSpacing: "0.08em", color: "var(--accent)", marginBottom: 28, animation: "fadeUp 0.6s ease 0.2s both" }}>
            <span style={{ width: 6, height: 6, background: "var(--accent)", borderRadius: "50%", animation: "pulse 2s infinite", display: "inline-block" }} />
            {t.heroTag}
          </div>
          <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(52px,8vw,100px)", fontWeight: 800, lineHeight: 0.95, letterSpacing: -3, marginBottom: 22, animation: "fadeUp 0.6s ease 0.3s both", color: "var(--text)" }}>
            Masroor<br /><span style={{ fontFamily: "'Instrument Serif',serif", fontStyle: "italic", color: "var(--accent)", fontWeight: 400 }}>Shah</span>
          </h1>
          <p style={{ fontSize: 14, color: "var(--muted)", maxWidth: 480, lineHeight: 1.8, marginBottom: 36, animation: "fadeUp 0.6s ease 0.4s both" }}>
            {lang === "en"
              ? "AI Developer & Master's student in Applied Computer Science. Building intelligent systems, automation workflows, and AI-driven solutions that actually matter."
              : "KI-Entwickler & Masterstudent der Angewandten Informatik. Ich entwickle intelligente Systeme, Automatisierungsworkflows und KI-Lösungen, die wirklich einen Unterschied machen."}
          </p>
          <div style={{ display: "flex", gap: 14, animation: "fadeUp 0.6s ease 0.5s both", flexWrap: "wrap" }}>
            {[{ label: t.heroCta1, filled: true, id: "contact" }, { label: t.heroCta2, filled: false, id: "projects" }].map(btn => (
              <button key={btn.id} onClick={() => scrollTo(btn.id)} onMouseEnter={big} onMouseLeave={small}
                style={{ display: "inline-flex", alignItems: "center", gap: 8, background: btn.filled ? "var(--accent)" : "transparent", color: btn.filled ? "#0a0a0f" : "var(--text)", padding: "12px 26px", borderRadius: 4, fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.05em", border: btn.filled ? "none" : "1px solid var(--border)", cursor: "none", transition: "all 0.2s" }}
                onMouseOver={e => { e.currentTarget.style.transform = "translateY(-2px)"; if (!btn.filled) { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; } }}
                onMouseOut={e => { e.currentTarget.style.transform = "none"; if (!btn.filled) { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text)"; } }}>
                {btn.label}
              </button>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", width: "fit-content", marginTop: 48, border: "1px solid var(--border)", borderRadius: 8, overflow: "hidden", gap: 1, background: "var(--border)", animation: "fadeUp 0.6s ease 0.6s both" }}>
            {t.stats.map(([num, label]) => (
              <div key={label} style={{ background: "var(--card)", padding: "22px 30px", textAlign: "center" }}>
                <span style={{ fontFamily: "'Syne',sans-serif", fontSize: 34, fontWeight: 800, color: "var(--accent)", display: "block", lineHeight: 1 }}>{num}</span>
                <div style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: "linear-gradient(to right,transparent,var(--border),transparent)", margin: "0 48px" }} />

      {/* ABOUT */}
      <AnimatedSection id="about">
        <div style={{ padding: "96px 48px", maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeader num={t.sec1} title={t.secTitle1} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }}>
            <div>
              {[t.about1, t.about2, t.about3, t.about4].map((txt, i) => (
                <p key={i} style={{ color: "var(--muted)", lineHeight: 1.9, marginBottom: 16, fontSize: 13 }}>{txt}</p>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {t.skills.map(s => <SkillCard key={s.label} {...s} />)}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <div style={{ height: 1, background: "linear-gradient(to right,transparent,var(--border),transparent)", margin: "0 48px" }} />

      {/* EXPERIENCE */}
      <AnimatedSection id="experience">
        <div style={{ padding: "96px 48px", maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeader num={t.sec2} title={t.secTitle2} />
          <div style={{ position: "relative", paddingLeft: 28 }}>
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 1, background: "linear-gradient(to bottom,var(--accent),transparent)" }} />
            {t.experiences.map((item, i) => <TimelineItem key={item.company} item={item} index={i} />)}
          </div>
        </div>
      </AnimatedSection>

      <div style={{ height: 1, background: "linear-gradient(to right,transparent,var(--border),transparent)", margin: "0 48px" }} />

      {/* PROJECTS */}
      <AnimatedSection id="projects">
        <div style={{ padding: "96px 48px", maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeader num={t.sec3} title={t.secTitle3} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(290px,1fr))", gap: 22 }}>
            {t.projects.map((p, i) => <ProjectCard key={p.title} project={p} index={i} viewLabel={t.viewProject} />)}
          </div>
        </div>
      </AnimatedSection>

      <div style={{ height: 1, background: "linear-gradient(to right,transparent,var(--border),transparent)", margin: "0 48px" }} />

      {/* CONTACT */}
      <AnimatedSection id="contact">
        <div style={{ padding: "96px 48px", maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeader num={t.sec4} title={t.secTitle4} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 72, alignItems: "start" }}>
            <div>
              <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 22, fontWeight: 700, marginBottom: 12, letterSpacing: -0.5, color: "var(--text)" }}>{t.contactHeading}</h3>
              <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 32, fontSize: 13 }}>{t.contactSubtext}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { icon: "✉", label: "masroorhussainshah01@gmail.com", href: "mailto:masroorhussainshah01@gmail.com" },
                  { icon: "📞", label: "+49 152 253 99501", href: "tel:+4915225399501" },
                  { icon: "in", label: "linkedin.com/in/masroorshah", href: "https://linkedin.com/in/masroorshah" },
                  { icon: "⌥", label: "github.com/masroor07", href: "https://github.com/masroor07" },
                ].map(link => (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" onMouseEnter={big} onMouseLeave={small}
                    style={{ display: "flex", alignItems: "center", gap: 12, color: "var(--muted)", textDecoration: "none", fontSize: 13, transition: "color 0.2s" }}
                    onMouseOver={e => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.querySelector(".icon-b").style.borderColor = "var(--accent)"; }}
                    onMouseOut={e => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.querySelector(".icon-b").style.borderColor = "var(--border)"; }}>
                    <div className="icon-b" style={{ width: 34, height: 34, border: "1px solid var(--border)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, background: "var(--card)", transition: "border-color 0.2s", flexShrink: 0 }}>{link.icon}</div>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <ContactForm t={t} />
          </div>
        </div>
      </AnimatedSection>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid var(--border)", padding: "28px 48px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
        <p style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.05em" }}>© 2025 <span style={{ color: "var(--accent)" }}>Masroor Shah</span>. {t.footerLeft}</p>
        <p style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.05em" }}>{t.footerRight}</p>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Instrument+Serif:ital@0;1&family=DM+Mono:wght@300;400&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { overflow-x: hidden; }
        b { color: var(--text); font-weight: 600; }
        @keyframes float { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-30px,30px) scale(1.05)} }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(0.7)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        ::-webkit-scrollbar{width:4px} ::-webkit-scrollbar-track{background:var(--bg)} ::-webkit-scrollbar-thumb{background:var(--border);border-radius:2px}
        @media(max-width:768px){
          nav{padding:14px 20px}
          #hero{padding:100px 24px 60px}
          section > div{padding-left:24px!important;padding-right:24px!important}
          .about-grid,.contact-grid{grid-template-columns:1fr!important}
        }
      `}</style>
    </div>
  );
}
