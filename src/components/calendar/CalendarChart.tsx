"use client"
import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import Image from "next/image";
import user from "@/assets/user.png"
import locator from "@/assets/locator.png"
import time from "@/assets/time2.png"
import document from "@/assets/document.png"
import axios from "axios";
import { useAppDispatch, useAppSelector } from "@/store/storeHook";
import { fetchAppointment } from "@/store/slices/appointments";

const localizer = momentLocalizer(moment);

const CalendarChart = () => {
  const dispatch = useAppDispatch()
    const [appointments, setAppointment] = useState<any>([])

    const data = useAppSelector((state) => state.appointment.appointmentData);

    useEffect(() => {
      setAppointment(data);
    }, [data]);

    useEffect(() => {
      dispatch(fetchAppointment());
    }, [dispatch]);
    console.log('appointments', appointments)

  const events = appointments?.map(
    (appointment: {
      dateAndTime: string | number | Date;
      duration: moment.DurationInputArg1;
    }) => ({
      title: "pending",
      start: new Date(appointment.dateAndTime),
      end: moment(new Date(appointment.dateAndTime))
        .add(appointment.duration, "minutes")
        .toDate(),
      appointmentData: appointment,
    })
  );

  const CustomEvent = ({ event }: any) => (
    <div
      className="bg-[#27AE60]p-2 rounded shadow-md"
    >
      <strong>{event.title}</strong>
      <div className="flex text-[#27AE60]">
        <Image src={user} alt="UserOutlined" className="me-1" />{" "}
        {event.appointmentData.patient}
      </div>
      <div className="flex text-[#27AE60]">
        <Image src={document} alt="DocumentIcon" className="me-1" /> Medical
        document
      </div>
      <div className="flex text-[#27AE60]">
        <Image src={locator} alt="Locator" className="me-1" />{" "}
        {event.appointmentData.duration} minutes
      </div>
      <div className="flex text-[#27AE60]">
        <Image src={time} alt="Clock" className="me-1" /> Room 1
      </div>
    </div>
  );

  return (
    <div style={{ height: "750px" }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultDate={new Date()}
        toolbar={true}
        views={{
          day: true,
          week: true,
          month: true,
        }}
        components={{
          event: CustomEvent,
        }}
        style={{ fontSize: "13px" }}
      />
    </div>
  );
};

export default CalendarChart;

