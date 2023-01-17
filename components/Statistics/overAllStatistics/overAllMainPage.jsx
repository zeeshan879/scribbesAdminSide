import React, { useState } from "react";
import DashboardLeftMenu from "../../AdminLeftMenu";
import Home from "../../../styles/Home.module.css";
import OverAllStatisticsBodySec from "./overAllStatisticsBodySec"
import Header from "../../Header";


const OverAllStatisticsMainPage = () => {


  return (
    <>
      <div className={Home.main_container}>
        <div className="flex h-full    justify-between w-[100%]">
          <div className={Home.left_menu}>
            <DashboardLeftMenu />
          </div>
          <div className={Home.centerView}>
            <Header />
            <OverAllStatisticsBodySec />
          </div>
        </div>
      </div>
    </>
  );
};

export default OverAllStatisticsMainPage;
