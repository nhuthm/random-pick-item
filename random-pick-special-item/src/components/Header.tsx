import React from 'react';
import Image from 'next/image'; // Import Next.js Image component
import coverPhoto from '../app/happywomenday.jpeg'; // Import your cover photo image
import profilePicture from '../app/nhinhut.jpg'; // Import your profile picture image

const Header: React.FC = () => {
  return (
    <header className="bg-pink p-4 relative">
    {/* Cover Photo */}
    <div className="h-64 relative rounded-lg overflow-hidden">
        <Image
          src={coverPhoto}
          alt="Cover Photo"
          layout="fill"
          objectFit="cover"
        />
      </div>

    {/* Profile Picture */}
    <div className="h-20 w-20 bg-white rounded-full border-4 border-primary absolute bottom-4 left-4">
      <Image
        className="rounded-full"
        src={profilePicture}
        alt="Profile"
        layout="fixed"
        width={80}
        height={80}
      />
    </div>

    {/* Twitter logo and navigation icons */}
    <div className="flex items-center justify-between text-white relative">
      {/* Twitter logo, Home, Notifications, Messages, Profile icons */}
    </div>
  </header>
  );
};

export default Header;
