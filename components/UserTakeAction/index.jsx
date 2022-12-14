import React from "react";
import DashboardLeftMenu from "../AdminLeftMenu";
import Home from "../../styles/Home.module.css";
import DashboardTabs from "../DashboradContent";
import TakeActionConten from "./takeActionConten"

import Header from "../Header";
const TakeAction = () => {
  return (
    <>
      <div className={Home.main_container}>
        <div className="flex h-full    justify-between w-[100%]">
          <div className={Home.left_menu}>
            <DashboardLeftMenu />
          </div>
          <div className={Home.centerView}>
            <Header />
			<TakeActionConten/>
          </div>
        </div>
      </div>
    </>
  );
};

export default TakeAction;
