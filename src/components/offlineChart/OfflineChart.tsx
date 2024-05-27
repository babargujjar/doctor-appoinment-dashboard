
// "use client"
// import axios from "axios";
// import { Component, useEffect, useState } from "react";
// import Chart from "react-apexcharts";


// const OfflineChart = () =>{
//      const [appointmentData, setAppointmentData] = useState<any>([]);

//      useEffect(() => {
//        const fetchAppointment = async () => {
//          const res = await axios.get("/api/appointments");
//          // console.log('res', res)
//          setAppointmentData(res.data.response);
//        };
//        fetchAppointment();
//      }, []);
//   const [series,setSeries] = useState([
//         {
//           name: "series-1",
//           data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
//         },
//       ])

//       const [options, setOptions] = useState({
//         chart: {
//           id: "apexchart-example",
//         },
//         xaxis: {
//           // categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
//           labels: {
            
//             style: {
//               colors: "#FFFFFF",
//               fontSize: "14px",
//             },
//           },
//         },
//         dataLabel:{
//           enabled:false,
//         },
//         stroke: {
//           width: 2, // Adjust line width here
//         },
//         toolbar: {
//           show: false, // Hide the toolbar
//         },
//       });
//     return (
//       <Chart
//         options={options}
//         series={series}
//         type="pie"
//         width={164}
//         height={112}
//       />
//     );
  
// }

// export default OfflineChart;
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

const OfflineChart: React.FC<{}> = ({ appointmentData }:any) => {

  const filteredAppointments = appointmentData?.filter(
    (appointment: any) => !(appointment.consultationType === "Yes")
  );

  // console.log('filteredAppointments', filteredAppointments)
  const countAppointmentsByDay = (appointments: AppointmentDataType[]) => {
    const appointmentCounts = appointments?.reduce((acc, appointment) => {
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

export default OfflineChart;
