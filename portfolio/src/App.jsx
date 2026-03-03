import React, { useState, useEffect, useRef } from "react";

// ── SVG Icons ─────────────────────────────────────────────────────────────────
const IconLinkedIn = ({ size = 17 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const IconGithub = ({ size = 17 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);
const IconMail = ({ size = 17 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);
const IconPhone = ({ size = 17 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 17z"/>
  </svg>
);
const IconCert = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
  </svg>
);
const IconArrowUpRight = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17 17 7M7 7h10v10"/>
  </svg>
);
const IconMenu = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);
const IconClose = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

// ── Signature SVG ─────────────────────────────────────────────────────────────
const SignatureLogo = ({ color = "var(--accent)" }) => (
  <svg width="80" height="38" viewBox="0 0 160 52" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
    {/* M */}
    <path d="M6 40 C6 40, 8 16, 10 12 C12 8, 14 10, 16 18 C18 26, 20 32, 22 28 C24 24, 26 14, 28 12 C30 10, 30 28, 30 40"
      stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    {/* H */}
    <path d="M38 12 L38 40 M38 26 L52 26 M52 12 L52 40"
      stroke={color} strokeWidth="2.2" strokeLinecap="round" fill="none"/>
    {/* S */}
    <path d="M72 16 C70 12, 60 12, 60 20 C60 26, 72 28, 72 34 C72 42, 60 42, 58 38"
      stroke={color} strokeWidth="2.2" strokeLinecap="round" fill="none"/>
    {/* underline flourish */}
    <path d="M4 48 C30 44, 80 44, 110 47 C120 48, 128 48, 134 47"
      stroke={color} strokeWidth="1.3" strokeLinecap="round" fill="none" opacity="0.45"/>
    <circle cx="138" cy="47" r="2" fill={color} opacity="0.6"/>
  </svg>
);

// ── Themes ────────────────────────────────────────────────────────────────────
const DARK = {
  "--bg": "#08080d", "--surface": "#0e0e17", "--border": "#1a1a2e",
  "--accent": "#7effd4", "--accent2": "#ff6b6b", "--accent3": "#ffd166",
  "--text": "#e6e6f0", "--muted": "#52526e", "--card": "#0f0f1a",
  "--nav-bg": "rgba(8,8,13,0.9)", "--shadow": "rgba(0,0,0,0.55)",
  "--dot-bg": "#08080d",
};
const LIGHT = {
  "--bg": "#f6f6f1", "--surface": "#ebebе4", "--border": "#d2d2c6",
  "--accent": "#0a8a5e", "--accent2": "#c73e3e", "--accent3": "#9a7000",
  "--text": "#0e0e18", "--muted": "#686878", "--card": "#ffffff",
  "--nav-bg": "rgba(246,246,241,0.92)", "--shadow": "rgba(0,0,0,0.1)",
  "--dot-bg": "#f6f6f1",
};

// ── Translations ──────────────────────────────────────────────────────────────
const T = {
  en: {
    nav: ["About", "Experience", "Projects", "Contact"],
    heroTag: "Available for opportunities",
    heroCta1: "Let's Connect →",
    heroCta2: "View Projects",
    stats: [["4+","Internships"],["3+","Projects"],["8","IELTS Band"],["4+","Languages"]],
    sec1:"01 — ABOUT", secTitle1:"Who I Am",
    about1: <React.Fragment>I'm <b>Masroor Hussain Shah</b>, a Master's student in Applied Computer Science at Hochschule Schmalkalden, Germany, with a deep passion for AI, automation, and intelligent system design.</React.Fragment>,
    about2: <React.Fragment>My journey spans from building <b>IoT-based telescope control systems</b> with Raspberry Pi and voice AI, to developing <b>on-premises NLP models</b> and knowledge bases for enterprise chatbots.</React.Fragment>,
    about3: <React.Fragment>Currently sharpening my German (A2 → B1) while expanding my toolkit in <b>LLMs, LangChain, computer vision, and workflow automation</b>. I believe the best code makes people's lives genuinely easier.</React.Fragment>,
    about4: "AWS Certified Cloud Practitioner · IELTS Band 8 · Goethe-Zertifikat A1",
    skills: [
      { label:"AI / ML", tags:["LangChain","Hugging Face","FAISS","MBART","RoBERTa","YOLO","OpenAI API","n8n"] },
      { label:"Programming", tags:["Python","JavaScript","Java","C/C++"] },
      { label:"Cloud & DevOps", tags:["AWS CDK","Docker","Jenkins","CodePipeline","Git","Linux"] },
      { label:"Web & Automation", tags:["ReactJS","NodeJS","Spring Boot","MongoDB","UiPath RPA"] },
    ],
    sec2:"02 — EXPERIENCE", secTitle2:"Work History", certLabel:"View Certificate",
    sec3:"03 — PROJECTS", secTitle3:"Selected Work", viewProject:"View Project",
    sec4:"04 — CONTACT", secTitle4:"Get In Touch",
    contactHeading:"Let's build something meaningful.",
    contactSubtext:"Whether you have an internship opportunity, a project collaboration, or just want to talk about AI and automation — my inbox is always open.",
    formName:"Name", formEmail:"Email", formSubject:"Subject", formMessage:"Message",
    formNamePh:"Your name", formEmailPh:"your@email.com", formSubjectPh:"What's this about?",
    formMsgPh:"Tell me about your project, opportunity, or idea...",
    formSend:"Send Message →", formSending:"Waking server...",
    formSuccess:"Message Sent!", formSuccessMsg:"I'll get back to you soon.",
    formAnother:"Send Another", formError:"Server is taking too long. Please try again.",
    footerLeft:"Designed & built with intention.",
    footerRight:"Schmalkalden, DE · Available for opportunities",
    socials:[
      { Icon:IconMail,     label:"Email",    sub:"masroorhussainshah01@gmail.com", href:"mailto:masroorhussainshah01@gmail.com" },
      { Icon:IconLinkedIn, label:"LinkedIn", sub:"/in/masroorshah",                href:"https://linkedin.com/in/masroorshah" },
      { Icon:IconGithub,   label:"GitHub",   sub:"/masroor07",                     href:"https://github.com/masroor07" },
      { Icon:IconPhone,    label:"Phone",    sub:"+49 152 253 99501",               href:"tel:+4915225399501" },
    ],
    experiences:[
      { company:"Vision Cosmos", badge:"AI / IoT", badgeType:"ai",
        role:"AI Developer Intern · Srinagar", date:"Oct 2024 – Jan 2025",
        certLink:"https://drive.google.com/",
        bullets:["Architected an intelligent IoT-based telescope control system using Raspberry Pi as the edge device.","Executed AI-driven voice command processing locally for automated telescope positioning.","Integrated Stellarium Remote Control API and OpenAI for real-time celestial data retrieval."] },
      { company:"Corover", badge:"AI / NLP", badgeType:"ai",
        role:"AI/ML Intern · Remote", date:"Dec 2023 – Jul 2024",
        certLink:"https://drive.google.com/",
        bullets:["Developed an on-premises language prediction model using MBART and RoBERTa.","Implemented FAISS-based knowledge bases for chatbots, enabling fast semantic retrieval.","Scraped complex websites and performed data analysis for model training pipelines.","Trained chatbots using open-source Hugging Face models and collaborated across teams."] },
      { company:"Pointers", badge:"DevOps", badgeType:"devops",
        role:"DevOps Engineering Associate Intern · Remote", date:"Mar 2023 – Jul 2023",
        certLink:"https://drive.google.com/",
        bullets:["Migrated 100+ existing Lambda functions and API Gateway configurations to AWS CDK.","Coordinated a new CDK-based CI/CD pipeline via AWS CodePipeline.","Participated in code reviews and contributed to high code quality standards."] },
      { company:"Ersilia (Outreachy)", badge:"Open Source", badgeType:"oss",
        role:"Contributor · Remote", date:"Mar 2023 – Apr 2023",
        certLink:"https://drive.google.com/",
        bullets:["Reviewed 10+ scientific articles to integrate 5 new models into the Ersilia Model Hub.","Managed, integrated, and tested third-party open-source libraries (10+ dependencies).","Conducted literature research to expand the biomedical model catalog."] },
    ],
    projects:[
      { icon:"🔭", title:"IoT Telescope Control System", period:"Oct 2024 – Jan 2025", link:"https://github.com/masroor07",
        desc:"Voice-controlled telescope on a Raspberry Pi edge device. Integrated Stellarium API and OpenAI for automated celestial object positioning via natural language commands.",
        tech:["Raspberry Pi","OpenAI","Stellarium API","IoT","Voice AI"] },
      { icon:"🌐", title:"Language Prediction System", period:"Apr 2024 – Jun 2024", link:"https://github.com/masroor07",
        desc:"Hinglish-to-Hindi translation pipeline combining a custom transformer model with multilingual language detection. Built RESTful APIs for production deployment.",
        tech:["XLM-RoBERTa","MBART","Transformers","REST API","Python"] },
      { icon:"📄", title:"Cheque OCR System", period:"Jan 2023 – Mar 2023", link:"https://github.com/masroor07",
        desc:"Document processing for bank cheques using YOLO for field detection and Google Vision API for text extraction. Includes signature detection and expiry validation.",
        tech:["YOLO","Google Vision API","Computer Vision","OCR","Python"] },
      { icon:"🤖", title:"Counsel Bot", period:"Aug 2022 – Dec 2022", link:"https://github.com/masroor07",
        desc:"AI-driven career counselling with an AR avatar. Generative knowledge base for context-aware responses and RPA integration with UiPath for LinkedIn data retrieval.",
        tech:["Generative AI","Augmented Reality","UiPath RPA","Knowledge Base"] },
    ],
  },
  de: {
    nav:["Über mich","Erfahrung","Projekte","Kontakt"],
    heroTag:"Offen für Möglichkeiten",
    heroCta1:"Kontakt aufnehmen →",
    heroCta2:"Projekte ansehen",
    stats:[["4+","Praktika"],["3+","Projekte"],["8","IELTS Band"],["4+","Sprachen"]],
    sec1:"01 — ÜBER MICH", secTitle1:"Wer ich bin",
    about1: <React.Fragment>Ich bin <b>Masroor Hussain Shah</b>, Masterstudent der Angewandten Informatik an der Hochschule Schmalkalden mit großer Leidenschaft für KI, Automatisierung und intelligente Systeme.</React.Fragment>,
    about2: <React.Fragment>Mein Weg reicht von der Entwicklung <b>IoT-basierter Teleskopsteuerungssysteme</b> mit Raspberry Pi und Sprach-KI bis hin zu <b>On-Premises-NLP-Modellen</b> und Wissensdatenbanken für Unternehmens-Chatbots.</React.Fragment>,
    about3: <React.Fragment>Ich vertiefe meine Deutschkenntnisse (A2 → B1) und erweitere mein Know-how in <b>LLMs, LangChain, Computer Vision und Workflow-Automatisierung</b>. Der beste Code macht das Leben der Menschen wirklich einfacher.</React.Fragment>,
    about4:"AWS Certified Cloud Practitioner · IELTS Band 8 · Goethe-Zertifikat A1",
    skills:[
      { label:"KI / ML", tags:["LangChain","Hugging Face","FAISS","MBART","RoBERTa","YOLO","OpenAI API","n8n"] },
      { label:"Programmierung", tags:["Python","JavaScript","Java","C/C++"] },
      { label:"Cloud & DevOps", tags:["AWS CDK","Docker","Jenkins","CodePipeline","Git","Linux"] },
      { label:"Web & Automatisierung", tags:["ReactJS","NodeJS","Spring Boot","MongoDB","UiPath RPA"] },
    ],
    sec2:"02 — ERFAHRUNG", secTitle2:"Berufserfahrung", certLabel:"Zertifikat ansehen",
    sec3:"03 — PROJEKTE", secTitle3:"Ausgewählte Projekte", viewProject:"Projekt ansehen",
    sec4:"04 — KONTAKT", secTitle4:"Kontakt aufnehmen",
    contactHeading:"Lass uns etwas Sinnvolles bauen.",
    contactSubtext:"Ob Praktikumsangebot, Projektzusammenarbeit oder ein Gespräch über KI und Automatisierung — mein Posteingang steht immer offen.",
    formName:"Name", formEmail:"E-Mail", formSubject:"Betreff", formMessage:"Nachricht",
    formNamePh:"Dein Name", formEmailPh:"deine@email.de", formSubjectPh:"Worum geht es?",
    formMsgPh:"Erzähl mir von deinem Projekt, Angebot oder deiner Idee...",
    formSend:"Nachricht senden →", formSending:"Server wird gestartet...",
    formSuccess:"Nachricht gesendet!", formSuccessMsg:"Ich melde mich bald bei dir.",
    formAnother:"Weitere Nachricht", formError:"Server antwortet nicht. Bitte erneut versuchen.",
    footerLeft:"Mit Sorgfalt entworfen und entwickelt.",
    footerRight:"Schmalkalden, DE · Offen für Möglichkeiten",
    socials:[
      { Icon:IconMail,     label:"E-Mail",   sub:"masroorhussainshah01@gmail.com", href:"mailto:masroorhussainshah01@gmail.com" },
      { Icon:IconLinkedIn, label:"LinkedIn", sub:"/in/masroorshah",                href:"https://linkedin.com/in/masroorshah" },
      { Icon:IconGithub,   label:"GitHub",   sub:"/masroor07",                     href:"https://github.com/masroor07" },
      { Icon:IconPhone,    label:"Telefon",  sub:"+49 152 253 99501",               href:"tel:+4915225399501" },
    ],
    experiences:[
      { company:"Vision Cosmos", badge:"KI / IoT", badgeType:"ai",
        role:"KI-Entwickler Praktikant · Srinagar", date:"Okt 2024 – Jan 2025",
        certLink:"https://drive.google.com/",
        bullets:["Entwurf eines intelligenten IoT-basierten Teleskopsteuerungssystems mit Raspberry Pi als Edge-Gerät.","Lokale KI-gesteuerte Sprachbefehlsverarbeitung zur automatischen Positionierung des Teleskops.","Integration der Stellarium Remote Control API und OpenAI für Echtzeit-Himmelsdaten."] },
      { company:"Corover", badge:"KI / NLP", badgeType:"ai",
        role:"KI/ML Praktikant · Remote", date:"Dez 2023 – Jul 2024",
        certLink:"https://drive.google.com/",
        bullets:["Entwicklung eines On-Premises-Sprachvorhersagemodells mit MBART und RoBERTa.","Implementierung von FAISS-basierten Wissensdatenbanken für Chatbots.","Scraping komplexer Websites und Datenanalyse für Trainings-Pipelines.","Training von Chatbots mit Open-Source-Modellen von Hugging Face."] },
      { company:"Pointers", badge:"DevOps", badgeType:"devops",
        role:"DevOps Engineering Associate Praktikant · Remote", date:"Mär 2023 – Jul 2023",
        certLink:"https://drive.google.com/",
        bullets:["Migration von über 100 Lambda-Funktionen und API-Gateway-Konfigurationen zu AWS CDK.","Implementierung einer neuen CDK-basierten CI/CD-Pipeline über AWS CodePipeline.","Teilnahme an Code-Reviews zur Sicherstellung hoher Codequalität."] },
      { company:"Ersilia (Outreachy)", badge:"Open Source", badgeType:"oss",
        role:"Contributor · Remote", date:"Mär 2023 – Apr 2023",
        certLink:"https://drive.google.com/",
        bullets:["Analyse von 10+ Artikeln zur Integration von 5 neuen Modellen in das Modell-Hub.","Verwaltung und Testung von 10+ Open-Source-Abhängigkeiten.","Literaturrecherchen zur Erweiterung des Modellkatalogs."] },
    ],
    projects:[
      { icon:"🔭", title:"IoT-Teleskopsteuerungssystem", period:"Okt 2024 – Jan 2025", link:"https://github.com/masroor07",
        desc:"Sprachgesteuertes Teleskop auf Raspberry Pi-Basis. Integration der Stellarium API und OpenAI zur automatisierten Ausrichtung auf Himmelsobjekte per natürlicher Sprache.",
        tech:["Raspberry Pi","OpenAI","Stellarium API","IoT","Sprach-KI"] },
      { icon:"🌐", title:"Sprachvorhersagesystem", period:"Apr 2024 – Jun 2024", link:"https://github.com/masroor07",
        desc:"Hinglish-zu-Hindi-Pipeline mit Transformer-Modell und mehrsprachiger Spracherkennung. REST-APIs für den Produktionseinsatz.",
        tech:["XLM-RoBERTa","MBART","Transformers","REST API","Python"] },
      { icon:"📄", title:"Scheck-OCR-System", period:"Jan 2023 – Mär 2023", link:"https://github.com/masroor07",
        desc:"Dokumentenverarbeitung für Bankschecks mit YOLO zur Felderkennung und Google Vision API. Enthält Signaturerkennung und Ablaufprüfung.",
        tech:["YOLO","Google Vision API","Computer Vision","OCR","Python"] },
      { icon:"🤖", title:"Counsel Bot", period:"Aug 2022 – Dez 2022", link:"https://github.com/masroor07",
        desc:"KI-basiertes Karriereberatungssystem mit AR-Avatar. Generative Wissensdatenbank und RPA-Integration mit UiPath für LinkedIn-Daten.",
        tech:["Generative KI","Augmented Reality","UiPath RPA","Wissensdatenbank"] },
    ],
  },
};

// ── useBreakpoint ─────────────────────────────────────────────────────────────
function useBreakpoint() {
  const [bp, setBp] = useState({ mobile: false, tablet: false });
  useEffect(() => {
    const check = () => setBp({ mobile: window.innerWidth < 640, tablet: window.innerWidth < 1024 });
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return bp;
}

// ── useInView ─────────────────────────────────────────────────────────────────
function useInView(ref, threshold = 0.08) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return visible;
}

// ── AnimatedSection ───────────────────────────────────────────────────────────
function AnimatedSection({ id, children }) {
  const ref = useRef(null);
  const visible = useInView(ref, 0.06);
  return (
    <section id={id} ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(22px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
      {children}
    </section>
  );
}

// ── SectionHeader ─────────────────────────────────────────────────────────────
function SectionHeader({ num, title }) {
  return (
    <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:36 }}>
      <span style={{ color:"var(--accent)", fontSize:10, letterSpacing:"0.16em", whiteSpace:"nowrap", flexShrink:0 }}>{num}</span>
      <div style={{ width:44, height:1, background:"var(--border)", flexShrink:0 }} />
      <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"clamp(22px,3.5vw,40px)", letterSpacing:-1.2, lineHeight:1.05, color:"var(--text)" }}>{title}</h2>
    </div>
  );
}

// ── SkillCard ─────────────────────────────────────────────────────────────────
function SkillCard({ label, tags }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ border:`1px solid ${hov ? "var(--accent)" : "var(--border)"}`, borderRadius:7, background:"var(--card)", padding:"13px 16px", transform:hov ? "translateX(3px)" : "none", transition:"all 0.2s" }}>
      <div style={{ fontSize:9, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--accent)", marginBottom:8 }}>{label}</div>
      <div style={{ display:"flex", flexWrap:"wrap", gap:5 }}>
        {tags.map(t => <span key={t} style={{ background:"var(--surface)", border:"1px solid var(--border)", padding:"2px 8px", borderRadius:3, fontSize:11, color:"var(--text)" }}>{t}</span>)}
      </div>
    </div>
  );
}

// ── TimelineItem ──────────────────────────────────────────────────────────────
function TimelineItem({ item, index, certLabel }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setTimeout(() => { setVisible(true); obs.disconnect(); }, index * 80); }, { threshold:0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [index]);
  const bc = {
    ai:     { bg:"rgba(126,255,212,0.08)", color:"var(--accent)",  border:"rgba(126,255,212,0.2)" },
    devops: { bg:"rgba(255,107,107,0.08)", color:"var(--accent2)", border:"rgba(255,107,107,0.2)" },
    oss:    { bg:"rgba(255,209,102,0.08)", color:"var(--accent3)", border:"rgba(255,209,102,0.2)" },
  }[item.badgeType] || {};
  return (
    <div ref={ref} style={{ position:"relative", paddingLeft:26, marginBottom:36,
      opacity:visible ? 1 : 0, transform:visible ? "none" : "translateX(-10px)", transition:"all 0.45s ease" }}>
      <div style={{ position:"absolute", left:-5, top:7, width:10, height:10, border:"2px solid var(--accent)", borderRadius:"50%", background:"var(--dot-bg)" }} />
      <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:3, flexWrap:"wrap" }}>
        <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:14.5, color:"var(--text)" }}>{item.company}</span>
        <span style={{ fontSize:9, padding:"2px 7px", borderRadius:3, letterSpacing:"0.08em", textTransform:"uppercase", background:bc.bg, color:bc.color, border:`1px solid ${bc.border}` }}>{item.badge}</span>
        {item.certLink && (
          <a href={item.certLink} target="_blank" rel="noopener noreferrer"
            style={{ display:"inline-flex", alignItems:"center", gap:4, fontSize:9.5, color:"var(--accent3)", textDecoration:"none", border:"1px solid rgba(255,209,102,0.25)", background:"rgba(255,209,102,0.07)", padding:"2px 8px", borderRadius:3, letterSpacing:"0.05em", transition:"background 0.2s" }}
            onMouseOver={e => e.currentTarget.style.background = "rgba(255,209,102,0.16)"}
            onMouseOut={e => e.currentTarget.style.background = "rgba(255,209,102,0.07)"}>
            <IconCert />{certLabel}
          </a>
        )}
      </div>
      <div style={{ fontSize:12, color:"var(--muted)", marginBottom:1 }}>{item.role}</div>
      <div style={{ fontSize:10, color:"var(--accent)", letterSpacing:"0.06em", marginBottom:10 }}>{item.date}</div>
      <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:5 }}>
        {item.bullets.map((b, i) => (
          <li key={i} style={{ color:"var(--muted)", paddingLeft:14, position:"relative", fontSize:12, lineHeight:1.75 }}>
            <span style={{ position:"absolute", left:0, color:"var(--accent)", fontSize:10 }}>→</span>{b}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── ProjectCard ───────────────────────────────────────────────────────────────
function ProjectCard({ project, index, viewLabel }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hov, setHov] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setTimeout(() => { setVisible(true); obs.disconnect(); }, index * 65); }, { threshold:0.07 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [index]);
  return (
    <div ref={ref} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ border:`1px solid ${hov ? "rgba(126,255,212,0.28)" : "var(--border)"}`, borderRadius:10, background:"var(--card)", padding:22,
        display:"flex", flexDirection:"column", position:"relative", overflow:"hidden",
        opacity:visible ? 1 : 0, transform:visible ? (hov ? "translateY(-4px)" : "none") : "translateY(16px)",
        transition:"all 0.28s ease", boxShadow:hov ? "0 14px 42px var(--shadow)" : "none" }}>
      {hov && <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg,rgba(126,255,212,0.03),transparent)", pointerEvents:"none" }} />}
      <div style={{ width:40, height:40, borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center", fontSize:19, marginBottom:13, background:"var(--surface)", border:"1px solid var(--border)" }}>{project.icon}</div>
      <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:14.5, marginBottom:3, color:"var(--text)" }}>{project.title}</div>
      <div style={{ fontSize:10, color:"var(--accent)", letterSpacing:"0.06em", marginBottom:8 }}>{project.period}</div>
      <div style={{ fontSize:12, color:"var(--muted)", lineHeight:1.75, marginBottom:13, flexGrow:1 }}>{project.desc}</div>
      <div style={{ display:"flex", flexWrap:"wrap", gap:4, marginBottom:14 }}>
        {project.tech.map(t => <span key={t} style={{ fontSize:9.5, padding:"2px 7px", background:"var(--surface)", border:"1px solid var(--border)", borderRadius:100, color:"var(--muted)" }}>{t}</span>)}
      </div>
      <a href={project.link} target="_blank" rel="noopener noreferrer"
        style={{ display:"inline-flex", alignItems:"center", gap:6, fontSize:11, color:"var(--accent)", textDecoration:"none", fontFamily:"'Syne',sans-serif", fontWeight:600, letterSpacing:"0.04em", borderTop:"1px solid var(--border)", paddingTop:11, transition:"gap 0.18s" }}
        onMouseEnter={e => e.currentTarget.style.gap = "10px"} onMouseLeave={e => e.currentTarget.style.gap = "6px"}>
        {viewLabel} <IconArrowUpRight />
      </a>
    </div>
  );
}

// ── ContactForm ───────────────────────────────────────────────────────────────
function ContactForm({ t }) {
  const [form, setForm] = useState({ name:"", email:"", subject:"", message:"" });
  const [status, setStatus] = useState("idle");
  const [errMsg, setErrMsg] = useState("");
  const change = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const wake = async (url, ms = 30000) => {
    const t0 = Date.now();
    while (Date.now() - t0 < ms) {
      try { const r = await fetch(`${url}/health`, { signal:AbortSignal.timeout(5000) }); if (r.ok) return; } catch(_) {}
      await new Promise(r => setTimeout(r, 2000));
    }
    throw new Error(t.formError);
  };
  const submit = async e => {
    e.preventDefault(); setStatus("sending"); setErrMsg("");
    const API = import.meta.env.VITE_API_URL || "http://localhost:5000";
    try {
      await wake(API);
      const res = await fetch(`${API}/api/contact`, { method:"POST", headers:{ "Content-Type":"application/json" }, body:JSON.stringify(form) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Something went wrong");
      setStatus("success"); setForm({ name:"", email:"", subject:"", message:"" });
    } catch(err) { setStatus("error"); setErrMsg(err.message); }
  };
  const inp = { background:"var(--surface)", border:"1px solid var(--border)", borderRadius:6, padding:"10px 13px", color:"var(--text)", fontFamily:"'DM Mono',monospace", fontSize:12.5, outline:"none", width:"100%", transition:"border-color 0.2s, box-shadow 0.2s" };
  const lbl = { fontSize:9.5, letterSpacing:"0.12em", textTransform:"uppercase", color:"var(--muted)", display:"block", marginBottom:5 };
  const focus = e => { e.target.style.borderColor = "var(--accent)"; e.target.style.boxShadow = "0 0 0 3px rgba(126,255,212,0.07)"; };
  const blur  = e => { e.target.style.borderColor = "var(--border)";  e.target.style.boxShadow = "none"; };
  if (status === "success") return (
    <div style={{ textAlign:"center", padding:36, border:"1px solid rgba(126,255,212,0.22)", borderRadius:8, background:"rgba(126,255,212,0.04)" }}>
      <div style={{ fontSize:26, color:"var(--accent)", marginBottom:9 }}>✓</div>
      <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:16, color:"var(--accent)", marginBottom:5 }}>{t.formSuccess}</div>
      <div style={{ fontSize:12, color:"var(--muted)" }}>{t.formSuccessMsg}</div>
      <button onClick={() => setStatus("idle")} style={{ marginTop:14, background:"transparent", border:"1px solid var(--border)", color:"var(--muted)", padding:"6px 16px", borderRadius:5, cursor:"pointer", fontSize:11 }}>{t.formAnother}</button>
    </div>
  );
  return (
    <form onSubmit={submit} style={{ display:"flex", flexDirection:"column", gap:13 }}>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
        <div><label style={lbl}>{t.formName}</label><input name="name" value={form.name} onChange={change} placeholder={t.formNamePh} required style={inp} onFocus={focus} onBlur={blur} /></div>
        <div><label style={lbl}>{t.formEmail}</label><input name="email" type="email" value={form.email} onChange={change} placeholder={t.formEmailPh} required style={inp} onFocus={focus} onBlur={blur} /></div>
      </div>
      <div><label style={lbl}>{t.formSubject}</label><input name="subject" value={form.subject} onChange={change} placeholder={t.formSubjectPh} style={inp} onFocus={focus} onBlur={blur} /></div>
      <div><label style={lbl}>{t.formMessage}</label><textarea name="message" value={form.message} onChange={change} placeholder={t.formMsgPh} required rows={5} style={{ ...inp, resize:"vertical" }} onFocus={focus} onBlur={blur} /></div>
      {status === "error" && <div style={{ fontSize:11.5, color:"var(--accent2)", padding:"8px 12px", background:"rgba(255,107,107,0.07)", border:"1px solid rgba(255,107,107,0.18)", borderRadius:5 }}>✗ {errMsg}</div>}
      <button type="submit" disabled={status === "sending"}
        style={{ background:"var(--accent)", color:"#08080d", padding:"12px 24px", borderRadius:6, fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:12.5, letterSpacing:"0.06em", border:"none", cursor:"pointer", width:"100%", opacity:status === "sending" ? 0.75 : 1, transition:"all 0.2s" }}>
        {status === "sending" ? t.formSending : t.formSend}
      </button>
    </form>
  );
}

// ── HeroSocialCard ────────────────────────────────────────────────────────────
function HeroSocialCard({ link, onEnter, onLeave }) {
  const [hov, setHov] = useState(false);
  const { Icon } = link;
  return (
    <a href={link.href} target="_blank" rel="noopener noreferrer"
      onMouseEnter={() => { setHov(true); onEnter(); }}
      onMouseLeave={() => { setHov(false); onLeave(); }}
      style={{ display:"flex", alignItems:"center", gap:11, padding:"11px 15px",
        border:`1px solid ${hov ? "var(--accent)" : "var(--border)"}`,
        borderRadius:8, background:hov ? "var(--card)" : "transparent",
        textDecoration:"none", transition:"all 0.2s", transform:hov ? "translateX(4px)" : "none" }}>
      <div style={{ width:34, height:34, borderRadius:7, display:"flex", alignItems:"center", justifyContent:"center",
        color:hov ? "var(--accent)" : "var(--muted)", background:"var(--card)",
        border:"1px solid var(--border)", flexShrink:0, transition:"color 0.2s" }}>
        <Icon />
      </div>
      <div style={{ minWidth:0 }}>
        <div style={{ fontSize:9.5, letterSpacing:"0.09em", textTransform:"uppercase", color:hov ? "var(--accent)" : "var(--muted)", marginBottom:1, transition:"color 0.2s" }}>{link.label}</div>
        <div style={{ fontSize:11.5, color:hov ? "var(--text)" : "var(--muted)", transition:"color 0.2s", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis", maxWidth:190 }}>{link.sub}</div>
      </div>
      <span style={{ marginLeft:"auto", color:"var(--accent)", opacity:hov ? 1 : 0, transition:"opacity 0.2s", flexShrink:0 }}><IconArrowUpRight /></span>
    </a>
  );
}

// ── MobileDrawer ──────────────────────────────────────────────────────────────
function MobileDrawer({ open, onClose, t, lang, setLang, dark, setDark, scrollTo }) {
  return (
    <>
      <div onClick={onClose} style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.6)", zIndex:150, backdropFilter:"blur(6px)", opacity:open ? 1 : 0, pointerEvents:open ? "auto" : "none", transition:"opacity 0.25s" }} />
      <div style={{ position:"fixed", top:0, right:0, bottom:0, width:270, background:"var(--surface)", borderLeft:"1px solid var(--border)", zIndex:160, transform:open ? "translateX(0)" : "translateX(100%)", transition:"transform 0.3s ease", display:"flex", flexDirection:"column", padding:"0 24px 32px" }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"16px 0", borderBottom:"1px solid var(--border)", marginBottom:16 }}>
          <span style={{ fontFamily:"'Syne',sans-serif", fontSize:13, fontWeight:700, color:"var(--accent)", letterSpacing:"0.05em" }}>MENU</span>
          <button onClick={onClose} style={{ background:"none", border:"none", color:"var(--muted)", cursor:"pointer", padding:4 }}><IconClose /></button>
        </div>
        {t.nav.map((label, i) => (
          <button key={i} onClick={() => { scrollTo(["about","experience","projects","contact"][i]); onClose(); }}
            style={{ background:"none", border:"none", borderBottom:"1px solid var(--border)", color:"var(--muted)", fontSize:12, letterSpacing:"0.1em", textTransform:"uppercase", textAlign:"left", padding:"13px 0", cursor:"pointer", fontFamily:"'DM Mono',monospace", transition:"color 0.2s" }}
            onMouseOver={e => e.currentTarget.style.color = "var(--accent)"} onMouseOut={e => e.currentTarget.style.color = "var(--muted)"}>
            {label}
          </button>
        ))}
        <div style={{ marginTop:24, display:"flex", flexDirection:"column", gap:10 }}>
          <button onClick={() => setLang(l => l === "en" ? "de" : "en")}
            style={{ display:"flex", alignItems:"center", gap:8, background:"var(--card)", border:"1px solid var(--border)", borderRadius:7, padding:"10px 14px", color:"var(--text)", fontSize:12, cursor:"pointer", fontFamily:"'DM Mono',monospace" }}>
            <span style={{ fontSize:16 }}>{lang === "en" ? "🇩🇪" : "🇬🇧"}</span>
            {lang === "en" ? "Switch to Deutsch" : "Switch to English"}
          </button>
          <button onClick={() => setDark(d => !d)}
            style={{ display:"flex", alignItems:"center", gap:8, background:"var(--card)", border:"1px solid var(--border)", borderRadius:7, padding:"10px 14px", color:"var(--text)", fontSize:12, cursor:"pointer", fontFamily:"'DM Mono',monospace" }}>
            <span style={{ fontSize:16 }}>{dark ? "☀️" : "🌙"}</span>
            {dark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [lang, setLang] = useState("en");
  const [dark, setDark] = useState(true);
  const [scrollPct, setScrollPct] = useState(0);
  const [cursor, setCursor] = useState({ x:-100, y:-100 });
  const [trail, setTrail] = useState({ x:-100, y:-100 });
  const [curBig, setCurBig] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { mobile, tablet } = useBreakpoint();
  const trailRef = useRef({ x:-100, y:-100 });
  const mouseRef = useRef({ x:-100, y:-100 });
  const rafRef = useRef(null);
  const t = T[lang];

  // Apply theme vars
  useEffect(() => {
    const theme = dark ? DARK : LIGHT;
    Object.entries(theme).forEach(([k, v]) => document.documentElement.style.setProperty(k, v));
  }, [dark]);

  // Cursor + scroll
  useEffect(() => {
    const move = e => { mouseRef.current = { x:e.clientX, y:e.clientY }; setCursor({ x:e.clientX, y:e.clientY }); };
    window.addEventListener("mousemove", move);
    const tick = () => {
      trailRef.current.x += (mouseRef.current.x - trailRef.current.x) * 0.12;
      trailRef.current.y += (mouseRef.current.y - trailRef.current.y) * 0.12;
      setTrail({ ...trailRef.current });
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    const scroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      setScrollPct(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    window.addEventListener("scroll", scroll, { passive:true });
    return () => { window.removeEventListener("mousemove", move); window.removeEventListener("scroll", scroll); cancelAnimationFrame(rafRef.current); };
  }, []);

  const scrollTo = id => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 68, behavior:"smooth" });
  };
  const onEnter = () => setCurBig(true);
  const onLeave = () => setCurBig(false);

  const px = mobile ? "20px" : tablet ? "32px" : "52px";
  const secPy = mobile ? "56px" : "72px";

  return (
    <div style={{ background:"var(--bg)", color:"var(--text)", fontFamily:"'DM Mono',monospace", lineHeight:1.6, overflowX:"hidden", cursor:mobile ? "auto" : "none", transition:"background 0.3s, color 0.3s" }}>

      {/* Progress bar */}
      <div style={{ position:"fixed", top:0, left:0, height:2, width:`${scrollPct}%`, background:"linear-gradient(90deg,var(--accent),var(--accent2))", zIndex:200, transition:"width 0.08s", pointerEvents:"none" }} />

      {/* Custom cursor — desktop only */}
      {!mobile && <>
        <div style={{ position:"fixed", width:curBig ? 16 : 9, height:curBig ? 16 : 9, background:"var(--accent)", borderRadius:"50%", pointerEvents:"none", zIndex:9999, left:cursor.x, top:cursor.y, transform:"translate(-50%,-50%)", transition:"width 0.15s,height 0.15s", mixBlendMode:dark ? "screen" : "multiply" }} />
        <div style={{ position:"fixed", width:curBig ? 48 : 30, height:curBig ? 48 : 30, border:"1px solid var(--accent)", borderRadius:"50%", pointerEvents:"none", zIndex:9998, left:trail.x, top:trail.y, transform:"translate(-50%,-50%)", opacity:0.32, transition:"width 0.15s,height 0.15s" }} />
      </>}

      {/* ── NAV ── */}
      <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:100, display:"flex", alignItems:"center", justifyContent:"space-between", padding:`13px ${px}`, background:"var(--nav-bg)", backdropFilter:"blur(20px)", borderBottom:"1px solid var(--border)", gap:12 }}>
        {/* Signature */}
        <button onClick={() => window.scrollTo({ top:0, behavior:"smooth" })} onMouseEnter={onEnter} onMouseLeave={onLeave}
          style={{ background:"none", border:"none", cursor:mobile ? "pointer" : "none", padding:0, lineHeight:0, flexShrink:0 }}>
          <SignatureLogo color="var(--accent)" />
        </button>

        {/* Desktop links */}
        {!tablet && (
          <ul style={{ display:"flex", gap:22, listStyle:"none", margin:"0 auto", padding:0 }}>
            {t.nav.map((label, i) => (
              <li key={i}>
                <button onClick={() => scrollTo(["about","experience","projects","contact"][i])} onMouseEnter={onEnter} onMouseLeave={onLeave}
                  style={{ color:"var(--muted)", background:"none", border:"none", cursor:"none", fontSize:10, letterSpacing:"0.12em", textTransform:"uppercase", transition:"color 0.2s", fontFamily:"'DM Mono',monospace", padding:"2px 0" }}
                  onMouseOver={e => e.currentTarget.style.color = "var(--accent)"} onMouseOut={e => e.currentTarget.style.color = "var(--muted)"}>
                  {label}
                </button>
              </li>
            ))}
          </ul>
        )}

        <div style={{ display:"flex", gap:7, alignItems:"center", flexShrink:0 }}>
          {/* Desktop toggles */}
          {!tablet && <>
            <button onClick={() => setLang(l => l === "en" ? "de" : "en")} onMouseEnter={onEnter} onMouseLeave={onLeave}
              style={{ display:"flex", alignItems:"center", gap:5, background:"transparent", border:"1px solid var(--border)", borderRadius:7, padding:"6px 11px", color:"var(--muted)", fontSize:11, cursor:"none", fontFamily:"'DM Mono',monospace", transition:"all 0.2s" }}
              onMouseOver={e => { e.currentTarget.style.background = "var(--surface)"; e.currentTarget.style.borderColor = "var(--accent)"; }}
              onMouseOut={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "var(--border)"; }}>
              <span style={{ fontSize:13 }}>{lang === "en" ? "🇩🇪" : "🇬🇧"}</span>
              <span style={{ color:"var(--text)", fontWeight:600 }}>{lang === "en" ? "DE" : "EN"}</span>
            </button>
            <button onClick={() => setDark(d => !d)} onMouseEnter={onEnter} onMouseLeave={onLeave}
              style={{ display:"flex", alignItems:"center", gap:5, background:"transparent", border:"1px solid var(--border)", borderRadius:7, padding:"6px 11px", color:"var(--muted)", fontSize:11, cursor:"none", fontFamily:"'DM Mono',monospace", transition:"all 0.2s" }}
              onMouseOver={e => { e.currentTarget.style.background = "var(--surface)"; e.currentTarget.style.borderColor = "var(--accent)"; }}
              onMouseOut={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "var(--border)"; }}>
              <span style={{ fontSize:13 }}>{dark ? "☀️" : "🌙"}</span>
              <span style={{ color:"var(--text)", fontWeight:600 }}>{dark ? "Light" : "Dark"}</span>
            </button>
          </>}
          {/* Hamburger */}
          {tablet && (
            <button onClick={() => setDrawerOpen(o => !o)}
              style={{ background:"none", border:"1px solid var(--border)", borderRadius:6, padding:"7px 8px", cursor:"pointer", color:"var(--text)", lineHeight:0, transition:"border-color 0.2s" }}
              onMouseOver={e => e.currentTarget.style.borderColor = "var(--accent)"} onMouseOut={e => e.currentTarget.style.borderColor = "var(--border)"}>
              <IconMenu />
            </button>
          )}
        </div>
      </nav>

      {/* Mobile drawer */}
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} t={t} lang={lang} setLang={setLang} dark={dark} setDark={setDark} scrollTo={scrollTo} />

      {/* ── HERO ── */}
      <section id="hero" style={{ minHeight:"100vh", display:"flex", alignItems:"center", padding:`108px ${px} 60px`, position:"relative", overflow:"hidden" }}>
        {/* Grid bg */}
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px)", backgroundSize:"54px 54px", opacity:0.22, maskImage:"radial-gradient(ellipse at 50% 0%,black 20%,transparent 66%)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", width:480, height:480, background:"radial-gradient(circle,rgba(126,255,212,0.07) 0%,transparent 70%)", top:-60, right:-60, animation:"float 9s ease-in-out infinite", pointerEvents:"none" }} />

        <div style={{ position:"relative", maxWidth:1200, width:"100%", display:"grid", gridTemplateColumns:tablet ? "1fr" : "1fr auto", gap:tablet ? 36 : 52, alignItems:"center" }}>

          {/* Left */}
          <div>
            <div style={{ display:"inline-flex", alignItems:"center", gap:7, border:"1px solid var(--border)", background:"var(--card)", padding:"5px 12px", borderRadius:100, fontSize:10, letterSpacing:"0.09em", color:"var(--accent)", marginBottom:20, animation:"fadeUp 0.55s ease 0.1s both" }}>
              <span style={{ width:5, height:5, background:"var(--accent)", borderRadius:"50%", animation:"pulse 2s infinite", display:"inline-block", flexShrink:0 }} />
              {t.heroTag}
            </div>

            <h1 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, lineHeight:0.9, letterSpacing:"-2.5px", marginBottom:18, animation:"fadeUp 0.55s ease 0.2s both", color:"var(--text)",
              fontSize: mobile ? "clamp(36px,11vw,58px)" : "clamp(46px,6.5vw,82px)" }}>
              Masroor<br />
              <span style={{ fontFamily:"'Instrument Serif',serif", fontStyle:"italic", color:"var(--accent)", fontWeight:400 }}>Hussain</span>
              <br />Shah
            </h1>

            <p style={{ fontSize:mobile ? 12.5 : 13, color:"var(--muted)", maxWidth:430, lineHeight:1.85, marginBottom:28, animation:"fadeUp 0.55s ease 0.3s both" }}>
              {lang === "en"
                ? "AI Developer & Master's student in Applied Computer Science. Building intelligent systems, automation workflows, and AI-driven solutions that actually matter."
                : "KI-Entwickler & Masterstudent der Angewandten Informatik. Intelligente Systeme, Automatisierungsworkflows und KI-Lösungen, die wirklich einen Unterschied machen."}
            </p>

            <div style={{ display:"flex", gap:10, flexWrap:"wrap", marginBottom:32, animation:"fadeUp 0.55s ease 0.4s both" }}>
              {[{ label:t.heroCta1, filled:true, id:"contact" }, { label:t.heroCta2, filled:false, id:"projects" }].map(btn => (
                <button key={btn.id} onClick={() => scrollTo(btn.id)} onMouseEnter={onEnter} onMouseLeave={onLeave}
                  style={{ display:"inline-flex", alignItems:"center", gap:6, background:btn.filled ? "var(--accent)" : "transparent", color:btn.filled ? "#08080d" : "var(--text)", padding:mobile ? "10px 18px" : "11px 22px", borderRadius:4, fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:mobile ? 12 : 12.5, letterSpacing:"0.05em", border:btn.filled ? "none" : "1px solid var(--border)", cursor:mobile ? "pointer" : "none", transition:"all 0.2s" }}
                  onMouseOver={e => { e.currentTarget.style.transform = "translateY(-2px)"; if(!btn.filled){ e.currentTarget.style.borderColor="var(--accent)"; e.currentTarget.style.color="var(--accent)"; } }}
                  onMouseOut={e => { e.currentTarget.style.transform = "none"; if(!btn.filled){ e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.color="var(--text)"; } }}>
                  {btn.label}
                </button>
              ))}
            </div>

            {/* Stats */}
            <div style={{ display:"grid", gridTemplateColumns:"repeat(4,auto)", width:"fit-content", border:"1px solid var(--border)", borderRadius:7, overflow:"hidden", gap:1, background:"var(--border)", animation:"fadeUp 0.55s ease 0.5s both" }}>
              {t.stats.map(([num, lbl]) => (
                <div key={lbl} style={{ background:"var(--card)", padding:mobile ? "12px 14px" : "16px 22px", textAlign:"center" }}>
                  <span style={{ fontFamily:"'Syne',sans-serif", fontSize:mobile ? 22 : 28, fontWeight:800, color:"var(--accent)", display:"block", lineHeight:1 }}>{num}</span>
                  <div style={{ fontSize:mobile ? 8 : 9, color:"var(--muted)", letterSpacing:"0.08em", textTransform:"uppercase", marginTop:3, whiteSpace:"nowrap" }}>{lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: socials — desktop only */}
          {!tablet && (
            <div style={{ display:"flex", flexDirection:"column", gap:9, animation:"fadeUp 0.55s ease 0.6s both", minWidth:230 }}>
              {t.socials.map(link => <HeroSocialCard key={link.label} link={link} onEnter={onEnter} onLeave={onLeave} />)}
            </div>
          )}
        </div>
      </section>

      <div style={{ height:1, background:"linear-gradient(to right,transparent,var(--border),transparent)", margin:`0 ${px}` }} />

      {/* ── ABOUT ── */}
      <AnimatedSection id="about">
        <div style={{ padding:`${secPy} ${px}`, maxWidth:1200, margin:"0 auto" }}>
          <SectionHeader num={t.sec1} title={t.secTitle1} />
          <div style={{ display:"grid", gridTemplateColumns:tablet ? "1fr" : "1fr 1fr", gap:tablet ? 28 : 44, alignItems:"start" }}>
            <div>
              {[t.about1, t.about2, t.about3, t.about4].map((txt, i) => (
                <p key={i} style={{ color:"var(--muted)", lineHeight:1.9, marginBottom:13, fontSize:12.5 }}>{txt}</p>
              ))}
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              {t.skills.map(s => <SkillCard key={s.label} {...s} />)}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <div style={{ height:1, background:"linear-gradient(to right,transparent,var(--border),transparent)", margin:`0 ${px}` }} />

      {/* ── EXPERIENCE ── */}
      <AnimatedSection id="experience">
        <div style={{ padding:`${secPy} ${px}`, maxWidth:1200, margin:"0 auto" }}>
          <SectionHeader num={t.sec2} title={t.secTitle2} />
          <div style={{ position:"relative", paddingLeft:22 }}>
            <div style={{ position:"absolute", left:0, top:0, bottom:0, width:1, background:"linear-gradient(to bottom,var(--accent),transparent)" }} />
            {t.experiences.map((item, i) => <TimelineItem key={item.company} item={item} index={i} certLabel={t.certLabel} />)}
          </div>
        </div>
      </AnimatedSection>

      <div style={{ height:1, background:"linear-gradient(to right,transparent,var(--border),transparent)", margin:`0 ${px}` }} />

      {/* ── PROJECTS ── */}
      <AnimatedSection id="projects">
        <div style={{ padding:`${secPy} ${px}`, maxWidth:1200, margin:"0 auto" }}>
          <SectionHeader num={t.sec3} title={t.secTitle3} />
          <div style={{ display:"grid", gridTemplateColumns:mobile ? "1fr" : tablet ? "1fr 1fr" : "repeat(4,1fr)", gap:16 }}>
            {t.projects.map((p, i) => <ProjectCard key={p.title} project={p} index={i} viewLabel={t.viewProject} />)}
          </div>
        </div>
      </AnimatedSection>

      <div style={{ height:1, background:"linear-gradient(to right,transparent,var(--border),transparent)", margin:`0 ${px}` }} />

      {/* ── CONTACT ── */}
      <AnimatedSection id="contact">
        <div style={{ padding:`${secPy} ${px}`, maxWidth:1200, margin:"0 auto" }}>
          <SectionHeader num={t.sec4} title={t.secTitle4} />
          <div style={{ display:"grid", gridTemplateColumns:tablet ? "1fr" : "1fr 1.35fr", gap:tablet ? 32 : 60, alignItems:"start" }}>
            <div>
              <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:mobile ? 17 : 20, fontWeight:700, marginBottom:9, letterSpacing:-0.4, color:"var(--text)" }}>{t.contactHeading}</h3>
              <p style={{ color:"var(--muted)", lineHeight:1.8, marginBottom:22, fontSize:12.5 }}>{t.contactSubtext}</p>
              <div style={{ display:"flex", flexDirection:"column", gap:9 }}>
                {t.socials.map(({ Icon, label, sub, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" onMouseEnter={onEnter} onMouseLeave={onLeave}
                    style={{ display:"flex", alignItems:"center", gap:10, color:"var(--muted)", textDecoration:"none", fontSize:12.5, transition:"color 0.2s" }}
                    onMouseOver={e => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.querySelector(".ib").style.borderColor = "var(--accent)"; e.currentTarget.querySelector(".ib").style.color = "var(--accent)"; }}
                    onMouseOut={e => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.querySelector(".ib").style.borderColor = "var(--border)"; e.currentTarget.querySelector(".ib").style.color = "var(--muted)"; }}>
                    <div className="ib" style={{ width:30, height:30, border:"1px solid var(--border)", borderRadius:6, display:"flex", alignItems:"center", justifyContent:"center", background:"var(--card)", transition:"border-color 0.2s, color 0.2s", flexShrink:0, color:"var(--muted)" }}><Icon size={15} /></div>
                    {sub}
                  </a>
                ))}
              </div>
            </div>
            <ContactForm t={t} />
          </div>
        </div>
      </AnimatedSection>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop:"1px solid var(--border)", padding:`18px ${px}`, display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:6 }}>
        <p style={{ fontSize:10, color:"var(--muted)", letterSpacing:"0.05em" }}>© 2025 <span style={{ color:"var(--accent)" }}>Masroor Hussain Shah</span>. {t.footerLeft}</p>
        <p style={{ fontSize:10, color:"var(--muted)", letterSpacing:"0.05em" }}>{t.footerRight}</p>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Instrument+Serif:ital@0;1&family=DM+Mono:wght@300;400;500&display=swap');
        *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        body { overflow-x:hidden; -webkit-font-smoothing:antialiased; }
        b { color:var(--text); font-weight:600; }
        ::selection { background:rgba(126,255,212,0.18); color:var(--text); }
        ::-webkit-scrollbar { width:3px; }
        ::-webkit-scrollbar-track { background:var(--bg); }
        ::-webkit-scrollbar-thumb { background:var(--border); border-radius:2px; }
        @keyframes float { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-18px,18px)} }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.25;transform:scale(0.6)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
        input, textarea, button { font-family:inherit; }
      `}</style>
    </div>
  );
}