import React from 'react';
import { useParams } from 'react-router-dom';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';

type ProfileType = 'Entrepreneur' | 'DevOps' | 'AI Website Developer' | 'UI/UX';

const ProfileBanner: React.FC = () => {
  const { profileName } = useParams<{ profileName: string }>();
  
  const profileBannerData = {
    'Entrepreneur': {
      headline: "Shaik Shakeel - Entrepreneur",
      profileSummary: "Passionate entrepreneur with a vision to create innovative solutions. Experienced in building and scaling tech startups, business development, and strategic planning.",
      resumeLink: "https://drive.google.com/file/d/1bncWxWdXHPEwHiUu9Uw2ORMg7GlmSIC1/view?usp=sharing"
    },
    'DevOps': {
      headline: "Shaik Shakeel - DevOps Engineer",
      profileSummary: "Experienced DevOps professional with expertise in CI/CD pipelines, cloud infrastructure, and automation. Skilled in Docker, Kubernetes, and cloud platforms.",
      resumeLink: "https://drive.google.com/file/d/1bncWxWdXHPEwHiUu9Uw2ORMg7GlmSIC1/view?usp=sharing"
    },
    'AI Website Developer': {
      headline: "Shaik Shakeel - AI Website Developer",
      profileSummary: "Specialized in building intelligent web applications with AI/ML integration. Proficient in modern web technologies and machine learning frameworks.",
      resumeLink: "https://drive.google.com/file/d/1bncWxWdXHPEwHiUu9Uw2ORMg7GlmSIC1/view?usp=sharing"
    },
    'UI/UX': {
      headline: "Shaik Shakeel - UI/UX Designer",
      profileSummary: "Creative UI/UX designer with a passion for creating intuitive and beautiful user experiences. Skilled in user research, wireframing, prototyping, and front-end development.",
      resumeLink: "https://drive.google.com/file/d/1bncWxWdXHPEwHiUu9Uw2ORMg7GlmSIC1/view?usp=sharing"
    }
  };

  const profile = ['Entrepreneur', 'DevOps', 'AI Website Developer', 'UI/UX'].includes(profileName!)
    ? (profileName as ProfileType)
    : 'Entrepreneur';

  const bannerData = {
    ...profileBannerData[profile],
    linkedinLink: "https://www.linkedin.com/in/shaik-mohammad-shakeel-ba5a771b1/"
  };

  const handlePlayClick = () => {
    // Open resume in new tab
    window.open("https://drive.google.com/file/d/1bncWxWdXHPEwHiUu9Uw2ORMg7GlmSIC1/view?usp=sharing", '_blank');
  };

  const handleLinkedinClick = () => { 
    window.open(bannerData.linkedinLink, '_blank');
  };

  return (
    <div className="profile-banner">
      <div className="banner-content">
        <h1 className="banner-headline" id='headline'>{bannerData.headline}</h1>
        <p className="banner-description">
          {bannerData.profileSummary}
        </p>

        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="LinkedIn" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;