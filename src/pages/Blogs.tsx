import React from 'react';
import './Blogs.css';
import { FaMedium, FaDev } from 'react-icons/fa';

const updates = [
  {
    title: "🚀 ResumeFlow Major Update",
    platform: "Project Update",
    icon: <FaMedium />,
    link: "https://lnkd.in/gYbgfDnX",
    description: "Exciting update on ResumeFlow! We've just rolled out two major features – you can now import your existing resume directly into the platform, and we've added brand-new, high-quality templates to give your resume a fresh look. Plus, we've fixed the UI and AI-related issues for a smoother and smarter experience. Whether you're creating from scratch or updating an old resume, ResumeFlow is now more powerful than ever!",
  },
];

const Blogs: React.FC = () => {
  return (
    <div className="blogs-container">
      <h2 className="blogs-title">🚀 Project Updates</h2>
      <p className="blogs-intro">Latest updates and developments on my projects.</p>
      <div className="blogs-grid">
        {updates.map((update, index) => (
          <a href={update.link} key={index} target="_blank" rel="noopener noreferrer" className="blog-card" style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}>
            <div className="blog-icon animated-icon">{update.icon}</div>
            <div className="blog-info animated-text">
              <h3 className="blog-title">{update.title}</h3>
              <p className="blog-description">{update.description}</p>
              <span className="blog-platform">{update.platform}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
