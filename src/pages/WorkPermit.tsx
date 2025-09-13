import React from 'react';
import './WorkPermit.css';

const WorkPermit: React.FC = () => {
  const workPermitData = {
    visaStatus: "Student Visa",
    expiryDate: new Date('2025-12-31'),
    summary: "Currently pursuing Bachelor of Technology in Cyber Security",
    additionalInfo: "Actively seeking opportunities in cybersecurity and web development fields."
  };

  return (
    <div className="work-permit-container">
      <div className="work-permit-card">
        <h2 className="work-permit-headline">🎓 Education Status</h2>
        <p className="work-permit-summary">
          “I am a proud citizen of India 🇮🇳, with a Bachelor's degree in Cyber Security (completed in 2025). 🛡️ I am open to working all across India, building valuable experience and growing my career in cybersecurity and web development.. 🌟
        </p>
        <p className="additional-info">{workPermitData.additionalInfo}</p>
      </div>
    </div>
  );
};

export default WorkPermit;
