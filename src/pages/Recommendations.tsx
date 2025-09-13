import React from 'react';
import './Recommendations.css';

const Recommendations: React.FC = () => {
  return (
    <div className='timeline-container'>
      <div className="recommendation-card">
        <div className="recommendation-header">
          <img src="https://picsum.photos/seed/professional/150/150" alt="Professional Reference" className="profile-pic" />
          <div>
            <h3>Professional Reference</h3>
            <p>Industry Professional</p>
            <p className="date">2024</p>
          </div>
        </div>
        <div className="recommendation-body">
          <p>✨ "Shaik Shakeel is a dedicated and talented cybersecurity professional with exceptional technical skills. During our collaboration, he demonstrated strong expertise in web vulnerability scanning, network security, and AI-powered solutions."</p>
          <p>💼 "His work on <strong>PandascanFlow</strong> and <strong>ResumeFlow</strong> showcases his ability to combine security knowledge with practical application development. Shakeel's attention to detail and innovative approach to problem-solving make him a valuable asset to any team."</p>
          <p>🌟 "I highly recommend Shakeel for any cybersecurity or web development role. His passion for technology and commitment to excellence are evident in all his projects."</p>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;