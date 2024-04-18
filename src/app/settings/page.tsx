import Navbar from '@/components/navbar/Navbar';
import Sidebar from '@/components/sidebar/Sidebar';
import Image from 'next/image';
import icon from "../../assets/settingpage.png"
import React from 'react'

const page = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar />
      <div className="flex flex-row bg-[#F9F9F9]">
        <Sidebar />
        <div className='px-[30px]'>
          <h2 className="text-[18px] font-normal text-[#1D1D1D] py-[14px]">
            Settings
          </h2>
          <div className="border bg-white flex justify-between rounded-sm w-[1092px] pl-[28px] pr-[12px] h-[72px] items-center">
            <h2 className="font-medium text-[22px]">Settings</h2>
            <div className='h-[49px] w-[49px] flex justify-center rounded-sm items-center border'>
              <Image className='w-[29px] h-[29px]' src={icon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page