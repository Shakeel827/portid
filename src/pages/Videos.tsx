import React from 'react';
import './Videos.css';

const Videos: React.FC = () => {
  return (
    <div className="videos-page">
      <div className="quote">
        <p>"Innovation through technology and creativity." 🎬</p>
      </div>

      <div className="video-section">
        <h3>Featured Video</h3>
        <div className="video-container">
          <video 
            controls 
            width="100%" 
            height="400"
            poster="https://picsum.photos/800/400"
          >
            <source src={`${process.env.PUBLIC_URL}/shakeel.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-details">
            <h4>Shakeel's Portfolio Showcase</h4>
            <p>A comprehensive overview of my projects and technical expertise</p>
          </div>
        </div>
      </div>

      <div className="projects-highlight">
        <h3>Project Highlights</h3>
        <div className="highlight-cards">
          <div className="highlight-card">
            <h4>🚀 ResumeFlow</h4>
            <p>AI-powered resume and portfolio builder with smart optimization features</p>
          </div>
          <div className="highlight-card">
            <h4>🔒 PandascanFlow</h4>
            <p>Web vulnerability scanner with real-time security insights</p>
          </div>
          <div className="highlight-card">
            <h4>🤖 AI Knowledge Assistant</h4>
            <p>Intelligent assistant with advanced natural language processing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;