import React from "react";
import { useState } from "react";

import dynamic from "next/dynamic";
import SelectMonth from "../../Statistics/SelectMonth";
import SelectGender from "../../SelectGender";
import SelectCountry from "../../SelectCountry";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Userjoinedchart = () => {
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
    fill: {
      colors: ["#F44336", "#E91E63", "#9C27B0"],
    },
    options: {
      grid: {
        xaxis: {
          lines: {
            enabled: true,
          },
        },
      },
      chart: {
        type: "area",
        height: 0,
        backgroundColor: "red",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
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
      <div className="flex justify-between items-center">
        <div className="font-bold font-grotesk text-[20px]">Users Joined</div>
        <div className="flex gap-[40px] items-center">
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
          height={350}
        />
      )}
    </>
  );
};

export default Userjoinedchart;
