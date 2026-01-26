export interface BlogPost {
  slug: string
  title: string
  subtitle: string
  excerpt: string
  category: string
  categoryColor: "violet" | "indigo" | "emerald" | "rose" | "amber"
  readTime: string
  date: string
  featured: boolean
}

export interface Author {
  name: string
  role: string
  avatar?: string
  twitter?: string
  linkedin?: string
  bio?: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "coding-agent-security",
    title: "The Growing Attack Surface: Security Incidents in AI Coding Agents",
    subtitle: "Why AI-Generated Code Is the Next Big Security Challenge",
    excerpt: "From Amazon Q exploits to Cursor crypto drains, AI coding agents are becoming a prime attack vector. A comprehensive look at real-world incidents and what they mean for your security posture.",
    category: "Security Analysis",
    categoryColor: "emerald",
    readTime: "12 min read",
    date: "January 26, 2026",
    featured: true,
  },
  {
    slug: "detecting-deepfakes",
    title: "The Spectral Lie: Detecting Deepfakes",
    subtitle: "Why Your Ears (and Your Text Filters) Can't Catch AI-Generated Voices",
    excerpt: "The auditory landscape of digital trust has undergone a seismic shift. Learn why transcription-based security misses voice cloning attacks and how spectral forensics provides the solution.",
    category: "Technical Research",
    categoryColor: "rose",
    readTime: "15 min read",
    date: "January 18, 2026",
    featured: false,
  },
  {
    slug: "voice-ai-security",
    title: "The Anatomy of Voice AI Security",
    subtitle: "Why Text-Based Guardrails Aren't Enough",
    excerpt: "Voice AI is experiencing explosive growth, but security tools built for text don't work for voice. Learn about the threat landscape and how to protect voice agents.",
    category: "Engineering",
    categoryColor: "violet",
    readTime: "8 min read",
    date: "January 18, 2026",
    featured: false,
  },
]

export const authors: Record<string, Author> = {
  research: {
    name: "ProofLayer Research Team",
    role: "Security Research",
    bio: "Our research team focuses on advancing the frontier of AI security, from audio forensics and deepfake detection to code generation safety.",
    twitter: "prooflayer",
    linkedin: "prooflayer",
  },
  engineering: {
    name: "ProofLayer Engineering",
    role: "Platform Engineering",
    bio: "Building the infrastructure that powers secure AI agents at scale.",
    twitter: "prooflayer",
    linkedin: "prooflayer",
  },
}
