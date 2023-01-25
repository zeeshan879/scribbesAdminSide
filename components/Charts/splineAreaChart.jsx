import React from "react";
import { useState } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SplineAreaChart = (props) => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "series1",
        data: [2000, 4000, 6000, 4000, 6000, 5000, 4100],
      },

      {
        name: "series2",
        data: [180, 1500, 4000, 2000, 7000, 4200, 6100],
      },
      {
        name: "series3",
        data: [1000, 1800, 2500, 4200, 3000, 3200, 5100],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
        toolbar: {
          show: false,
        },
      },
      //   Surah yaseen ayat 1 to 12 seven times,three three times surah falaq naas and ayat ul qursi Pani pe dum kar ke peena he
      grid: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: ["smooth", "straight", "smooth"],
        colors: ["#000580", "#FF0000", "#1CAC19"],
      },
      fill: {
        colors: ["#ffffff", "#ffffff", "#1CAC19"],
        opacity: 0.7,
      },
      xaxis: {
        type: "months",
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
          "Oct",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      legend: {
        show: false,
      },
    },
  });
  return (
    <>
      {typeof window !== "undefined" && (
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="area"
          height="100%"
        />
      )}
    </>
  );
};

export default SplineAreaChart;
