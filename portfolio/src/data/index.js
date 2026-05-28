// ─── PERSONAL ────────────────────────────────────────────────
export const personal = {
  name: 'Rishit Singh',
  title: 'AI/ML Engineer + Full Stack Developer',
  description:
    'Building AI-powered tools for education, productivity and health.\nB.Tech IT @ AKGEC · Member - Big Data Centre of Excellence · Full-time',
  email: 'rishitinc@gmail.com',
  github: 'https://github.com/Rishit003',
  linkedin: 'https://www.linkedin.com/in/rishit003/',
  resume: '/resume.pdf',
}

// ─── TYPEWRITER PHRASES ───────────────────────────────────────
export const typedPhrases = [
  'git clone https://github.com/Rishit003',
  'python train.py --model transformer',
  'npm run build && vercel deploy',
  'currently: open to internships',
]

// ─── SKILLS ──────────────────────────────────────────────────
export const skillGroups = [
  {
    title: 'AI / ML',
    tags: ['Python', 'PyTorch', 'TensorFlow', 'scikit-learn', 'LangChain', 'OpenCV', 'HuggingFace'],
  },
  {
    title: 'Full Stack',
    tags: ['React', 'Node.js', 'FastAPI', 'Next.js', 'TypeScript', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Infrastructure',
    tags: ['Docker', 'Git', 'Vercel', 'AWS', 'Linux', 'REST APIs'],
  },
  {
    title: 'Concepts',
    tags: ['Deep Learning', 'NLP', 'RAG', 'Computer Vision', 'DSA', 'System Design'],
  },
]

// ─── PROJECTS ────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    name: 'EduBot — AI Tutor for Students',
    description:
      'RAG-based tutoring system that answers curriculum questions using course PDFs. Reduced student doubt-resolution time by 3×.',
    stack: ['Python', 'LangChain', 'FastAPI', 'React', 'Pinecone'],
    github: '#',
    demo: '#',
    featured: true,
    image: null, // replace with: '/screenshots/edubot.png'
  },
  {
    id: 2,
    name: 'HealthLens — Symptom Analyzer',
    description:
      'NLP model trained on medical Q&A datasets to triage symptoms and suggest relevant specialists. Deployed with a mobile-first UI.',
    stack: ['PyTorch', 'HuggingFace', 'Next.js', 'MongoDB'],
    github: '#',
    demo: '#',
    featured: false,
    image: null,
  },
  {
    id: 3,
    name: 'FocusFlow — Productivity OS',
    description:
      'AI-powered Pomodoro + task manager with smart scheduling. Predicts your peak focus hours using biometric patterns from past sessions.',
    stack: ['React', 'Node.js', 'scikit-learn', 'PostgreSQL'],
    github: '#',
    demo: '#',
    featured: false,
    image: null,
  },
  {
    id: 4,
    name: 'NoteAI — Smart Study Notes',
    description:
      'Auto-generates flashcards, summaries and quizzes from lecture slides/PDFs using LLMs. Integrated spaced repetition scheduler.',
    stack: ['OpenAI API', 'LangChain', 'React', 'Supabase'],
    github: '#',
    demo: '#',
    featured: false,
    image: null,
  },
]

// ─── TIMELINE ────────────────────────────────────────────────
export const timeline = [
  {
    date: '2024 — present',
    tag: 'internship',
    title: 'Software / AI Intern — [Company Name]',
    description:
      'Working on [domain]. Shipping real features used by [X] users. Built [module] that improved [metric] by [Y%].',
    active: true,
  },
  {
    date: '2023',
    tag: 'achievement',
    title: 'Hackathon Finalist — [Hackathon Name]',
    description:
      'Top 10 out of 200+ teams. Built [project] in 24 hours solving [problem statement].',
    active: false,
  },
  {
    date: 'Novemember 2024 — present',
    tag: 'society',
    title: 'Member — Big Data Centre of Excellence · Full-time',
    description:
      'Conducted workshops on ML fundamentals for 100+ students. Led the AI track for the annual hackathon. Mentored juniors on open-source contributions.',
    active: true,
  },
  {
    date: 'October 2023 — present',
    tag: 'education',
    title: 'B.Tech Information Technology — AKGEC Ghaziabad',
    description:
      '3rd year. Focus on AI/ML electives. Relevant coursework: ML, DBMS, OS, DSA, Computer Networks.',
    active: false,
  },
  
]
