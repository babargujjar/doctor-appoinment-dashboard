"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import threeDots from "@/assets/more-horizontal.png";
import Image from "next/image";
import plusicon from "@/assets/blueplus.png";
import OfflineChart from "@/components/offlineChart/OfflineChart";
import UpComingSchedule from "@/components/upComingSchedule/UpComingSchedule";
import OnlineChart from "@/components/onlineChart/OnlineChart";
import TotalPatientChart from "@/components/pieChart/pieChart";
import { useAppDispatch, useAppSelector } from "@/store/storeHook";
import { fetchAppointment } from "@/store/slices/appointments";
import { fetchPatient } from "@/store/slices/patients";
import { fetchUserData } from "@/store/slices/userSlice";

const page = () => {
  const [appointmentData, setAppointmentData] = useState<any>([]);
  const [patients, setPatients] = useState<any>([]);
  const dispatch = useAppDispatch();

  const data = useAppSelector((state) => state.appointment.appointmentData);
  useEffect(() => {
    setAppointmentData(data);
  }, [data]);
  console.log("appointmentData", appointmentData);
  useEffect(() => {
    dispatch(fetchAppointment());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  const patientsData = useAppSelector((state) => state.patients.patientData);
  useEffect(() => {
    setPatients(patientsData);
  }, [patientsData]);

  useEffect(() => {
    dispatch(fetchPatient());
  }, [dispatch]);
  const totalPatients = patients.length;

  const filteredOfflineAppointments = appointmentData?.filter(
    (appointment: any) => !(appointment.consultationType === "Yes")
  );
  const offlineConsaltaion = filteredOfflineAppointments?.length;

  const filteredOnlineAppointments = appointmentData?.filter(
    (appointment: any) => !(appointment.consultationType === "No")
  );
  const onlineConsaltaion = filteredOnlineAppointments?.length;

  const time = ["8:00", "9:00", "10:00", "11:00"];
  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar />
      <div className="flex flex-row bg-[#F9F9F9]">
        <Sidebar />
        <div>
          <h2 className="text-[18px] font-normal text-[#1D1D1D] py-[14px] pl-[30px]">
            Dashboard {">"} Summary
          </h2>
          <div className="px-[26px]">
            <div className="flex gap-5">
              <div className="p-[22px] bg-[#FFFFFF] w-[360px] h-[191px]">
                <div className="flex justify-between">
                  <h2 className="font-medium text-[21px]">
                    Offline Consultations
                  </h2>
                  <h2 className="text-[#000000] cursor-pointer text-xl">...</h2>
                </div>
                <div className="flex justify-between">
                  <h2 className="font-bold text-[37px]">
                    {offlineConsaltaion}
                  </h2>
                  <OfflineChart appointmentData={appointmentData} />
                </div>
              </div>
              <div className="p-[22px] bg-[#FFFFFF] w-[360px] h-[191px]">
                <div className="flex justify-between">
                  <h2 className="font-medium text-[21px]">
                    Online Consultations
                  </h2>
                  <h2 className="text-[#000000] cursor-pointer text-xl">...</h2>
                </div>
                <div className="flex justify-between">
                  <h2 className="font-bold text-[37px]">{onlineConsaltaion}</h2>
                  <OnlineChart appointmentData={appointmentData} />
                </div>
              </div>
              <div className="p-[22px] bg-[#FFFFFF] w-[360px] h-[191px]">
                <div className="flex justify-between">
                  <h2 className="font-medium text-[21px]">Total patients</h2>
                  <h2 className="text-[#000000] cursor-pointer text-xl">...</h2>
                </div>
                <div className="flex justify-between">
                  <h2 className="font-bold text-[37px]">{totalPatients}</h2>
                  <TotalPatientChart patients={patients} />
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="p-[21px] w-[709px] h-[611px] bg-[#FFFFFF] mt-5 rounded-md">
                <div className="flex justify-between items-center">
                  <h2 className="font-bold text-[15px]">Tasks</h2>
                  <div className="flex gap-2 justify-center">
                    <button className="font-semibold text-[12px] text-[#0000AC]">
                      New Task
                    </button>
                    <div className="border-[#0000AC] w-[23px] flex justify-center items-center h-[23px] border ">
                      <Image
                        className="w-[10px] h-[10px]"
                        src={plusicon}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between bg-[#FBFBFB] px-[25px] py-[18px] w-full mt-[15px]">
                    <div className="flex">
                      <input
                        className="w-[31px] cursor-pointer h-[31px]"
                        type="checkbox"
                      />
                      <div className=" ml-[15px]">
                        <p className="font-medium text-[15px] mb-2">
                          Task Completed successfully
                        </p>
                        <p className="font-normal text-[12px]">
                          Sign up for Covid - 19 training course for medicians
                        </p>
                      </div>
                    </div>
                    <div className="flex ">
                      <p className="mr-[51px] font-normal text-[12px] mt-5">
                        22 oct 2022
                      </p>
                      <Image
                        className="w-[28px] border p-1 cursor-pointer h-[28px]"
                        src={threeDots}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex justify-between bg-[#FBFBFB] px-[25px] py-[18px] w-full mt-[15px]">
                    <div className="flex">
                      <input
                        className="w-[31px] rounded-lg cursor-pointer h-[31px]"
                        type="checkbox"
                      />
                      <div className=" ml-[15px]">
                        <p className="font-medium text-[15px] mb-2">
                          Task Completed successfully
                        </p>
                        <p className="font-normal text-[12px]">
                          Send prescription files to Night duty nurse
                        </p>
                      </div>
                    </div>
                    <div className="flex ">
                      <p className="mr-[51px] font-normal text-[12px] mt-5">
                        22 oct 2022
                      </p>
                      <Image
                        className="w-[28px] border rounded-lg p-1 cursor-pointer h-[28px]"
                        src={threeDots}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex justify-between bg-[#FBFBFB] px-[25px] py-[18px] w-full mt-[15px]">
                    <div className="flex">
                      <input
                        className="w-[31px] rounded-lg cursor-pointer h-[31px]"
                        type="checkbox"
                      />
                      <div className=" ml-[15px]">
                        <p className="font-medium text-[15px] mb-2">
                          Task Not Completed
                        </p>
                        <p className="font-normal text-[12px]">
                          Set up afternoon meeting
                        </p>
                      </div>
                    </div>
                    <div className="flex ">
                      <p className="mr-[51px] font-normal text-[12px] mt-5">
                        22 oct 2022
                      </p>
                      <Image
                        className="w-[28px] border rounded-lg p-1 cursor-pointer h-[28px]"
                        src={threeDots}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex justify-between bg-[#FBFBFB] px-[25px] py-[18px] w-full mt-[15px]">
                    <div className="flex">
                      <input
                        className="w-[31px] rounded-lg cursor-pointer h-[31px]"
                        type="checkbox"
                      />
                      <div className=" ml-[15px]">
                        <p className="font-medium text-[15px] mb-2">
                          Task Completed successfully
                        </p>
                        <p className="font-normal text-[12px]">
                          Send prescription files to Night duty nurse
                        </p>
                      </div>
                    </div>
                    <div className="flex ">
                      <p className="mr-[51px] font-normal text-[12px] mt-5">
                        22 oct 2022
                      </p>
                      <Image
                        className="w-[28px] border rounded-lg p-1 cursor-pointer h-[28px]"
                        src={threeDots}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <UpComingSchedule />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;