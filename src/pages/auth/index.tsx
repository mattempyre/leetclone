import Navbar from '@/components/Navbar/Navbar';
import React from 'react';
import Image from 'next/image';

type AuthPageProps = {};

const AuthPage: React.FC<AuthPageProps> = () => {
  return (
    <div className="bg-gradient-to-b from-gray-600 to-black h-screen relative">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <div className="flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none  relative]">
          <img src="/hero.png" alt="Hero Img" />
        </div>
      </div>
    </div>
  );
};
export default AuthPage;