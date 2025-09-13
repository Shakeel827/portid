import React, { useEffect, useState } from 'react';
import './NetflixTitle.css';
import { useNavigate } from 'react-router-dom';

const NetflixTitle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handlePlaySound = () => {
    console.log("Starting animation...");
    setIsClicked(true);
  };

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        navigate('/browse');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isClicked, navigate]);

  return (
    <div className="netflix-container" onClick={handlePlaySound}>
      <div className={`shakeel-logo ${isClicked ? 'animate' : ''}`}>
        SHAKEEL
      </div>
    </div>
  );
};

export default NetflixTitle;
