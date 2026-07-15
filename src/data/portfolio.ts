import type {
  ContactInfo,
  EducationItem,
  ExperienceItem,
  Highlight,
  LeadershipItem,
  NavLink,
  ProjectItem,
  SkillCategory,
  SocialLink,
} from "@/types/portfolio";

export const site = {
  name: "Asmi",
  shortName: "Asmi",
  headline: "Software Engineer | Backend | AI/ML",
  location: "India",
  title: "Asmi | Software Engineer",
  description:
    "Portfolio of Asmi, a software engineer with experience at Apple and TVS Motor Company, working across backend systems, AI/ML, data engineering, and intelligent applications.",
  profileImage: "/images/asmi-profile.png",
  resumePath: "/resume/Asmi_Goyal_Resume.pdf",
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/Asmi3005",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/asmi-goyal-448138243",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:asmigoyal30@gmail.com",
  },
];

export const hero = {
  intro: "Hi, I'm",
  name: "Asmi",
  statement: "I build intelligent systems and scalable software.",
  description:
    "Software engineer with experience at Apple and TVS Motor Company, building backend systems, AI-powered applications, data pipelines, and end-to-end software products.",
  primaryCta: { label: "View My Work", href: "#projects" },
  secondaryCta: {
    label: "Download Resume",
    href: "/resume/Asmi_Goyal_Resume.pdf",
  },
};

export const about = {
  paragraphs: [
    "I'm a Computer Science graduate from Thapar Institute of Engineering and Technology with software engineering experience at Apple and TVS Motor Company.",
    "My work spans backend systems, microservices, data ingestion pipelines, LLM-assisted schema normalization, search and subscription matching, RAG-based applications, computer vision, and full-stack product development.",
    "I’m interested in building practical end-to-end software across backend engineering, AI/ML, and data systems.",
  ],
};

export const highlights: Highlight[] = [
  {
    label: "Experience",
    value: "Apple & TVS Motor Company",
  },
  {
    label: "Focus",
    value: "Backend, AI/ML & Data Systems",
  },
  {
    label: "Education",
    value: "B.E. Computer Science",
  },
];

export const experiences: ExperienceItem[] = [
  {
    company: "Apple",
    role: "SDE Intern",
    location: "India",
    duration: "January 2026 – June 2026",
    bullets: [
      "Built a centralized insights platform PoC consolidating data from 3 teams and 3 sources into a unified ingestion pipeline, with LLM-based field mapping for schema normalization and low-friction onboarding of new sources.",
      "Designed an OpenSearch-based subscription matching system for multi-topic subscriptions, with notification triggering within seconds of data ingestion.",
      "Containerized 7 microservices spanning ingestion, enrichment, subscription matching, and supporting services with Docker, covering streaming and batch workflows.",
      "Improved local development consistency and reduced environment-specific setup issues across services.",
    ],
    technologies: [
      "Python",
      "OpenSearch",
      "Docker",
      "LLMs",
      "Microservices",
      "Data Pipelines",
    ],
  },
  {
    company: "TVS Motor Company",
    role: "Associate Digital Engineer Intern",
    location: "India",
    duration: "June 2025 – July 2025",
    bullets: [
      "Built an end-to-end RAG chatbot with LangChain and LangGraph, routing queries across 3 document sources and multiple query sub-types to the correct retrieval path.",
      "Integrated local LLMs with semantic chunking and FAISS-based retrieval to preserve contextual coherence over naive fixed-size chunking.",
      "Developed a Chainlit UI with a FastAPI backend, improving response time by 60% and accuracy by 35%.",
    ],
    technologies: [
      "Python",
      "LangChain",
      "LangGraph",
      "RAG",
      "FAISS",
      "FastAPI",
      "Chainlit",
      "Local LLMs",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["Python", "SQL", "C++", "C"],
  },
  {
    title: "AI/ML & LLM Systems",
    skills: [
      "LangChain",
      "LangGraph",
      "RAG",
      "FAISS",
      "Scikit-Learn",
      "NLTK",
      "OpenCV",
      "Prompt Engineering",
    ],
  },
  {
    title: "Backend & Infrastructure",
    skills: [
      "FastAPI",
      "Docker",
      "MongoDB",
      "PostgreSQL",
      "OpenSearch",
      "Git",
    ],
  },
  {
    title: "Data & Analysis",
    skills: ["Pandas", "NumPy", "PySpark", "Matplotlib", "Seaborn"],
  },
  {
    title: "Web",
    skills: ["HTML", "CSS"],
  },
];

export const projects: ProjectItem[] = [
  {
    name: "Typeform Clone",
    description:
      "Full-stack Typeform-inspired form builder with drag-and-drop question authoring, eight question types, one-question-at-a-time respondent flow, publishable share links, and response summaries — built with Next.js and a FastAPI + SQLite backend.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "SQLAlchemy",
      "SQLite",
      "Framer Motion",
    ],
    liveUrl:
      "https://typeformcloneproject-git-main-asmis-projects-2ce69f15.vercel.app/",
    githubUrl: "https://github.com/Asmi3005/Typeform_clone",
    visual: "typeform",
  },
  {
    name: "Face Anonymization Tool",
    description:
      "Full-stack privacy tool that detects and anonymizes faces in real time across images, videos, and webcam streams using MediaPipe and OpenCV, with blur, pixelate, blackout, and emoji modes plus live preview and instant mode switching.",
    technologies: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "FastAPI",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    githubUrl: "https://github.com/Asmi3005/Face-Anonymizer-OpenCV",
    visual: "face",
  },
  {
    name: "Medibot",
    description:
      "Interactive medical Q&A chatbot that classifies predefined medical query intents and falls back to a Mistral LLM for out-of-scope questions, with a FastAPI backend and Streamlit frontend for local end-to-end use. Not a substitute for professional medical advice.",
    technologies: [
      "Python",
      "FastAPI",
      "Streamlit",
      "Mistral LLM",
      "OpenAI API",
      "NLTK",
    ],
    githubUrl: "https://github.com/Asmi3005/Medbot",
    visual: "medibot",
  },
];

export const education: EducationItem = {
  institution: "Thapar Institute of Engineering and Technology",
  location: "Patiala, India",
  degree: "Bachelor of Engineering in Computer Science",
  duration: "August 2022 – June 2026",
  gpa: "8.88 / 10",
};

export const leadership: LeadershipItem = {
  role: "Member",
  organization: "TICC (Thapar Institute Counselling Cell)",
  contributions: [
    "Organized weekly awareness sessions on mental health topics relevant to student life.",
    "Contributed to campus-wide awareness initiatives.",
    "Collaborated with the organizing team to execute a 3-day cultural event.",
    "Supported logistics, event planning, and session management.",
  ],
};

export const contactIntro =
  "I'm currently exploring opportunities in software engineering, backend engineering, AI/ML, and data engineering. Feel free to reach out if you'd like to discuss an opportunity or connect.";

export const contact: ContactInfo = {
  email: "asmigoyal30@gmail.com",
  phone: "+91 78144-28453",
  phoneHref: "tel:+917814428453",
  linkedin: "https://www.linkedin.com/in/asmi-goyal-448138243",
  github: "https://github.com/Asmi3005",
};
