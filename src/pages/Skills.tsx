import React from 'react';
import './Skills.css';
import { FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaHtml5, FaCss3Alt, FaJs, FaPython } from 'react-icons/fa';
import { SiFigma, SiMicrosoftexcel, SiMicrosoft } from 'react-icons/si';

const skillsData = [
  {
    category: "Frontend Development",
    skills: [
      { name: "AI Using HTML", icon: <FaHtml5 />, description: "Semantic markup and web structure" },
      { name: "AI Using CSS", icon: <FaCss3Alt />, description: "Styling and responsive design" },
      { name: "AI Using JavaScript", icon: <FaJs />, description: "Interactive web functionality" },
      { name: "AI Using React", icon: <FaReact />, description: "Modern UI component library" },
    ]
  },
  {
    category: "Backend & DevOps",
    skills: [
      { name: "AI Using Node.js", icon: <FaNodeJs />, description: "Server-side JavaScript runtime" },
      { name: "AI Using Python", icon: <FaPython />, description: "Versatile programming language" },
      { name: "AI Using Git", icon: <FaGitAlt />, description: "Version control system" },
      { name: "AI Using Docker", icon: <FaDocker />, description: "Containerization platform" },
    ]
  },
  {
    category: "Cybersecurity",
    skills: [
      { name: "Network Security", icon: <FaAws />, description: "IDS and network monitoring" },
      { name: "Vulnerability Assessment", icon: <FaDocker />, description: "Web security scanning" },
      { name: "Ethical Hacking", icon: <FaPython />, description: "Penetration testing" },
      { name: "Nmap", icon: <FaGitAlt />, description: "Network discovery tool" },
    ]
  },
  {
    category: "Design & Tools",
    skills: [
      { name: "AI Using UI/UX Design", icon: <SiFigma />, description: "User interface design" },
      { name: "AI Using Figma", icon: <SiFigma />, description: "Design and prototyping tool" },
      { name: "AI Using Excel", icon: <SiMicrosoftexcel />, description: "Data analysis and reporting" },
      { name: "AI Using MS Office", icon: <SiMicrosoft />, description: "Office productivity suite" },
    ]
  },
  {
    category: "AI & Automation",
    skills: [
      { name: "AI Automation", icon: <FaPython />, description: "Intelligent process automation" },
      { name: "Prompt Engineering", icon: <FaJs />, description: "AI model optimization" },
      { name: "Natural Language Processing", icon: <FaPython />, description: "Text processing and analysis" },
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <div className="skills-container">
      {skillsData.map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category.category}</h3>
          <div className="skills-grid">
            {category.skills.map((skill, idx) => (
              <div key={idx} className="skill-card">
                <div className="icon">{skill.icon}</div>
                <h3 className="skill-name">
                  {skill.name.split('').map((letter, i) => (
                    <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                      {letter}
                    </span>
                  ))}
                </h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;