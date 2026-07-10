export const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export const experience = [
  {
    company: "HealthKart",
    role: "Software Engineering Intern (Backend & Data Pipelines)",
    dates: "Jan 2026 – Present",
    location: "Gurgaon",
    bullets: [
      {
        text: "Built multi-layer Redis caching (cache-aside + response caching + TTL) across core services",
        metric: "~40%",
        metricLabel: "latency cut",
      },
      {
        text: "Shipped a config-driven analytics platform (ClickHouse + CubeJS) with 20+ reusable JSON-driven dashboard components",
      },
      {
        text: "Built a multi-tenant event-tracking system (Python, Dagster, Segment CDP) with automated schema-drift and null-rate asset checks",
      },
    ],
  },
  {
    company: "Microsoft",
    role: "Software Engineering Intern",
    dates: "May 2025 – Jun 2025",
    location: "Hyderabad",
    bullets: [
      {
        text: "Built a Python static analysis tool to flag unsafe Windows C/C++ API patterns",
        metric: "35%",
        metricLabel: "less manual review effort",
      },
      {
        text: "Cut false negatives in flagged patterns",
        metric: "20%",
        metricLabel: "fewer false negatives",
      },
      {
        text: "Integrated the tool into CI/CD with a Streamlit dashboard for MSRC triage",
      },
    ],
  },
];

export const projects = [
  {
    title: "ATS Resume Agent",
    tagline: "A LangGraph pipeline that rewrites your résumé against a real job description — and compiles a real PDF.",
    stack: ["Python", "LangGraph", "FastAPI", "GPT-4o-mini", "React", "Docker", "pdflatex"],
    github: "https://github.com/YASHASWINIKSHRESTHA/ATS_RESUME_AGENT",
    bullets: [
      "7-node LangGraph pipeline: JD parsing → ATS scoring → gap analysis → LaTeX rewrite → PDF compile",
      "Structured JSON at every node via Pydantic; recompiles a real pdflatex PDF end-to-end",
    ],
  },
  {
    title: "VeriLoan",
    tagline: "Agentic loan onboarding where GPT-4o proposes and a 200+ rule engine decides — RBI V-CIP auditable.",
    stack: ["GPT-4o", "Whisper STT", "Node.js", "Express", "MediaPipe", "React"],
    github: "https://github.com/YASHASWINIKSHRESTHA/Verifloan",
    bullets: [
      "GPT-4o runs in shadow mode only — a 200+ rule deterministic engine holds final decision authority",
      "4 real-time fraud scenarios with rule-trace logging; rate limiting, Helmet.js, sensitive-data cleanup",
    ],
    featured: true,
  },
  {
    title: "PersonalMail-RL",
    tagline: "GRPO + QLoRA fine-tuning that made a 1.5B model noticeably better at sounding like you.",
    stack: ["Python", "TRL GRPO", "Qwen2.5-1.5B", "QLoRA", "FastAPI", "HuggingFace", "Docker"],
    github: "https://github.com/YASHASWINIKSHRESTHA/personalmail-rl-opt",
    badge: "Finalist, Meta OpenEnv Hackathon (Apr 2026)",
    bullets: [
      "GRPO + 4-bit QLoRA RL fine-tune across 25 eval scenarios",
      "Patched a live type-unsafe JSON exploit mid-training; deployed on HF Spaces (A100)",
    ],
    metrics: [
      { value: "+37.9%", label: "reply quality" },
      { value: "+42.6%", label: "tone accuracy" },
    ],
  },
];

export const skills = [
  {
    group: "Languages",
    proof: "Across every project and internship below",
    items: ["Python", "Java", "TypeScript", "JavaScript", "C++", "Bash"],
  },
  {
    group: "Backend & APIs",
    proof: "VeriLoan's rule engine, PersonalMail-RL's FastAPI serving layer",
    items: ["Spring Boot", "FastAPI", "Node.js", "Express", "REST", "Redis", "OOP / Design Patterns"],
  },
  {
    group: "Agentic AI & LLM",
    proof: "ATS Resume Agent's 7-node graph, VeriLoan's shadow-mode GPT-4o",
    items: ["LangGraph", "LangChain", "GPT-4o", "Pydantic", "RAG", "Multi-Agent Systems", "GRPO / QLoRA", "MCP", "LangSmith"],
  },
  {
    group: "Data & Pipelines",
    proof: "HealthKart's config-driven analytics + event-tracking platform",
    items: ["PostgreSQL", "MySQL", "ClickHouse", "CubeJS", "Dagster", "Segment CDP"],
  },
  {
    group: "Infra & Tools",
    proof: "CI/CD triage tooling at Microsoft, HF Spaces deploys",
    items: ["Docker", "CI/CD", "AWS", "Azure", "Git", "Streamlit", "Tableau"],
  },
];

export const achievements = [
  {
    icon: "🏆",
    stat: "Finalist",
    label: "Meta OpenEnv Hackathon · Apr 2026",
  },
  {
    icon: "🥈",
    stat: "Top 47",
    label: "of 100,000+ — EY Hackathon 5.0, team lead",
  },
  {
    icon: "🎓",
    stat: "₹2,00,000",
    label: "Reliance Foundation Scholar",
  },
  {
    icon: "💻",
    stat: "700+",
    label: "problems solved — LeetCode / GFG / Codeforces",
    href: "https://leetcode.com/u/yeuxsilenceux/",
  },
];

export const contact = {
  email: "kulshresthayashaswini@gmail.com",
  linkedin: "https://www.linkedin.com/in/yashaswini-kulshrestha-9516b4294/",
  github: "https://github.com/YASHASWINIKSHRESTHA",
  resume: "/resume.pdf",
};
