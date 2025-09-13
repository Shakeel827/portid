import React from 'react';
import { useLocation } from 'react-router-dom';
import './ProfilePage.css';

import ProfileBanner from './ProfileBanner';
import TopPicksRow from './TopPicksRow';
import ContinueWatching from './ContinueWatching';
type ProfileType = 'Entrepreneur' | 'DevOps' | 'AI Website Developer' | 'UI/UX';

interface ProfilePageProps {
  profileName: string;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ profileName }) => {
  const location = useLocation();
  const backgroundGif = location.state?.backgroundGif || "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif"; // Default GIF

  const profile = ['Entrepreneur', 'DevOps', 'AI Website Developer', 'UI/UX'].includes(profileName)
    ? (profileName as ProfileType)
    : 'Entrepreneur';
  return (
    <>
      <div
        className="profile-page"
        style={{ backgroundImage: `url(${backgroundGif})` }}
      >
        <ProfileBanner
        />
      </div>
      <TopPicksRow profile={profile} />
      <ContinueWatching profile={profile} />
    </>
  );
};

export default ProfilePage;
