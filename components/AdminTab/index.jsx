import React, { useState } from "react";
import DashboardLeftMenu from "../AdminLeftMenu";
import Home from "../../styles/Home.module.css";
import Admin from "./admin";
import Header from "../Header";
import { useSelector } from "react-redux";
import SuperAdminContentSection from "./SuperAdminContentSection"
import { useEffect } from "react";

const AdminContentTab = () => {
  const activePageTab = useSelector(
    (state) => state.allGernalFunction.activePageTab
  );
  useEffect(()=>{
    
  })

  return (
    <>
      <div className={Home.main_container}>
        <div className="flex h-full    justify-between w-[100%]">
          <div className={Home.left_menu}>
            <DashboardLeftMenu />
          </div>
          <div className={Home.centerView}>
            <Header />
            <Admin/>
          
          
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminContentTab;
