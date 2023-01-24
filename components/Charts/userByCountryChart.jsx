import React from "react";
import dynamic from "next/dynamic";
import { useState } from "react";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
const UserByCountryChart = () => {
  const [state, setState] = useState({
    series: [
      {
        data: [1400, 3430, 4448, 6470, 8540, 9580, 8890, 9800, 9000, 10000],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 50,
        toolbar: {
          show: false,
        },
      },
      grid: {
        show: false,
      },
      plotOptions: {
        bar: {
          borderRadius: 0,
          horizontal: true,
        },
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
      xaxis: {
        categories: [
          "Armania",
          "Azerbaijan",
          "Bahrain",
          "China",
          "Dubai",
          "Indonesia",
          "Japan",
          "Japan",
          "Pakistan",
          "Saudi Arabia ",
          "Palestine",
          "Turkey",
          "USA",
        ],
      },
    },
  });
  return (
    <>
      <div className="flex gap-4 items-center w-full">
        <div className="text_rotate">Countries</div>
        <div className="w-full">
          {typeof window !== "undefined" && (
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              height={450}
            />
          )}
        </div>
      </div>

      <div className="flex justify-center">Users</div>
    </>
  );
};

export default UserByCountryChart;
