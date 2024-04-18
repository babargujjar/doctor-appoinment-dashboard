import React from 'react'
import Navbar from '@/components/navbar/Navbar';
import Sidebar from '@/components/sidebar/Sidebar';

const page = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <div className="bg-[#FAFAFA]">dashboard</div>
      </div>
    </div>
  );
}

export default page