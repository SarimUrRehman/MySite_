import { createFileRoute } from "@tanstack/react-router";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Chatbot } from "@/components/Chatbot";
import { Github, Mail, Phone, Linkedin, Globe, ArrowUpRight } from "lucide-react";
import sarimProfile from "@/assets/sarim-profile.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sarim Ur Rehman — Computer Science Student & Developer" },
      {
        name: "description",
        content:
          "Portfolio of Sarim Ur Rehman — Computer Science student building MERN, PHP, and ASP.NET projects.",
      },
      { property: "og:title", content: "Sarim Ur Rehman — Portfolio" },
      {
        property: "og:description",
        content: "Projects, skills, and contact for Sarim Ur Rehman.",
      },
    ],
  }),
  component: Index,
});

const projects = [
  {
    n: "01",
    title: "Doctor AI Mobile Application",
    stack: "Flutter · FastAPI · Firebase Firestore",
    body: [
      "Built an AI-powered healthcare mobile app for symptom analysis and disease prediction.",
      "Integrated chatbot, voice interaction, and personalized diet/exercise recommendations.",
      "Implemented chat history and session management using Firebase Firestore.",
    ],
  },
  {
    n: "02",
    title: "E-Commerce Website",
    stack: "MERN Stack · MongoDB · React · Node.js",
    body: [
      "Developed a full-stack e-commerce platform with authentication, cart, and product management.",
      "Integrated an AI assistant for personalized product recommendations and user support.",
      "Built responsive frontend and REST APIs for scalable data handling.",
    ],
  },
  {
    n: "03",
    title: "Event Management System",
    stack: "MERN Stack",
    body: [
      "Full-stack event platform with role-based access for Attendees, Exhibitors, and Owners.",
      "Users register, manage booths, and oversee events through dynamic dashboards.",
    ],
  },
  {
    n: "04",
    title: "Online Billing System",
    stack: "ASP.NET",
    body: [
      "Designed a friendly software interface for employees to handle orders, track status, and manage payments seamlessly.",
    ],
  },
];

const technicalSkills = [
  { name: "React.js", slug: "react" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "MERN Stack", slug: "express" },
  { name: "Flutter", slug: "flutter" },
  { name: "FastAPI", slug: "fastapi" },
  { name: "Firebase", slug: "firebase" },
  { name: "PHP", slug: "php" },
  { name: "MySQL", slug: "mysql" },
  { name: "ASP.NET", slug: "dotnet" },
  { name: "Data Structures", slug: "leetcode" },
  { name: "SQL", slug: "postgresql" },
];

const softSkills = [
  "Teamwork & Collaboration",
  "Problem-Solving",
  "Communication",
  "Adaptability",
  "Time Management",
  "Critical Thinking",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <header className="border-b border-foreground/15">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <div className="font-mono-label text-[11px]">Sarim.dev</div>
          <nav className="hidden md:flex gap-7 font-mono-label text-[11px]">
            <a href="#profile" className="hover:text-accent">Profile</a>
            <a href="#projects" className="hover:text-accent">Projects</a>
            <a href="#skills" className="hover:text-accent">Skills</a>
            <a href="#education" className="hover:text-accent">Education</a>
            <a href="#contact" className="hover:text-accent">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="font-mono-label text-[11px] uppercase tracking-wider px-4 py-2 bg-foreground text-background hover:bg-accent hover:text-foreground transition-colors"
            >
              Hire Me
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 pt-12 md:pt-20 pb-10">
        <div className="font-mono-label text-[11px] text-muted-foreground mb-6">
          Portfolio / Computer Science Student
        </div>
        <h1 className="font-display text-[14vw] md:text-[8.5rem] leading-[0.88] uppercase">
          Sarim Ur
          <br />
          <span className="text-accent">Rehman</span>
        </h1>
        <div className="rule-divider mt-10" />
        <div className="grid md:grid-cols-[1fr_2fr] gap-8 mt-10">
          <div className="bg-sage p-6 md:p-8 flex items-center gap-5">
            <div className="size-32 md:size-40 rounded-full overflow-hidden bg-foreground shrink-0">
              <img
                src={sarimProfile}
                alt="Sarim Ur Rehman portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="font-mono-label text-[11px] text-foreground/70">Student</div>
              <div className="font-display text-xl text-foreground mt-1">
                Computer Science
              </div>
              <div className="font-mono-label text-[10px] text-foreground/60 mt-1">
                Iqra University
              </div>
            </div>
          </div>
          <p id="profile" className="font-display text-2xl md:text-4xl leading-[1.1]">
            Computer Science student with a strong foundation in programming —
            <span className="text-muted-foreground">
              {" "}aiming to build a successful career in software development by continuously
              shipping projects and exploring new technologies.
            </span>
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-display text-5xl md:text-7xl uppercase">Projects</h2>
          <div className="font-mono-label text-[11px] text-muted-foreground">
            04 Selected works
          </div>
        </div>
        <div className="rule-divider mb-10" />
        <div className="grid md:grid-cols-2 gap-px bg-foreground/15 border border-foreground/15">
          {projects.map((p) => (
            <article
              key={p.n}
              className="bg-background p-6 md:p-8 group hover:bg-sage transition-colors"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-mono-label text-[11px] text-accent">{p.n}</span>
                <ArrowUpRight
                  size={20}
                  className="text-foreground/40 group-hover:text-foreground transition-colors"
                />
              </div>
              <h3 className="font-display text-2xl md:text-3xl uppercase leading-[1] mb-2">
                {p.title}
              </h3>
              <div className="font-mono-label text-[10px] text-muted-foreground mb-5">
                {p.stack}
              </div>
              <ul className="space-y-2 text-sm leading-relaxed text-foreground/80">
                {p.body.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-accent">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid md:grid-cols-[1fr_2fr] gap-10">
          <h2 className="font-display text-5xl md:text-7xl uppercase">
            Technical
            <br />
            <span className="text-accent">Skills</span>
          </h2>
          <div>
            <div className="rule-divider mb-8" />
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-foreground/15 border border-foreground/15">
              {technicalSkills.map((s) => (
                <li
                  key={s.name}
                  className="bg-background p-4 flex flex-col items-center justify-center gap-3 hover:bg-sage transition-colors aspect-square"
                >
                  <img
                    src={`https://cdn.simpleicons.org/${s.slug}`}
                    alt={`${s.name} logo`}
                    loading="lazy"
                    className="w-10 h-10 object-contain dark:invert-0"
                  />
                  <span className="font-mono-label text-[10px] uppercase tracking-wider text-center">
                    {s.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_2fr] gap-10 mt-20">
          <h2 className="font-display text-5xl md:text-7xl uppercase">
            Soft
            <br />
            <span className="text-accent">Skills</span>
          </h2>
          <div>
            <div className="rule-divider mb-8" />
            <ul className="grid sm:grid-cols-2 gap-y-4">
              {softSkills.map((s, i) => (
                <li
                  key={s}
                  className="flex items-baseline gap-4 border-b border-foreground/15 pb-3"
                >
                  <span className="font-mono-label text-[10px] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-lg uppercase">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-display text-5xl md:text-7xl uppercase">Education</h2>
          <div className="font-mono-label text-[11px] text-muted-foreground">Timeline</div>
        </div>
        <div className="rule-divider mb-10" />
        <div className="space-y-px bg-foreground/15 border border-foreground/15">
          {[
            {
              year: "2025 — Present",
              title: "BS Computer Science",
              place: "Iqra University",
              note: "Current CGPA: 3.54 / 4.00",
            },
            {
              year: "2022 - 2025",
              title: "Diploma — ACCP Prime",
              place: "Aptech Learning",
              note: "Full-stack development training",
            },
            {
              year: "2022 — 2024",
              title: "Intermediate",
              place: "Formens College, Nazimabad",
              note: "Pre-Engineering",
            },
          ].map((e) => (
            <div
              key={e.title}
              className="bg-background grid md:grid-cols-[180px_1fr_1fr] gap-4 p-6 md:p-8"
            >
              <div className="font-mono-label text-[11px] text-accent">{e.year}</div>
              <div>
                <div className="font-display text-xl md:text-2xl uppercase">{e.title}</div>
                <div className="text-sm text-muted-foreground mt-1">{e.place}</div>
              </div>
              <div className="text-sm text-foreground/70 md:text-right">{e.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-foreground text-background mt-16">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-32">
          <div className="font-mono-label text-[11px] text-background/60 mb-6">
            Contact / Let's build something
          </div>
          <h2 className="font-display text-6xl md:text-9xl uppercase leading-[0.9]">
            Get in
            <br />
            <span className="text-accent">Touch.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mt-14">
            {[
              { icon: Mail, label: "Email", value: "sarim.ur.rehman2006@gmail.com", href: "mailto:sarim.ur.rehman2006@gmail.com" },
              { icon: Phone, label: "Mobile", value: "0316 6077749", href: "tel:03166077749" },
              { icon: Github, label: "GitHub", value: "github.com/SarimUrRehman", href: "https://github.com/SarimUrRehman" },
              { icon: Linkedin, label: "LinkedIn", value: "sarim-ur-rehman-581398255", href: "https://linkedin.com/in/sarim-ur-rehman-581398255" },
              
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between border-b border-background/20 py-5 hover:border-accent transition-colors"
              >
                <div className="flex items-center gap-4">
                  <Icon size={20} className="text-background/60 group-hover:text-accent transition-colors" />
                  <div>
                    <div className="font-mono-label text-[10px] text-background/60">{label}</div>
                    <div className="font-display text-lg uppercase">{value}</div>
                  </div>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-background/40 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                />
              </a>
            ))}
          </div>

          <div className="mt-20 flex items-center justify-between font-mono-label text-[10px] text-background/50">
            <span>© 2026 Sarim Ur Rehman</span>
            <span>Karachi, Pakistan</span>
          </div>
        </div>
      </section>

      <Chatbot />
    </div>
  );
}
