import React from "react";
import { Link } from "react-router-dom";

// Individual project card with gradient image placeholder
function ProjectCard({ id, title, tech, desc, gradient }) {
  return (
    <div className="project-detail-card">
      {/* Gradient image placeholder */}
      <div className="project-card-image" style={{ background: gradient }}>
        <div className="project-card-image-overlay">
          <span className="project-card-tech-badge">{tech}</span>
        </div>
      </div>
      <div className="project-card-body">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-desc">{desc}</p>
        <Link to={`/projects/${id}`} className="project-card-see-more">
          See more →
        </Link>
      </div>
    </div>
  );
}

function Projects() {
  const projects = [
    {
      id: "ai-assistant-platform",
      title: "AI-Powered Assistant Platform",
      tech: "React · Python · LLM APIs",
      desc: "A fully deployed AI assistant platform built from scratch. Integrates LLM APIs for intelligent responses, with a React frontend and Python backend handling all logic and data flow.",
      gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    },
    {
      id: "fintech-payments-app",
      title: "Fintech Payments App",
      tech: "Flutter · Python",
      desc: "A mobile-first payments application built with Flutter for cross-platform support. Handles real transactions, user authentication, and payment history with a clean and intuitive UI.",
      gradient: "linear-gradient(135deg, #0d2137 0%, #1a3a5c 50%, #0d4f3c 100%)",
    },
    {
      id: "car-mechanic-marketplace",
      title: "Car-to-Mechanic Marketplace",
      tech: "React · Next.js · Python",
      desc: "A marketplace connecting car owners with verified mechanics. Built end to end from system architecture and database design through to frontend development and full deployment.",
      gradient: "linear-gradient(135deg, #2d1b00 0%, #4a2e00 50%, #1a1200 100%)",
    },
    {
      id: "recur-scan",
      title: "Recur Scan",
      tech: "Python · Machine Learning",
      desc: "A machine learning system built to detect recurring financial transactions using pattern recognition and classification models. Developed during my internship at Pioneer AI Academy.",
      gradient: "linear-gradient(135deg, #1a0d2e 0%, #2d1b4e 50%, #0d1a2e 100%)",
    },
  ];

  return (
    <div className="page">
      <p className="section-label">Portfolio</p>
      <h1 className="section-title">Selected Work</h1>
      <div className="section-divider"></div>

      <div className="projects-detail-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;