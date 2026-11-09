"use client";
import React, { useEffect, useRef, useState } from "react";
import { CldImage, CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";
import {
  ArrowUpRight,
  ChevronDown,
  Mail,
  Menu,
  X,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";

/* ───────────────────────── DATA ───────────────────────── */

const roles = [
  "build AI-powered apps.",
  "design full-stack platforms.",
  "turn ideas into products.",
  "love agentic AI.",
];

const stats = [
  { n: "6+", l: "Projects shipped" },
  { n: "4", l: "Podium finishes" },
  { n: "87", l: "Tests written (CPMS)" },
];

const marquee = [
  "Python",
  "Django",
  "React",
  "Next.js",
  "TypeScript",
  "Java",
  "C",
  "MySQL",
  "MongoDB",
  "PostgreSQL",
  "Express.js",
  "Tailwind CSS",
  "Gemini API",
  "RAG",
  "BM25",
  "Streamlit",
  "Git",
  "Vercel",
];

const skillGroups = [
  {
    title: "Languages",
    items: ["C", "Python", "Java", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Frameworks",
    items: ["React", "Next.js", "Django", "Express.js", "Streamlit"],
  },
  {
    title: "Data & Cloud",
    items: [
      "MySQL",
      "MongoDB",
      "PostgreSQL",
      "Supabase",
      "Firebase",
      "Vercel",
      "Render",
    ],
  },
  {
    title: "AI & Search",
    items: ["RAG", "Hybrid search", "Embeddings", "Gemini API", "OCR"],
  },
  {
    title: "Core CS",
    items: ["DBMS", "OOP", "DSA", "OS", "COA", "Cryptography", "Cybersecurity"],
  },
];

type Featured = {
  key: "kali" | "cpms" | "wayfinder";
  tag: string;
  title: string;
  blurb: string;
  points: string[];
  stack: string[];
  repo: string;
  live?: string;
};

const featured: Featured[] = [
  {
    key: "kali",
    tag: "Generative AI · RAG",
    title: "Kali-RAG",
    blurb:
      "A grounded troubleshooting assistant for Kali Linux. It answers only from the official docs, cites every page it used, and says “I don’t know” when the docs don’t cover the question.",
    points: [
      "Hybrid retrieval: sentence embeddings + BM25 fused with reciprocal rank fusion",
      "Similarity-threshold gate refuses out-of-scope questions before the LLM is called",
      "Built an eval harness (56 in-scope + 13 out-of-scope questions); a reranker that made results worse was measured, then dropped",
    ],
    stack: [
      "Python",
      "Gemini",
      "sentence-transformers",
      "rank-bm25",
      "Streamlit",
    ],
    repo: "https://github.com/Samcode-16/Kali-RAG",
  },
  {
    key: "cpms",
    tag: "Full-stack · Django",
    title: "Campus Placement Management System",
    blurb:
      "One portal that replaces spreadsheets and email chains in a placement cell, with separate experiences for students and placement officers.",
    points: [
      "Backend eligibility gating on CGPA, backlogs and department before any application is accepted",
      "Role-based access, authorised resume streaming and DPDP Act consent tracking",
      "10 relational models, officer analytics dashboard, 87 automated tests, deployed on Render + Supabase",
    ],
    stack: [
      "Python",
      "Django",
      "PostgreSQL",
      "Supabase",
      "JavaScript",
      "Render",
    ],
    repo: "https://github.com/Samcode-16/Campus-Placement-Management-System",
    live: "https://campus-placement-management-system-bar1.onrender.com/",
  },
  {
    key: "wayfinder",
    tag: "Navigation · Product",
    title: "Wayfinder",
    // TODO: replace with a real description from your Wayfinder README
    blurb: "Add a 2 line summary of what Wayfinder does and who it helps.",
    points: [
      "Key feature or technical challenge #1",
      "Key feature or technical challenge #2",
      "Outcome, impact or what you learned",
    ],
    stack: ["Add", "Your", "Stack"],
    repo: "https://github.com/Samcode-16/Wayfinder",
  },
];

const videoProjects = [
  {
    id: "Screen_Recording_2026-05-11_161335",
    title: "Dasara Mitra",
    context: "Inunity · Innovation & Design Thinking",
    desc: "A trilingual digital companion for navigating the Mysuru Dasara festival: plan transport, find your way, and ask a chatbot.",
    link: "https://github.com/Samcode-16/Dasara-Mitra",
    tech: ["Next.js", "TypeScript", "Tailwind", "Geolocation API"],
  },
  {
    id: "Screen_Recording_2026-05-11_185615",
    title: "Multilayer File Encryption",
    context: "Cryptography course project",
    desc: "Files pass through Playfair, columnar transposition and DES in a triple-layer pipeline, wrapped in a clean web interface.",
    link: "https://github.com/Samcode-16/cipherstack-files",
    tech: ["React", "Cryptography", "DES", "Tailwind"],
  },
  {
    id: "Screen_Recording_2026-05-11_193356",
    title: "Smart Receipt Analyzer",
    context: "Personal project",
    desc: "Upload a receipt photo; AI extracts, categorises and stores the data using Google AI Studio and Firebase.",
    link: "https://github.com/Samcode-16/Smart-Receipt-Analyser",
    tech: ["React", "Google AI Studio", "Firebase"],
  },
  {
    id: "Video_Project_4",
    title: "Electoral Voter Info Extractor",
    context: "Collaborative project",
    desc: "An OCR pipeline that pulls structured voter details out of electoral-roll PDFs.",
    link: "https://github.com/DeekshaR06/electoral-roll-ocr",
    tech: ["Python", "OCR", "Computer Vision"],
  },
];

const achievements = [
  {
    year: "May 2026",
    medal: "1st",
    title: "Inunity Design Thinking, Sem 2",
    desc: "Built the Dasara Mitra Kiosk to help visitors in Mysuru during Dasara.",
  },
  {
    year: "Apr 2026",
    medal: "2nd",
    title: "Startup Pitch Competition",
    desc: "Pitched a startup idea at Atria University.",
  },
  {
    year: "Mar 2026",
    medal: "2nd",
    title: "Social Innovation Challenge",
    desc: "Designed a repurposed shipping-container clinic to improve rural healthcare access.",
  },
  {
    year: "Dec 2025",
    medal: "4th",
    title: "Inunity Design Thinking, Sem 1",
    desc: "Built a Dasara navigation web app against MSc Data Science and MCA teams.",
  },
];

const involvement = [
  {
    role: "Student Coordinator",
    org: "TIP Cell (Training, Internship & Placement)",
    when: "Present",
  },
  {
    role: "Core Team Member",
    org: "IKS (Indian Knowledge Systems)",
    when: "2024 – Present",
  },
  { role: "Member", org: "Turing Club", when: "2024 – Present" },
  { role: "Volunteer", org: "Srujana TechFest 2025", when: "Apr 2025" },
];

const nav = ["about", "work", "projects", "journey", "contact"];

/* ───────────────────────── HELPERS ───────────────────────── */

const GitHubIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
  >
    <path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
  </svg>
);

const Reveal = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${className}`}
    >
      {children}
    </div>
  );
};

const Spot = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const move = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  return (
    <div onMouseMove={move} className={`spot rounded-3xl ${className}`}>
      <div className="relative">{children}</div>
    </div>
  );
};

const Heading = ({
  kicker,
  title,
  sub,
}: {
  kicker: string;
  title: React.ReactNode;
  sub?: string;
}) => (
  <Reveal className="mb-14">
    <p className="font-mono text-xs uppercase tracking-[0.3em] text-rose-400 mb-4">
      {kicker}
    </p>
    <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
      {title}
    </h2>
    {sub && <p className="mt-4 max-w-2xl text-zinc-400 text-lg">{sub}</p>}
  </Reveal>
);

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="px-3 py-1 rounded-full text-xs font-mono text-zinc-300 bg-white/5 border border-white/10">
    {children}
  </span>
);

const Typewriter = ({ words }: { words: string[] }) => {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i];
    const t = setTimeout(
      () => {
        if (!del) {
          setText(w.slice(0, text.length + 1));
          if (text.length + 1 === w.length)
            setTimeout(() => setDel(true), 1300);
        } else {
          setText(w.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDel(false);
            setI((i + 1) % words.length);
          }
        }
      },
      del ? 28 : 55,
    );
    return () => clearTimeout(t);
  }, [text, del, i, words]);
  return (
    <span className="text-white">
      {text}
      <span className="caret text-rose-400">|</span>
    </span>
  );
};

/* Mini visuals for the featured projects */
const Visual = ({ k }: { k: Featured["key"] }) => {
  if (k === "kali") {
    const steps = [
      "Question",
      "BM25 + Embeddings",
      "Threshold gate",
      "Gemini + citations",
    ];
    const bars = [
      ["Top-1", 43, 56],
      ["Top-3", 51, 56],
      ["Correct refusals", 12, 13],
    ] as const;
    return (
      <div className="space-y-5">
        <div className="flex flex-wrap items-center gap-2 font-mono text-[11px]">
          {steps.map((s, i) => (
            <React.Fragment key={s}>
              <span className="px-3 py-1.5 rounded-lg bg-rose-500/10 border border-rose-400/20 text-rose-200">
                {s}
              </span>
              {i < steps.length - 1 && <span className="text-zinc-600">→</span>}
            </React.Fragment>
          ))}
        </div>
        <div className="space-y-3">
          {bars.map(([l, a, b]) => (
            <div key={l}>
              <div className="flex justify-between font-mono text-[11px] text-zinc-400 mb-1">
                <span>{l}</span>
                <span>
                  {a}/{b}
                </span>
              </div>
              <div className="bar h-1.5 rounded-full bg-white/10 overflow-hidden">
                <span
                  className="block h-full rounded-full bg-gradient-to-r from-rose-500 to-amber-400"
                  style={{ width: `${(a / b) * 100}%` }}
                />
              </div>
            </div>
          ))}
          <p className="text-[11px] text-zinc-500 font-mono">
            Dev-set results on 56 + 13 labelled questions
          </p>
        </div>
      </div>
    );
  }
  if (k === "cpms") {
    const flow = ["Applied", "Shortlisted", "Selected"];
    return (
      <div className="space-y-5">
        <div className="grid grid-cols-3 gap-3 text-center">
          {[
            ["10", "models"],
            ["87", "tests"],
            ["2", "portals"],
          ].map(([n, l]) => (
            <div
              key={l}
              className="rounded-xl bg-white/5 border border-white/10 py-3"
            >
              <p className="text-2xl font-semibold">{n}</p>
              <p className="text-[11px] font-mono text-zinc-400">{l}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px]">
          {flow.map((s, i) => (
            <React.Fragment key={s}>
              <span
                className={`px-3 py-1.5 rounded-full border ${i === 2 ? "bg-emerald-500/15 border-emerald-400/30 text-emerald-200" : "bg-white/5 border-white/10 text-zinc-300"}`}
              >
                {s}
              </span>
              {i < 2 && <span className="text-zinc-600">→</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="relative h-32 rounded-xl bg-white/5 border border-white/10 overflow-hidden">
      <svg viewBox="0 0 300 120" className="w-full h-full">
        <path
          d="M20 95 C 80 20, 140 110, 200 50 S 270 30, 285 25"
          fill="none"
          stroke="url(#g)"
          strokeWidth="2.5"
          strokeDasharray="6 6"
        />
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0" stopColor="#fb7185" />
            <stop offset="1" stopColor="#fbbf24" />
          </linearGradient>
        </defs>
        <circle cx="20" cy="95" r="6" fill="#fb7185" />
        <circle cx="285" cy="25" r="7" fill="#fbbf24" />
      </svg>
    </div>
  );
};

/* ───────────────────────── PAGE ───────────────────────── */

export const PortfolioContent = () => {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("about");
  const glow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      setProgress((h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100);
    };
    const onMove = (e: MouseEvent) => {
      if (glow.current)
        glow.current.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMove);
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    nav.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
      io.disconnect();
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden bg-[#0b0a10] text-zinc-100">
      {/* ambient layers */}
      <div
        className="fixed top-0 left-0 h-0.5 z-[60] bg-gradient-to-r from-rose-500 to-amber-400"
        style={{ width: `${progress}%` }}
      />
      <div
        ref={glow}
        className="hidden md:block pointer-events-none fixed top-0 left-0 w-[600px] h-[600px] rounded-full z-0 bg-rose-500/10 blur-[110px] transition-transform duration-300 ease-out"
      />
      <div className="pointer-events-none fixed inset-0 grain z-0" />

      {/* NAV */}
      <nav className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl pl-2 pr-3 py-2">
          <a
            href="#about"
            className="w-9 h-9 rounded-full bg-gradient-to-br from-rose-500 to-amber-400 grid place-items-center font-bold text-black"
          >
            S
          </a>
          <div className="hidden md:flex">
            {nav.map((n) => (
              <a
                key={n}
                href={`#${n}`}
                className={`px-4 py-2 rounded-full text-sm capitalize transition-colors ${active === n ? "bg-white/10 text-white" : "text-zinc-400 hover:text-white"}`}
              >
                {n}
              </a>
            ))}
          </div>
          <button
            className="md:hidden p-2"
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {open && (
          <div className="md:hidden absolute top-16 w-[calc(100%-2rem)] rounded-3xl border border-white/10 bg-black/80 backdrop-blur-xl p-3">
            {nav.map((n) => (
              <a
                key={n}
                href={`#${n}`}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-xl capitalize text-zinc-300 hover:bg-white/5"
              >
                {n}
              </a>
            ))}
          </div>
        )}
      </nav>

      <main className="relative z-10">
        {/* HERO */}
        <section
          id="about"
          className="relative min-h-screen flex items-center px-6 pt-28 pb-16"
        >
          <div className="drift absolute -top-10 -left-20 w-[480px] h-[480px] rounded-full bg-rose-600/20 blur-[120px]" />
          <div
            className="drift absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-amber-500/15 blur-[120px]"
            style={{ animationDelay: "-6s" }}
          />
          <div className="relative max-w-7xl mx-auto w-full grid md:grid-cols-[1.2fr_1fr] gap-14 items-center">
            <div>
              <Reveal>
                <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-mono text-zinc-300 mb-8">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  Open to internships & collaborations
                </p>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-semibold tracking-tighter leading-[0.95]">
                  Hi, I’m{" "}
                  <span className="bg-gradient-to-r from-rose-400 via-rose-300 to-amber-300 bg-clip-text text-transparent">
                    Samudyatha
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 text-2xl md:text-3xl text-zinc-400 font-light h-10">
                  I <Typewriter words={roles} />
                </p>
              </Reveal>
              <Reveal delay={300}>
                <p className="mt-6 max-w-xl text-lg text-zinc-400 leading-relaxed">
                  BCA student and lifelong learner. I build software that
                  creates real impact, from RAG assistants that admit what they
                  don’t know to placement portals that replace spreadsheet
                  chaos.
                </p>
              </Reveal>
              <Reveal delay={400} className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-white text-black px-7 py-3.5 font-medium hover:scale-105 transition-transform"
                >
                  See my work{" "}
                  <ChevronDown
                    size={18}
                    className="group-hover:translate-y-0.5 transition-transform"
                  />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-zinc-200 hover:border-rose-400/60 hover:text-white transition-colors"
                >
                  Get in touch
                </a>
              </Reveal>
              <Reveal delay={500} className="mt-14 flex gap-10">
                {stats.map((s) => (
                  <div key={s.l}>
                    <p className="text-3xl md:text-4xl font-semibold">{s.n}</p>
                    <p className="text-xs font-mono text-zinc-500 mt-1">
                      {s.l}
                    </p>
                  </div>
                ))}
              </Reveal>
            </div>

            <Reveal delay={200} className="flex justify-center">
              <div className="float relative w-72 h-72 md:w-[420px] md:h-[420px]">
                <div className="ring absolute -inset-1.5 rounded-[3rem] bg-[conic-gradient(from_0deg,#fb7185,#fbbf24,#fb7185)] opacity-80 blur-sm" />
                <div className="absolute inset-0 rounded-[3rem] overflow-hidden border border-white/10 bg-zinc-900">
                  <CldImage
                    src="WhatsApp_Image_2026-05-08_at_12.33.11"
                    alt="Samudyatha K Bhat"
                    fill
                    className="object-cover"
                    crop="fill"
                    gravity="face"
                    format="auto"
                    quality="auto"
                    sizes="(max-width: 768px) 288px, 420px"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 rounded-2xl border border-white/10 bg-black/70 backdrop-blur px-4 py-3 font-mono text-xs">
                  <span className="text-rose-400">const</span> focus ={" "}
                  <span className="text-amber-300">“Agentic AI”</span>;
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="marquee overflow-hidden border-y border-white/10 bg-white/[0.02] py-5">
          <div className="marquee-track flex w-max gap-10 whitespace-nowrap font-mono text-sm text-zinc-400">
            {[...marquee, ...marquee].map((m, i) => (
              <span key={i} className="flex items-center gap-10">
                {m}
                <Sparkles size={12} className="text-rose-400/70" />
              </span>
            ))}
          </div>
        </div>

        {/* SKILLS */}
        <section id="work" className="px-6 py-32">
          <div className="max-w-7xl mx-auto">
            <Heading
              kicker="01 · Toolkit"
              title={
                <>
                  Tools I reach for<span className="text-rose-400">.</span>
                </>
              }
              sub="A mix of systems thinking, solid CS fundamentals and modern AI tooling."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {skillGroups.map((g, i) => (
                <Reveal key={g.title} delay={i * 80}>
                  <Spot className="p-7 h-full">
                    <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-rose-300 mb-5">
                      {g.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {g.items.map((s) => (
                        <Chip key={s}>{s}</Chip>
                      ))}
                    </div>
                  </Spot>
                </Reveal>
              ))}
              <Reveal delay={400}>
                <Spot className="p-7 h-full bg-gradient-to-br from-rose-500/10 to-amber-400/10">
                  <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-amber-300 mb-5">
                    Currently exploring
                  </h3>
                  <p className="text-zinc-300 leading-relaxed">
                    Agentic AI, evaluation-driven RAG, and product management:
                    building things that are measurable, not just impressive.
                  </p>
                </Spot>
              </Reveal>
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section id="projects" className="px-6 pb-32">
          <div className="max-w-7xl mx-auto">
            <Heading
              kicker="02 · Recent work"
              title={
                <>
                  Featured projects<span className="text-rose-400">.</span>
                </>
              }
              sub="The things I’ve been building most recently."
            />
            <div className="space-y-6">
              {featured.map((p, i) => (
                <Reveal key={p.key}>
                  <Spot className="p-8 md:p-10">
                    <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="font-mono text-xs text-zinc-500">
                            0{i + 1}
                          </span>
                          <span className="font-mono text-xs uppercase tracking-widest text-rose-300">
                            {p.tag}
                          </span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                          {p.title}
                        </h3>
                        <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                          {p.blurb}
                        </p>
                        <ul className="space-y-2.5 mb-6">
                          {p.points.map((pt) => (
                            <li key={pt} className="flex gap-3 text-zinc-300">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-rose-400 to-amber-300" />
                              {pt}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 mb-8">
                          {p.stack.map((s) => (
                            <Chip key={s}>{s}</Chip>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-3">
                          <a
                            href={p.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm hover:border-rose-400/60 transition-colors"
                          >
                            <GitHubIcon size={16} /> Code
                          </a>
                          {p.live && (
                            <a
                              href={p.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium hover:scale-105 transition-transform"
                            >
                              Live demo <ArrowUpRight size={16} />
                            </a>
                          )}
                        </div>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
                        <Visual k={p.key} />
                      </div>
                    </div>
                  </Spot>
                </Reveal>
              ))}
            </div>

            {/* demo videos */}
            <Reveal className="mt-24 mb-10">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                More builds, in action
              </h3>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-8">
              {videoProjects.map((v, i) => (
                <Reveal key={v.id} delay={(i % 2) * 120}>
                  <Spot className="p-4 h-full">
                    <div className="rounded-2xl overflow-hidden bg-zinc-900">
                      <CldVideoPlayer
                        src={v.id}
                        width="1280"
                        height="720"
                        transformation={{
                          width: 1280,
                          height: 720,
                          crop: "fill",
                          gravity: "auto",
                        }}
                      />
                    </div>
                    <div className="p-4 pt-6">
                      <p className="font-mono text-[11px] uppercase tracking-widest text-rose-300 mb-2">
                        {v.context}
                      </p>
                      <h4 className="text-xl font-semibold mb-2">{v.title}</h4>
                      <p className="text-zinc-400 mb-4">{v.desc}</p>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {v.tech.map((t) => (
                          <Chip key={t}>{t}</Chip>
                        ))}
                      </div>
                      <a
                        href={v.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-rose-300 hover:text-white transition-colors"
                      >
                        View repo <ArrowUpRight size={15} />
                      </a>
                    </div>
                  </Spot>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* JOURNEY */}
        <section id="journey" className="px-6 pb-32">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
            <div>
              <Heading
                kicker="03 · Recognition"
                title={
                  <>
                    Wins<span className="text-rose-400">.</span>
                  </>
                }
              />
              <div className="relative pl-8 border-l border-white/10 space-y-8">
                {achievements.map((a, i) => (
                  <Reveal key={a.title} delay={i * 80}>
                    <div className="relative">
                      <span className="absolute -left-[2.45rem] top-1 grid place-items-center h-6 w-6 rounded-full bg-[#0b0a10] border border-rose-400/50 text-rose-300">
                        <Trophy size={12} />
                      </span>
                      <p className="font-mono text-xs text-zinc-500">
                        {a.year}
                      </p>
                      <h3 className="text-xl font-semibold mt-1">
                        <span className="bg-gradient-to-r from-rose-400 to-amber-300 bg-clip-text text-transparent">
                          {a.medal}
                        </span>{" "}
                        · {a.title}
                      </h3>
                      <p className="text-zinc-400 mt-1">{a.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <div>
              <Heading
                kicker="04 · Community"
                title={
                  <>
                    Leading & giving back
                    <span className="text-rose-400">.</span>
                  </>
                }
              />
              <div className="space-y-4">
                {involvement.map((r, i) => (
                  <Reveal key={r.org} delay={i * 80}>
                    <Spot className="p-6 !rounded-2xl">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex gap-4">
                          <Users
                            size={18}
                            className="mt-1 text-rose-300 shrink-0"
                          />
                          <div>
                            <h3 className="font-semibold">{r.role}</h3>
                            <p className="text-zinc-400 text-sm">{r.org}</p>
                          </div>
                        </div>
                        <span className="font-mono text-xs text-zinc-500 whitespace-nowrap">
                          {r.when}
                        </span>
                      </div>
                    </Spot>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="relative px-6 py-32 text-center overflow-hidden"
        >
          <div className="drift absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-rose-600/15 blur-[140px]" />
          <Reveal className="relative max-w-4xl mx-auto">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-rose-400 mb-6">
              05 · Contact
            </p>
            <h2 className="text-5xl md:text-8xl font-semibold tracking-tighter leading-[0.95]">
              Let’s build something{" "}
              <span className="bg-gradient-to-r from-rose-400 to-amber-300 bg-clip-text text-transparent">
                great.
              </span>
            </h2>
            <p className="mt-8 text-lg text-zinc-400 max-w-xl mx-auto">
              Got an idea, an internship, or just want to say hi? My inbox is
              always open.
            </p>
            <a
              href="mailto:samudyathakbhat@gmail.com"
              className="group mt-12 inline-flex items-center gap-3 rounded-full bg-white text-black pl-8 pr-6 py-4 text-lg font-medium hover:scale-105 transition-transform"
            >
              <Mail size={20} /> samudyathakbhat@gmail.com{" "}
              <ArrowUpRight
                size={20}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </a>
          </Reveal>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 px-6 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Samudyatha K Bhat</p>
          <div className="flex gap-8">
            <a
              href="https://github.com/Samcode-16"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-rose-300 transition-colors"
            >
              <GitHubIcon size={14} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/samudyatha-k-bhat-s2716432s/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-rose-300 transition-colors"
            >
              LinkedIn
            </a>
            {/* TODO: point this to your resume PDF, e.g. /resume.pdf in /public */}
            <a href="#" className="hover:text-rose-300 transition-colors">
              Resume
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
