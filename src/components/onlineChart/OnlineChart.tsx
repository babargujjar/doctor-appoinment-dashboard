"use client"
import React, { useEffect, useState } from "react";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import axios from "axios";

export interface AppointmentDataType {
  onlineConsultation: boolean;
  dateAndTime: string;
}

interface State {
  series: { name: string; data: { x: Date; y: number }[] }[];
  options: ApexOptions;
}

const OnlineChart: React.FC<{}> = ({ appointmentData }:any) => {

  const filteredAppointments = appointmentData.filter(
    (appointment: any) => !(appointment.consultationType === "No")
  );
  // console.log('filteredAppointments', filteredAppointments);
  const countAppointmentsByDay = (appointments: AppointmentDataType[]) => {
    const appointmentCounts = appointments.reduce((acc, appointment) => {
      const date = new Date(appointment.dateAndTime).toLocaleDateString();
      acc[date] = (acc[date] || 0) + 1;
      return acc;
    }, {});
    return Object.entries(appointmentCounts).map(([date, count]) => ({
      x: date,
      y: count,
    }));
  };

  const offlineChartData = countAppointmentsByDay(filteredAppointments);
  // console.log('offlineChartData', offlineChartData)
  const initialState: State = {
    series: [
      {
        name: "Offline Consultations",
        data: offlineChartData,
      },
    ],
    options: {
      chart: {
        type: "area",
        sparkline: {
          enabled: true,
        },
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      xaxis: {
        type: "datetime",
        categories: offlineChartData.map((data) => data.x),
      },
      yaxis: {
        opposite: true,
      },
      legend: {
        horizontalAlign: "left",
      },
    },
  };

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={initialState.options}
          series={initialState.series}
          type="area"
          height={112}
          width={164}
        />
      </div>
    </div>
  );
};

export default OnlineChart;
