import React from "react";

// Individual skill card with logo, name and usage description
function SkillCard({ icon, name, usage }) {
  return (
    <div className="skill-detail-card">
      <div className="skill-detail-card-inner">
        <div className="skill-detail-logo-wrapper">
          <img src={icon} alt={name} className="skill-detail-logo" />
        </div>
        <h3 className="skill-detail-name">{name}</h3>
        <p className="skill-detail-usage">{usage}</p>
      </div>
    </div>
  );
}

function Skills() {
  const skills = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      usage: "Building dynamic, component-driven web frontends and single-page applications.",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      usage: "Building production-grade web applications with server-side rendering and routing.",
    },
    {
      name: "Flutter",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      usage: "Building cross-platform mobile applications for iOS and Android from a single codebase.",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      usage: "Backend development, AI integration, machine learning, and LLM-powered product features.",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      usage: "Writing type-safe JavaScript for scalable, maintainable frontend codebases.",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      usage: "Core scripting language for all web interactivity, logic, and frontend development.",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      usage: "Building fast, scalable backend APIs and server-side logic for web applications.",
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      usage: "Designing wireframes, UI systems, and complete product interfaces before building.",
    },
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      usage: "Authentication, real-time databases, and cloud functions for rapid product development.",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      usage: "Version control, collaboration, and managing all codebases across every project.",
    },
  ];

  return (
    <div className="page">
      <p className="section-label">Capabilities</p>
      <h1 className="section-title">What I Work With</h1>
      <div className="section-divider"></div>

      <div className="skills-detail-grid">
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  );
}

export default Skills;