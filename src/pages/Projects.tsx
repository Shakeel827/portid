import React from 'react';
import './Projects.css';
import { FaReact, FaNodeJs, FaDatabase, FaPython, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiFigma } from 'react-icons/si';

const techIcons: { [key: string]: JSX.Element } = {
  "HTML": <FaHtml5 />,
  "CSS": <FaCss3Alt />,
  "JavaScript": <FaJs />,
  "React": <FaReact />,
  "Node.js": <FaNodeJs />,
  "Python": <FaPython />,
  "AI": <FaPython />,
  "Figma": <SiFigma />,
  "UI/UX": <SiFigma />,
  "GitHub": <FaGithub />,
  "Security": <FaDatabase />,
  "Web Development": <FaReact />,
  "Machine Learning": <FaPython />,
};

const projects = [
  {
    title: "PandascanFlow Web Vulnerability Scanner",
    description: "Real-time security insights with continuous website vulnerability scanning for XSS, SQLi, and open ports. Includes subdomain enumeration, directory scanning, GeoIP lookup, and AI-powered reporting.",
    techUsed: "Python, Security, AI, Web Development",
    liveLink: "https://pandascanpro-4.onrender.com",
    githubLink: "https://github.com/Shakeel827",
    image: { 
      url: "https://picsum.photos/seed/pandascan/400/300",
      logo: "/64515607-b228-4347-b948-896ce770e8d3.svg",
      showLogo: true
    }
  },
  {
    title: "ResumeFlow AI Resume & Portfolio Builder",
    description: "AI-powered resume creation that automatically generates ATS-friendly resumes and personalized portfolios using LinkedIn or form-based inputs.",
    techUsed: "React, Node.js, AI, JavaScript",
    liveLink: "https://resumeflow.pandascanpros.in",
    githubLink: "https://github.com/Shakeel827",
    image: { url: "https://picsum.photos/seed/resumeflow/400/300" }
  },
  {
    title: "AI-Powered Knowledge Assistant",
    description: "Intelligent AI assistant that solves doubts and provides insightful answers with advanced natural language processing capabilities.",
    techUsed: "Python, AI, Machine Learning, JavaScript",
    liveLink: "https://pandanexus.pandascanpros.in",
    githubLink: "https://github.com/Shakeel827",
    image: { url: "https://picsum.photos/seed/aiassistant/400/300" }
  },
  {
    title: "Patient Diary App",
    description: "A case study of the Patient Diary App designed for healthcare professionals to manage patient records and appointments.",
    techUsed: "UI/UX, Figma, React",
    caseStudyLink: "https://www.behance.net/shakeelsk1",
    image: { url: "https://picsum.photos/seed/patientdiary/400/300" }
  },
  {
    title: "Finsafe Platform",
    description: "A dynamic platform offering financial education courses to enhance financial literacy and investment skills.",
    techUsed: "React, Node.js, UI/UX, JavaScript",
    image: { url: "https://picsum.photos/seed/finsafe/400/300" }
  },
  {
    title: "Mobile Payment Bank App",
    description: "Designed a mobile app for HICB, a private Indian bank, allowing customers to access accounts and complete transactions securely.",
    techUsed: "UI/UX, Figma, React",
    image: { url: "https://picsum.photos/seed/bankapp/400/300" }
  }
];

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
          >
            <div className="project-image-container">
              <img src={project.image.url} alt={project.title} className="project-image" />
              {project.image.showLogo && project.image.logo && (
                <img 
                  src={project.image.logo} 
                  alt={`${project.title} Logo`} 
                  className="project-logo"
                />
              )}
            </div>
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-used">
                {project.techUsed.split(', ').map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {techIcons[tech] || "🔧"} {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Code
                  </a>
                )}
                {project.caseStudyLink && (
                  <a href={project.caseStudyLink} target="_blank" rel="noopener noreferrer">
                    <SiFigma /> Case Study
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
