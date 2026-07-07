import React from "react";
import { useNavigate, Link } from "react-router-dom";

function TechBadge({ icon, label, brandColor, style }) {
  return (
    <div className="tech-badge" style={style}>
      <img src={icon} alt={label} className="tech-badge-icon" />
      <span className="tech-badge-label" style={{ color: brandColor }}>
        {label}
      </span>
    </div>
  );
}

function Home() {
  const navigate = useNavigate();

  const leftBadges = [
    {
      label: "React",
      brandColor: "#61DAFB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      style: { right: "20px", top: "20px" },
    },
    {
      label: "Figma",
      brandColor: "#F24E1E",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      style: { right: "110px", top: "65px" },
    },
    {
      label: "Flutter",
      brandColor: "#54C5F8",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      style: { right: "25px", top: "130px" },
    },
    {
      label: "Python",
      brandColor: "#FFD43B",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      style: { right: "105px", top: "185px" },
    },
    {
      label: "TypeScript",
      brandColor: "#3178C6",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      style: { right: "140px", top: "240px" },
    },
  ];

  const rightBadges = [
    {
      label: "Next.js",
      brandColor: "#FFFFFF",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      style: { left: "20px", top: "20px" },
    },
    {
      label: "Git",
      brandColor: "#F05032",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      style: { left: "110px", top: "65px" },
    },
    {
      label: "JavaScript",
      brandColor: "#F7DF1E",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      style: { left: "25px", top: "130px" },
    },
    {
      label: "Firebase",
      brandColor: "#FFA000",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      style: { left: "105px", top: "185px" },
    },
    {
      label: "Node.js",
      brandColor: "#83CD29",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      style: { left: "140px", top: "240px" },
    },
  ];

  const skills = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      usage: "Building dynamic, component-driven web frontends.",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      usage: "Production-grade web apps with SSR and routing.",
    },
    {
      name: "Flutter",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      usage: "Cross-platform mobile apps for iOS and Android.",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      usage: "Backend development, AI integration and ML.",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      usage: "Type-safe JavaScript for scalable codebases.",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      usage: "Core scripting for all web interactivity.",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      usage: "Scalable backend APIs and server-side logic.",
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      usage: "Designing UI systems and product interfaces.",
    },
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      usage: "Auth, real-time databases and cloud functions.",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      usage: "Version control across every project.",
    },
  ];

  return (
    <div>
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-photo-zone">
            <div className="hero-badge-panel hero-badge-panel-left">
              {leftBadges.map((badge) => (
                <TechBadge key={badge.label} {...badge} />
              ))}
            </div>
            <div className="hero-photo-wrapper">
              <img src="/profile.png" alt="Raphael Daveal Eferire" className="hero-photo" />
            </div>
            <div className="hero-badge-panel hero-badge-panel-right">
              {rightBadges.map((badge) => (
                <TechBadge key={badge.label} {...badge} />
              ))}
            </div>
          </div>
          <h1 className="hero-name">Raphael Daveal Eferire</h1>
          <p className="hero-title">Full-Stack Software Engineer</p>
          <p className="hero-tagline">
            I am a software engineer and product builder based in Lagos, Nigeria,
            working remotely with founders and teams across the globe. I design in
            Figma, build in React, Next.js, Flutter, and Python, and integrate AI
            to make products intelligent. I take products from a blank canvas to a
            fully deployed, live application without handing off between teams.
            Every product I ship is built with a clear understanding of who it is
            for, what problem it solves, and what business outcome it needs to
            deliver. I do not just write code. I think like a founder and build
            like an engineer.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => navigate("/projects")}>
              View My Work
            </button>
            <Link to="/contact" className="btn-secondary">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      <div className="section-fade-divider" />

      {/* ABOUT */}
      <div className="page">
        <p className="section-label">About Me</p>
        <h2 className="section-title">End-to-end engineering, by design.</h2>
        <div className="section-divider"></div>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I am a software engineer who builds complete digital products from
              the ground up. My work spans web, mobile, and AI engineering. I use
              React and Next.js for web, Flutter for mobile, and Python with LLM
              APIs to make products intelligent.
            </p>
            <p>
              I co-founded WindVeal Technologies where I lead all engineering,
              taking products from concept to deployed application. I design in
              Figma first, which means I can own the full product lifecycle without
              handing off between teams.
            </p>
            <p>
              I do not just write code. I think about why something is being built,
              who it is for, and what business outcome it needs to deliver.
              Engineers who think that way are rare, and it is the standard I hold
              myself to on every project.
            </p>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Building Products</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">3</div>
              <div className="stat-label">Products Shipped at WindVeal</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">4.0</div>
              <div className="stat-label">CGPA at BYU-Idaho</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">3</div>
              <div className="stat-label">Engineering Domains</div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-fade-divider" />

      {/* PROJECTS PREVIEW */}
      <div className="page">
        <p className="section-label">Selected Work</p>
        <h2 className="section-title">Things I have built.</h2>
        <div className="section-divider"></div>
        <div className="dashboard-cards">
          {[
            {
              title: "AI-Powered Assistant Platform",
              tech: "React · Python · LLM APIs",
              desc: "A fully deployed AI assistant platform built from scratch with a React frontend and Python backend.",
            },
            {
              title: "Fintech Payments App",
              tech: "Flutter · Python",
              desc: "A mobile-first payments application handling real transactions and user authentication.",
            },
            {
              title: "Car-to-Mechanic Marketplace",
              tech: "React · Next.js · Python",
              desc: "A marketplace connecting car owners with verified mechanics, built end to end.",
            },
          ].map((project) => (
            <div className="dashboard-card" key={project.title}>
              <div className="dashboard-card-inner">
                <div className="dashboard-card-content">
                  <p className="dashboard-card-eyebrow">{project.tech}</p>
                  <h3 className="dashboard-card-title">{project.title}</h3>
                  <p className="dashboard-card-desc">{project.desc}</p>
                </div>
                <div className="dashboard-card-footer">
                  <Link to="/projects" className="dashboard-card-link">
                    View Project →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="section-cta">
          <Link to="/projects" className="btn-secondary">See All Projects</Link>
        </div>
      </div>

      <div className="section-fade-divider" />

      {/* SKILLS PREVIEW */}
      <div className="page">
        <p className="section-label">Capabilities</p>
        <h2 className="section-title">What I work with.</h2>
        <div className="section-divider"></div>
        <div className="skills-detail-grid">
          {skills.map((skill) => (
            <div className="skill-detail-card" key={skill.name}>
              <div className="skill-detail-card-inner">
                <div className="skill-detail-logo-wrapper">
                  <img src={skill.icon} alt={skill.name} className="skill-detail-logo" />
                </div>
                <h3 className="skill-detail-name">{skill.name}</h3>
                <p className="skill-detail-usage">{skill.usage}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="section-cta">
          <Link to="/skills" className="btn-secondary">See Full Skills</Link>
        </div>
      </div>

      <div className="section-fade-divider" />

      {/* CONTACT CTA */}
      <div className="contact-cta-section">
        <p className="section-label">Let's Talk</p>
        <h2 className="contact-cta-title">Got a product to build?</h2>
        <p className="contact-cta-desc">
          Whether you have a product idea, a team that needs an engineering partner,
          or just want to connect, I am open to conversations that lead somewhere
          meaningful.
        </p>
        <Link to="/contact" className="btn-primary">Get In Touch</Link>
      </div>
    </div>
  );
}

export default Home;