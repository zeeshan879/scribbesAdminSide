import React, { useState } from "react";
import DashboardLeftMenu from "../AdminLeftMenu";
import Header from "../Header";
import Home from "../../styles/Home.module.css";
import UserCounterInfo from "../userInfo";
import Userjoinchart from "../UserJoinChart";
import ProgressBars from "../porgressBars";
import HistoryOfAdminAction from "../HistoryAdminAction";
import MostActiveUser from "../MostActiveUser";

const DashboardTabs = () => {
  return (
    <>

      <div className={Home.Inner_Container}>
        <UserCounterInfo />
        <div className={Home.map_progres_wrap}>
          <div>
            <Userjoinchart />
          </div>
          <div>
            <ProgressBars />
          </div>
        </div>
        <div className={Home.map_progres_wrap}>
          <div>
            <HistoryOfAdminAction />
          </div>
          <div>
            <MostActiveUser />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardTabs;
