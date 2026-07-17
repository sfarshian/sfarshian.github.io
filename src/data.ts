import type { ComponentType, SVGProps } from "react";
import {
  Mail,
  Phone,
  Briefcase,
  Code2,
  Wrench,
  Layers,
  Globe,
  Users,
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
  description: string;
  icon: IconType;
}

export interface SkillCategory {
  name: string;
  icon: IconType;
  skills: string[];
}

export const profile = {
  name: "Sahand Farshian",
  title: "Software Developer & Industrial Engineer",
  bio: "I bridge the gap between systems thinking and technical innovation. I am proficient in Python, Java, and databases such as MySQL, Oracle, and MongoDB. I am particularly drawn to mathematical optimisation, machine learning, and the transformative power of data.",
  email: "sfarshian3@gmail.com",
  phone: "+98 9100487780",
  github: "github.com/sfarshian",
  linkedin: "linkedin.com/in/sahand-farshian",
} as const;

export const workExperience: WorkExperience[] = [
  {
    title: "Java / Spring Boot Developer",
    company: "Faraboom Open Banking Solutions",
    period: "Jun 2022 – Mar 2024",
    points: [
      "Designed, enhanced, and maintained banking APIs serving production traffic",
      "Developed a real-time monitoring and alerting system using Grafana and Prometheus",
      "Created comprehensive documentation of legacy systems utilizing UML and Activity Diagrams",
    ],
  },
  {
    title: "Planning Trainee",
    company: "Savola Behshahr Company",
    period: "Jun 2024 – Sep 2024",
    points: [
      "Designed and implemented a system to integrate company shipment data with the NTSW API",
      "Gained foundational knowledge in material resource planning (MRP)",
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
    name: "Core Frameworks",
    icon: Layers,
    skills: ["Spring Boot", "FastAPI", "Hibernate"],
  },
  {
    name: "Tools & Databases",
    icon: Wrench,
    skills: ["Oracle", "MongoDB", "Docker", "Prometheus", "Grafana", "Maven"],
  },
  {
    name: "Engineering Concepts",
    icon: Briefcase,
    skills: ["RESTful APIs", "Microservices", "OAuth2", "JWT Authentication", "AOP"],
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
    title: "Multi-Attribute Decision Making (MADM)",
    description:
      "Designed and implemented a Python-based framework for solving multi-attribute decision-making problems. Engineered modular, extensible components for flexible decision analysis.",
    icon: Layers,
  },
  {
    title: "User Management Backend",
    description:
      "Developed a robust backend system using Java and Spring Boot. Employed Aspect-Oriented Programming (AOP) and custom annotations to modularize cross-cutting concerns.",
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
    label: "Phone",
    href: "tel:+989100487780",
    icon: Phone,
  },
] as const;

export const navSections = [
  { id: "hero", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "arsenal", label: "Arsenal" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;
