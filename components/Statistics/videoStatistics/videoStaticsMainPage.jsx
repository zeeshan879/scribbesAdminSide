import React, { useState } from "react";
import DashboardLeftMenu from "../../AdminLeftMenu";
import Home from "../../../styles/Home.module.css";
import VideoStaticsBodySec from "./videoStaticsBodySec"
import Header from "../../Header";
import { useSelector } from "react-redux";

const TotalVideoViewsMainPage = () => {
  const activePageTab = useSelector(
    (state) => state.allGernalFunction.activePageTab
  );

  return (
    <>
      <div className={Home.main_container}>
        <div className="flex h-full    justify-between w-[100%]">
          <div className={Home.left_menu}>
            <DashboardLeftMenu />
          </div>
          <div className={Home.centerView}>
            <Header />
            <VideoStaticsBodySec />
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalVideoViewsMainPage;
