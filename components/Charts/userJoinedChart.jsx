import React from "react";
import { useState } from "react";
import cen from "../../Asstes/style/home_centerView.module.css";
import dynamic from "next/dynamic";
import SelectMonth from "../Statistics/SelectMonth";
import SelectGender from "../SelectGender";
import SelectCountry from "../SelectCountry";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
const UserJoinedChartComponent = (props) => {
  const chartTitle = props?.chartText;

  const [state, setState] = useState({
    series: [
      {
        name: "STOCK ABC",
        data: [
          "0",
          "4000",
          "3000",
          "200",
          "3500",
          "5000",
          "2800",
          "6500",
          "8500",
          "1000",
        ],
      },
    ],

    options: {
      grid: {
        show: false,
      },
      chart: {
        type: "area",
        height: 0,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      title: {
        text: chartTitle,
        align: "left",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#1CAC19"],
        opacity: 0.2,
      },
      fill: {
        colors: ["#1CAC19"],
      },
      labels: [
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
      xaxis: {
        type: "months",
        gridLines: {
          display: false,
        },
        lines: {
          show: false,
        },
      },
      yaxis: {
        opposite: false,
        lines: {
          show: false,
        },
      },
      legend: {
        horizontalAlign: "right",
      },
    },
  });
  return (
    <>
      <div className="flex justify-between items-center pb-[20px] md:pb-[0px]">
        <div className="font-bold font-grotesk text-xs lg:text-[20px]">
          Users Joined
        </div>
        <div className="flex gap-[20px] lg:gap-[40px] items-center">
          <div>
            <SelectCountry />
          </div>
          <div>
            <SelectGender />
          </div>
          <div>
            <SelectMonth />
          </div>
        </div>
      </div>

      {typeof window !== "undefined" && (
        <Chart
          options={state.options}
          series={state.series}
          type="area"
          height="100%"
        />
      )}
    </>
  );
};

export default UserJoinedChartComponent;
