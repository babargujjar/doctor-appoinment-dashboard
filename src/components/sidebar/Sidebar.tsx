"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import dashboardselected from "../../assets/dashboard.png"
import shaduleselected from "../../assets/calenderblue.png"
import dashboard from "../../assets/dashoardwhite.png"
import slide from "../../assets/Rectangle 4.png"
import shadule from "../../assets/calender.png"
import task from "../../assets/task.png"
import patient from '../../assets/patients.png'
import patientblue from '../../assets/patientsblue.png'
import message from "../../assets/message.png"
import analytics from "../../assets/analytics.png"
import setting from "../../assets/setting.png"
import support from "../../assets/support.png"

const Sidebar = () => {

 
  return (
    <div className="w-[245px] h-[900px] border-2 pt-[30px] border-[#E0E0E0] bg-white">
      <div>
        <h2 className="text-[13px] font-normal ml-[20px] text-[#828282]">
          MENU
        </h2>
        <div>
          <div className="h-[44px] py-2 flex flex-row items-center cursor-pointer">
            <Image
              className={`h-[23px] w-[23px] mr-[10px]`}
              src={dashboard}
              alt=""
            />
            <h2 className={`font-normal text-[15px] `}>Dashboard</h2>
          </div>
          <div className="h-[44px] py-2 flex flex-row items-center cursor-pointer">
            <Image
              className={`h-[23px] w-[23px] mr-[10px] `}
              src={shadule}
              alt=""
            />
            <h2 className={`font-normal text-[15px]`}>Schedule</h2>
          </div>
          <div className="h-[44px] py-2 flex flex-row items-center cursor-pointer">
            <Image
              className={`h-[23px] w-[23px] mr-[10px]`}
              src={task}
              alt=""
            />
            <h2 className={`font-normal text-[15px] `}>Tasks</h2>
          </div>
          <div className="h-[44px] py-2 flex flex-row items-center cursor-pointer">
            <Image
              className={`h-[23px] w-[23px] mr-[10px] `}
              src={patient}
              alt=""
            />
            <h2 className={`font-normal text-[15px]`}>Patients</h2>
          </div>
          <div className="h-[44px] py-2 flex flex-row items-center cursor-pointer">
            <Image
              className={`h-[23px] w-[23px] mr-[10px] `}
              src={message}
              alt=""
            />
            <h2 className={`font-normal text-[15px]`}>Messages</h2>
          </div>
          <div className="h-[44px] py-2 flex flex-row items-center cursor-pointer">
            <Image
              className={`h-[23px] w-[23px] mr-[10px] `}
              src={analytics}
              alt=""
            />
            <h2 className={`font-normal text-[15px]`}>Analytics</h2>
          </div>
          <hr className="w-[168px] mx-auto mt-[24px] mb-[35px]" />
          <h2 className="text-[13px] font-normal ml-[20px] text-[#828282]">
            GENERAL
          </h2>
          <div className="h-[44px] py-2 flex flex-row items-center cursor-pointer">
            <Image
              className={`h-[23px] w-[23px] mr-[10px] `}
              src={setting}
              alt=""
            />
            <h2 className={`font-normal text-[15px]`}>Settings</h2>
          </div>
          <div className="h-[44px] py-2 flex flex-row items-center cursor-pointer">
            <Image
              className={`h-[23px] w-[23px] mr-[10px] `}
              src={support}
              alt=""
            />
            <h2 className={`font-normal text-[15px]`}>Support</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar
