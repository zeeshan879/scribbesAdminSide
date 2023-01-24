import React from "react";
import { useState } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const MostPostedHourChart = (props) => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Actual",
        data: [
          {
            x: "Jan",
            y: 1292,
            goals: [
              {
                name: "Expected",
                value: 1400,
                strokeHeight: 0,
                stroke: false,

                strokeColor: "#00",
              },
            ],
          },
          {
            x: "Feb",
            y: 4432,
            goals: [
              {
                name: "Expected",
                value: 5400,
                strokeHeight: 5,
                strokeColor: "#00",
              },
            ],
          },
          {
            x: "Mar",
            y: 5423,
            goals: [
              {
                name: "Expected",
                value: 5200,
                strokeHeight: 5,
                strokeColor: "#00",
              },
            ],
          },
          {
            x: "Apr",
            y: 6653,
            goals: [
              {
                name: "Expected",
                value: 6500,
                strokeHeight: 5,
                strokeColor: "#00",
              },
            ],
          },
          {
            x: "May",
            y: 8133,
            goals: [
              {
                name: "Expected",
                value: 6600,
                strokeHeight: 10,
                strokeWidth: 0,
                strokeLineCap: "round",
                strokeColor: "#00",
              },
            ],
          },
          {
            x: "Jun ",
            y: 7132,
            goals: [
              {
                name: "Expected",
                value: 7500,
                strokeHeight: 5,
                strokeColor: "#00",
              },
            ],
          },
          {
            x: "Jul ",
            y: 7332,
            goals: [
              {
                name: "Expected",
                value: 8700,
                strokeHeight: 5,
                strokeColor: "#00",
              },
            ],
          },
          {
            x: "Aug",
            y: 6553,
            goals: [
              {
                name: "Expected",
                value: 7300,
                strokeHeight: 2,
                show: false,
                strokeDashArray: 0,
                strokeColor: "#ff",
              },
            ],
          },
          {
            x: "Sep",
            y: 6553,
            goals: [
              {
                name: "Expected",
                value: 7300,
                strokeHeight: 2,
                show: false,
                strokeDashArray: 0,
                strokeColor: "#ff",
              },
            ],
          },
          {
            x: "Oct",
            y: 6553,
            goals: [
              {
                name: "Expected",
                value: 7300,
                strokeHeight: 2,
                show: false,
                strokeDashArray: 0,
                strokeColor: "#ff",
              },
            ],
          },
          {
            x: "Nov",
            y: 6553,
            goals: [
              {
                name: "Expected",
                value: 7300,
                strokeHeight: 2,
                show: false,
                strokeDashArray: 0,
                strokeColor: "#ff",
              },
            ],
          },
          {
            x: "Dec ",
            y: 6553,
            goals: [
              {
                name: "Expected",
                value: 7300,
                strokeHeight: 2,
                show: false,
                strokeDashArray: 0,
                strokeColor: "#ff",
              },
            ],
          },
        ],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      grid: {
        show: true,
        borderColor: '#F5F5F5',
        strokeDashArray: 5,
    
      },
      plotOptions: {
        bar: {
          columnWidth: "45%",
        },
      },
      colors: ["#1CAC19"],
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
        showForSingleSeries: true,
        customLegendItems: ["Actual", "Expected"],
        markers: {
          fillColors: false,
          size: 0,
          show: false,
        },
      },
    },
  });
  return (
    <>
      {typeof window !== "undefined" && (
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height="100%"
        />
      )}
    </>
  );
};

export default MostPostedHourChart;
