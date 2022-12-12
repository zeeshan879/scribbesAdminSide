import React, { useState } from "react";
import DashboardLeftMenu from "../AdminLeftMenu";
import Home from "../../styles/Home.module.css";
import DashboardTabs from "../DashboradContent";
import UserTab from "../UserTabContent";
import AllUsers from "../AllUsers";
import Header from "../Header";
import { useSelector } from "react-redux";
import UserPostActivity from "./userPostActivity"

const UserActivityPage = () => {
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
            <UserPostActivity />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserActivityPage;
