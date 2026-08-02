import type { ComponentType, SVGProps } from "react";
import {
  Mail,
  Send,
  Code2,
  Wrench,
  Layers,
  Globe,
  Users,
  ArrowLeftRight,
  Brain,
  LineChart,
  Database,
} from "lucide-react";


type IconType = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

export interface WorkExperience {
  title: string;
  company: string;
  period: string;
  points: string[];
}

export interface Project {
  title: string;
  description: string[];
  githubUrl: string;
  icon: IconType;
  isPrivate?: boolean;
}

export interface SkillCategory {
  name: string;
  icon: IconType;
  skills: string[];
}

export const profile = {
  name: "Sahand Farshian",
  title: "Software Developer & Industrial Engineer",
  bio: "I am not your typical Software Engineer. I bridge the gap between overarching systems thinking and deep technical execution. Drawing on my foundation in industrial engineering, I architect robust enterprise Java backends and design intelligent multi-agent AI workflows. I am proficient in Python, Java, and complex database management (Oracle, MySQL, MongoDB). From mathematical optimization to machine learning, I am driven by the transformative power of data to build solutions that scale.",
  email: "sfarshian3@gmail.com",
  telegram: "@sfarshian",
  github: "github.com/sfarshian",
  linkedin: "linkedin.com/in/sahand-farshian",
} as const;

export const workExperience: WorkExperience[] = [
  {
    title: "Software Integration Engineer (Contract)",
    company: "Savola Group",
    period: "Sep 2024 – Present",
    points: [
      "Engineered middleware integrating Oracle E-Business Suite with the governmental National Trade Single Window (NTSW) platform.",
      "Built a lightweight REST-based integration system, effectively eliminating manual shipment registration.",
      "Designed enterprise data pipelines to ensure strict regulatory compliance and robust transactional integrity.",
    ],
  },
  {
    title: "Planning Trainee",
    company: "Savola Group",
    period: "Jun 2024 – Sep 2024",
    points: [
      "Worked within the Planning Department to gain hands-on experience in production planning, demand forecasting, Master Production Scheduling (MPS), and material programming.",
      "Analyzed planning strategies for high lead-time products and evaluated inventory optimization techniques.",
      "Evaluated production-line optimization and operational efficiency using Industrial Engineering principles, enabling software solutions aligned with real-world business processes.",
    ],
  },
  {
    title: "Java / Spring Boot Developer",
    company: "Faraboom Open Banking",
    period: "Jun 2022 – Mar 2024",
    points: [
      "Architected and scaled RESTful backend services using Java and Spring Boot, optimizing database access and memory management for low-latency banking transactions.",
      "Engineered integration bridges that exposed legacy banking systems through secure, modern REST APIs for financial institution partners.",
      "Built a real-time observability platform using Grafana and Prometheus with webhook-based SMS notifications for proactive incident response.",
      "Produced architectural documentation, UML specifications, and activity diagrams to improve system maintainability and knowledge transfer.",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    icon: Code2,
    skills: ["Java", "Python", "SQL"],
  },
  {
    name: "Backend",
    icon: Layers, // or Server
    skills: [
      "Spring Boot",
      "Spring Security",
      "Hibernate",
      "REST",
      "SOAP",
      "JWT",
      "OAuth2",
      "Java 21 Virtual Threads"
    ],
  },
  {
    name: "AI",
    icon: Brain, // Make sure to import an appropriate icon like Brain or Bot
    skills: ["FastAPI", "Pandas", "NumPy", "AI Agents", "LLM Applications"],
  },
  {
    name: "Optimization",
    icon: LineChart, // LineChart, Activity, or Briefcase
    skills: [
      "Pyomo",
      "PuLP",
      "amplpy",
      "Operations Research",
      "Production Planning",
      "MADM"
    ],
  },
  {
    name: "Databases",
    icon: Database, // Make sure to import a Database icon
    skills: ["Oracle", "MySQL", "MongoDB", "SQLite"],
  },
  {
    name: "Tools",
    icon: Wrench,
    skills: ["Git", "Docker", "Maven", "Grafana", "Prometheus", "UML"],
  },
];
export const education = {
  degree: "B.Sc. in Industrial Engineering",
  school: "Kharazmi University",
  location: "Tehran, Iran",
  period: "2020 – 2025",
} as const;

export const projects: Project[] = [
  {
    title: "Oracle ERP & BazaarGah Integration Middleware",
    description: [
      "Architected a Spring Boot middleware platform automating workflows between the BazaarGah portal and Oracle ERP, eliminating manual data entry.",
      "Modernized legacy SOAP services by wrapping them behind lightweight, fast REST APIs.",
      "Leveraged Java 21 Virtual Threads for high-throughput concurrent processing.",
      "Built a robust transactional persistence layer with Hibernate to guarantee cross-system data integrity."
    ],
    githubUrl: "", // Private enterprise project
    icon: ArrowLeftRight,
    isPrivate: true,
  },
  {
    title: "Multi-Attribute Decision Making (MADM)",
    description: [
      "Engineered a modular Python decision-support library implementing core algorithms including TOPSIS, SAW, ELECTRE I, and permutation methods.",
      "Utilized Pandas and NumPy for optimized matrix operations and automated data normalization.",
      "Created a scalable framework to evaluate and rank complex industrial engineering alternatives to streamline data-driven decision-making."
    ],
    githubUrl: "https://github.com/sfarshian/MADM",
    icon: Layers,
  },
  {
    title: "User Management Backend",
    description: [
      "Developed a secure, stateless REST API using Spring Boot, integrating Google OAuth2 and JWT for robust identity verification and session management.",
      "Implemented Aspect-Oriented Programming (AOP) for centralized request logging and Role-Based Access Control (RBAC).",
      "Designed scalable data persistence utilizing Spring Data JPA and Hibernate to manage user profiles and authorization states."
    ],
    githubUrl: "https://github.com/sfarshian/UserManagement",
    icon: Code2,
  },
];

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/sfarshian",
    icon: Globe,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/sahand-farshian",
    icon: Users,
  },
  {
    label: "Email",
    href: "mailto:sfarshian3@gmail.com",
    icon: Mail,
  },
  {
    label: "Telegram",
    href: "https://t.me/sfarshian",
    icon: Send,
  },
] as const;

export const navSections = [
  { id: "hero", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;
