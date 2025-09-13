import React from 'react';
import './Reading.css';

const Reading: React.FC = () => {
  return (
    <div className="reading-container">
      <h2 className="reading-title">🚀 ResumeFlow Updates</h2>
      <p className="reading-intro">Latest developments and features in my projects.</p>
      <div className="update-container">
        <div className="update-card">
          <h3>🚀 Exciting update on ResumeFlow!</h3>
          <p>We've just rolled out two major features – you can now import your existing resume directly into the platform, and we've added brand-new, high-quality templates to give your resume a fresh look. Plus, we've fixed the UI and AI-related issues for a smoother and smarter experience. Whether you're creating from scratch or updating an old resume, ResumeFlow is now more powerful than ever!</p>
          <div className="website-link">
            <p>Website Link 🖇️</p>
            <a href="https://lnkd.in/gYbgfDnX" target="_blank" rel="noopener noreferrer">
              https://lnkd.in/gYbgfDnX
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reading;
