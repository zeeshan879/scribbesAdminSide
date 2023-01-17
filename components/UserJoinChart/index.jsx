import React from "react";
import { useState } from "react";
import cen from "../../Asstes/style/home_centerView.module.css";
import dynamic from "next/dynamic";
import UserJoinedChartComponent from "../Charts/userJoinedChart";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Userjoinchart = () => {
  return (
    <>
      <div className={cen.joined_chart_box}>
        <UserJoinedChartComponent height="250" />
      </div>
    </>
  );
};

export default Userjoinchart;
