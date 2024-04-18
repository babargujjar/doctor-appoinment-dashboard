"use client"
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import Image from "next/image";
import icon from "../../assets/schedule.png";
import search from "../../assets/search1.png";
import add from "../../assets/add.png";
import mark from "../../assets/questionmark.png";
import Link from "next/link";
import React, { useState } from "react";
import man from "../../assets/man.png"
import locationicon from "../../assets/location.png"
import time from "../../assets/time.png"
import online from "../../assets/Frame.png"
import notification from "../../assets/notification.png"

const page = () => {

    const [modal,setModal] = useState(false)

  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar />
      <div className="flex flex-row bg-[#F9F9F9]">
        <Sidebar />
        <div>
          <h2 className="text-[18px] font-normal text-[#1D1D1D] py-[14px] pl-[30px]">
            Patient Register
          </h2>
          <div className="mx-[30px] w-[1117px]">
            <div className="bg-white w-full mb-[34px] flex justify-between items-center px-[30px] py-[11px]">
              <h2 className="font-medium text-[22px] text-[#1D1D1D]">
                Weekly schedule from 25th to 1st November 2022
              </h2>
              <div className="flex flex-row gap-5">
                <div className="border w-10 h-10 flex rounded-sm justify-center items-center">
                  <Image
                    className="w-[18px] cursor-pointer h-[18px]"
                    onClick={() => setModal(true)}
                    src={add}
                    alt=""
                  />
                </div>
                <div className="border w-10 h-10 flex rounded-sm justify-center items-center">
                  <Image className="w-[28px] h-[28px]" src={search} alt="" />
                </div>
                <div className="border w-10 h-10 flex rounded-sm justify-center items-center">
                  <Image className="w-[28px] h-[28px]" src={icon} alt="" />
                </div>
                <div className="border w-10 h-10 flex rounded-sm justify-center items-center">
                  <Image className="w-[30px] h-[30px]" src={mark} alt="" />
                </div>
              </div>
            </div>
            <div className="max-h-[691px] overflow-scroll bg-white flex gap-4">
              <div className="w-10 flex flex-col">
                <p className="mt-[139px]">9:00</p>
                <p className="mt-[125px]">10:00</p>
                <p className="mt-[125px]">11:00</p>
                <p className="mt-[125px]">12:00</p>
              </div>
              <table>
                <thead>
                  <tr className="flex">
                    {/* <th className='w-[50px] border-none'></th> */}
                    <th className="font-bold text-[17px] w-[190px] flex justify-center h-[150px] pt-4">
                      Mon(24)
                    </th>
                    <th className="font-bold text-[17px] w-[190px] flex justify-center h-[150px] pt-4">
                      Tue(24)
                    </th>
                    <th className="font-bold text-[17px] w-[190px] flex justify-center h-[150px] pt-4">
                      Wed(24)
                    </th>
                    <th className="font-bold text-[17px] w-[190px] flex justify-center h-[150px] pt-4">
                      Thu(24)
                    </th>
                    <th className="font-bold text-[17px] w-[190px] flex justify-center h-[150px] pt-4">
                      Fri(24)
                    </th>
                    <th className="font-bold text-[17px] w-[190px] flex justify-center h-[150px] pt-4">
                      Sat(24)
                    </th>
                    <th className="font-bold text-[17px] w-[190px] flex justify-center h-[150px] pt-4">
                      Sun(24)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="flex">
                    <td>
                      <div className="w-[187px] h-[119px] bg-red-400"></div>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr className="flex">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <div className="w-[187px] h-[119px] bg-red-400"></div>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr className="flex">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <div className="w-[187px] h-[119px] bg-red-400"></div>
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
      {modal && (
        <div className="absolute top-0 flex justify-center items-center w-[1440px] h-[1426px] mx-auto bg-black bg-opacity-20 z-10">
          <div className="w-[760px] h-[1061px] rounded-sm bg-white">
            <div className="w-[760px] h-[82px] bg-[#0000AC] flex mb-[35px] justify-between px-[31px] items-center">
              <p className="font-bold text-[22px] text-white">New Appoinment</p>
              <button
                className="text-[25px] text-white"
                onClick={() => setModal(false)}
              >
                X
              </button>
            </div>
            <div className="flex justify-evenly items-start mb-[50px]">
              <div className="flex flex-col items-center justify-center gap-[6px]">
                <Image className="w-[24px] h-[24px] mb-2" src={man} alt="" />
                <p className="font-normal text-[18px] text-[#2F80ED]">
                  PRACTITIONER
                </p>
                <p className="font-normal text-[16px]">name</p>
                <p className="font-bold text-[16px]">General Doctor</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-[6px]">
                <Image className="w-[24px] h-[24px] mb-2" src={time} alt="" />
                <p className="font-normal text-[18px] text-[#2F80ED]">
                  DATE AND TIME
                </p>
                <p className="font-normal text-[16px]">tue,26 October</p>
                <p className="font-bold text-[16px]">9:00</p>
                <button className="font-normal text-[13px] text-[#2F80ED]">
                  Change
                </button>
              </div>
              <div className="flex flex-col justify-center items-center gap-[6px]">
                <Image
                  className="w-[24px] h-[24px] mb-2"
                  src={locationicon}
                  alt=""
                />
                <p className="font-normal text-[18px] text-[#2F80ED]">
                  LOCATION
                </p>
                <p className="font-normal text-[16px]">General clinic</p>
                <p className="font-bold text-[16px]">Room {"1"}</p>
                <button className="font-normal text-[13px] text-[#2F80ED]">
                  Change
                </button>
              </div>
            </div>
            <div className="px-[28px]">
              <div className="grid grid-cols-4 mb-[18px]">
                <h2 className="col-span-1 text-[18px] font-normal">Patient</h2>
                <input
                  className="col-span-3 border w-[415px] rounded-md h-[44px] border-[#E0E0E0]"
                  type="text"
                />
              </div>
              <div className="grid grid-cols-4 mb-[18px]">
                <h2 className="col-span-1 text-[18px] font-normal">
                  Purpose of visit
                </h2>
                <textarea className="col-span-3 border rounded-md w-[415px] h-[84px] border-[#E0E0E0]" />
              </div>
              <div className="grid grid-cols-4 mb-[20px]">
                <h2 className="col-span-1 text-[18px] font-normal">
                  Appoinment Status
                </h2>
                <div className="col-span-3 flex  gap-2">
                  <button className="w-[182px] h-[44px] rounded-md bg-[#FAFAFA] font-normal text-[16px] flex justify-center items-center">
                    Confirmation required
                  </button>
                  <button className="h-[44px] text-white text-[16px] rounded-md w-[102px] bg-[#0000AC]">
                    Confirmed
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-4 mb-[20px]">
                <h2 className="col-span-1 text-[18px] font-normal">Duration</h2>
                <div className="col-span-3 flex  gap-[10px]">
                  <button className="h-[44px] w-[44px] rounded-md bg-[#FAFAFA] font-normal text-[16px] flex justify-center items-center">
                    10'
                  </button>
                  <button className="h-[44px] w-[44px] rounded-md text-white bg-[#0000AC]">
                    20'
                  </button>
                  <button className="h-[44px] w-[44px] rounded-md text-white bg-[#0000AC]">
                    30'
                  </button>
                  <button className="h-[44px] w-[44px] rounded-md text-white bg-[#0000AC]">
                    40'
                  </button>
                  <button className="h-[44px] w-[44px] rounded-md text-white bg-[#0000AC]">
                    50'
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-4 mb-[20px]">
                <h2 className="col-span-1 text-[18px] font-normal">
                  Appoinment Type
                </h2>
                <div className="col-span-3 flex  gap-2">
                  <button className="w-[98px] h-[44px] rounded-sm bg-[#FAFAFA] font-normal text-[18px] flex justify-center items-center">
                    First Time
                  </button>
                  <button className="h-[44px] text-white text-[18px] rounded-sm w-[132px] bg-[#0000AC]">
                    Follow up visit
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-4 mb-[80px]">
                <h2 className="col-span-1 text-[18px] font-normal">
                  Online consultation
                </h2>
                <div className="col-span-3">
                  <Image className="w-[89px] h-[43px]" src={online} alt="" />
                </div>
              </div>
              <div>
                <div className="flex gap-2 mb-2">
                  <Image className="w-6 h-6" src={notification} alt="" />
                  <h2 className="font-bold text-[18px]">Send Notification</h2>
                </div>
                <p className="font-normal text-[16px] text-[#333333] mb-[64px]">
                  Appointment confirmation and reminder messages will be
                  automatically sent to clinic SMS notification settings.
                </p>
              </div>
              <div className="text-end flex gap-[31px] justify-end">
                <button className="font-medium text-[16px] text-[#000000]">
                  Cancel
                </button>
                <button className="w-[158px] text-white h-[41px] rounded-md bg-[#0000AC] font-medium text-[16px]flex justify-center items-center">
                  Begin Appoinment
                </button>
                <button className="w-[55px] h-[41px] border rounded-md border-[#0000AC] text-[#0000AC] flex justify-center items-center font-medium text-[16px]">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
