import React from "react";
import dynamic from "next/dynamic";
import { useState } from "react";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
const LineChart = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "Desktops",
        data: [0, 100, 200, 300, 400, 500, 600, 700, 800],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },

      colors: ["#1CAC19"],
      dataLabels: {
        enabled: false,
      },

      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "",
        align: "left",
      },
      grid: {
        show: false,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
    },
  });
  return (
    <>
      {typeof window !== "undefined" && (
        <Chart
          options={state.options}
          series={state.series}
          type="line"
          height="100%"
        />
      )}
    </>
  );
};

export default LineChart;
