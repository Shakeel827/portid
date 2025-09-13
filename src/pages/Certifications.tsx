import React from 'react';
import './Certifications.css';
import { FaExternalLinkAlt, FaUniversity, FaTasks } from 'react-icons/fa';
import { SiUdemy, SiCoursera, SiIeee } from 'react-icons/si';

const certifications = [
  {
    title: "Task Completion Certificate",
    issuer: "Various Projects",
    issuedDate: "2024",
    link: "https://drive.google.com/file/d/1bfzKOwSh33uGyqAe07UpSz1anq8WpUig/view?usp=drive_link",
    iconName: "task"
  },
  {
    title: "Travelplus Internship Certificate",
    issuer: "Travelplus",
    issuedDate: "April 2024",
    link: "https://drive.google.com/file/d/1ufWMx1V26rfYqtbeqUwCpp-HyuinL8wM/view?usp=drive_link",
    iconName: "university"
  },
  {
    title: "Educational Achievement Certificate",
    issuer: "Academic Institution",
    issuedDate: "2024",
    link: "https://drive.google.com/file/d/1SnVlkmOJs8tk9XwxIAnoUi03kAkWVoDb/view?usp=drive_link",
    iconName: "university"
  }
];

const iconData: { [key: string]: JSX.Element } = {
  'udemy': <SiUdemy />,
  'coursera': <SiCoursera />,
  'ieee': <SiIeee />,
  'university': <FaUniversity />,
  'task': <FaTasks />
};

const Certifications: React.FC = () => {
  return (
    <div className="certifications-container">
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <a href={cert.link} key={index} target="_blank" rel="noopener noreferrer" className="certification-card" style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}>
            <div className="certification-content">
              <div className="certification-icon">{iconData[cert.iconName] || <FaUniversity />}</div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              {cert.issuedDate && <span className="issued-date">Issued {cert.issuedDate}</span>}
            </div>
            <div className="certification-link animated-icon">
              <FaExternalLinkAlt />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;