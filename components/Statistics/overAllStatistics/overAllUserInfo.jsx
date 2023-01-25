import React from "react";
import { useState } from "react";
import fa from "../../../Asstes/style/followes_analysis.module.css";
import UserJoinedChartComponent from "../../Charts/userJoinedChart";
import tuser from "../../../Asstes/DashboardImages/tuser.png";
import newUser from "../../../Asstes/DashboardImages/newUser.png";
import activeUser from "../../../Asstes/DashboardImages/activeUser.png";
import suser from "../../../Asstes/DashboardImages/suser.png";
import ncomunity from "../../../Asstes/DashboardImages/ncomunity.png";
import tcomunity from "../../../Asstes/DashboardImages/tcomunity.png";
import conversion from "../../../Asstes/DashboardImages/conversion.png";
import Image from "next/image";

const OverAllUserInfo = () => {
  const analysisBox = [
    {
      id: "0",
      icon: tuser,
      toalUser: "120000",
      title: "Total Users",
    },
    {
      id: "1",
      icon: newUser,
      toalUser: "120000",
      title: "New Users",
    },
    {
      id: "2",
      icon: activeUser,
      toalUser: "120000",
      title: "Active Users",
    },
    {
      id: "3",
      icon: tcomunity,
      toalUser: "10000",
      title: "Total Communities",
    },
    {
      id: "4",
      icon: ncomunity,
      toalUser: "10000",
      title: "New Communities",
    },
    {
      id: "5",
      icon: suser,
      toalUser: "10000",
      title: "Suspended Users",
    },
  ];
  return (
    <>
      <div className={fa.main_box}>
        <div className="w-full">
          <div className={fa.analysis_box_container}>
            {analysisBox.map((data) => {
              return (
                <>
                  <div
                    className={
                      data.id == 2
                        ? fa.folwers_analysis_box1
                        : data.id == 3
                        ? fa.folwers_analysis_box2
                        : data.id == 4
                        ? fa.folwers_analysis_box2
                        : data.id == 5
                        ? fa.folwers_analysis_box3
                        : fa.folwers_analysis_box
                    }
                  >
                    <div>
                      {" "}
                      <Image src={data?.icon} />
                    </div>
                    <div>
                      <div className="flex w-full justify-between items-center">
                        <div className={fa.box_heaing}>
                          {data.toalUser}
                        </div>
                        <div className={fa.conversion_box}>
                          <Image src={conversion} />
                          500%
                        </div>
                      </div>
                      <div className="font-grotesk text-sm 2xl:text-base pt-[12px]">{data.title}</div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="w-full pb-[50px]">
          <UserJoinedChartComponent height="" chartText="Male 60% Female 40%" />
        </div>
      </div>
    </>
  );
};

export default OverAllUserInfo;
