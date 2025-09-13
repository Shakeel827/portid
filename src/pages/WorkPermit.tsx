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
          I'm currently a <strong>{workPermitData.visaStatus}</strong> holder 🛂, pursuing my Bachelor's degree in Cyber Security! 🇮🇳 My studies continue until <strong>{workPermitData.expiryDate.toLocaleDateString()}</strong> 📅, giving me the opportunity to build valuable experience and grow my career in cybersecurity and web development. 🌟
        </p>
        <p className="additional-info">{workPermitData.additionalInfo}</p>
      </div>
    </div>
  );
};

export default WorkPermit;