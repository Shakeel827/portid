import React from 'react';
import './ContactMe.css';
import { FaEnvelope, FaPhoneAlt, FaCoffee, FaLinkedin } from 'react-icons/fa';

const ContactMe: React.FC = () => {
  const userData = {
    profilePicture: { url: "https://picsum.photos/seed/shakeel/150/150" },
    name: "Shaik Shakeel",
    title: "Cybersecurity Specialist & Full Stack Developer",
    summary: "Passionate about cybersecurity, web development, and AI automation",
    companyUniversity: "Bapatla Engineering College",
    linkedinLink: "https://www.linkedin.com/in/shaik-mohammad-shakeel-ba5a771b1/",
    email: "skshakeel9086@gmail.com",
    phoneNumber: "8074015276"
  };

  return (
    <div className="contact-container">
      <div className="linkedin-badge-custom">
        <img src={userData.profilePicture.url} alt="Shaik Shakeel" className="badge-avatar" />
        <div className="badge-content">
          <h3 className="badge-name">{userData.name}</h3>
          <p className="badge-title">{userData.title}</p>
          <p className="badge-description">
            {userData.summary}
          </p>
          <p className="badge-company">{userData.companyUniversity}</p>
          <a
            href={userData.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="badge-link"
          >
            <FaLinkedin className="linkedin-icon" /> View Profile
          </a>
        </div>
      </div>
      <div className="contact-header">
        <p>I'm always up for a chat or a coffee! Feel free to reach out.</p>
      </div>
      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href={`mailto:${userData.email}`} className="contact-link">
            {userData.email}
          </a>
        </div>
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <a href={`tel:${userData.phoneNumber}`} className="contact-link">
            {userData.phoneNumber}
          </a>
        </div>
        <div className="contact-fun">
          <p>Or catch up over a coffee ☕</p>
          <FaCoffee className="coffee-icon" />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;