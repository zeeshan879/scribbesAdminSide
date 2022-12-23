import React from "react";
import com from "../../Asstes/style/communites.module.css";
import all from "../../Asstes/DashboardImages/all.png";
import verified from "../../Asstes/DashboardImages/verified.png";
import scribeCom from "../../Asstes/DashboardImages/scribeCom.png";
import reportCom from "../../Asstes/DashboardImages/reportCom.png";
import supper from "../../Asstes/DashboardImages/supper.png";
import nreports from "../../Asstes/DashboardImages/nreports.png";
import ureports from "../../Asstes/DashboardImages/ureports.png";
import appeal from "../../Asstes/DashboardImages/appeal.png";

import Image from "next/image";

const AllReportsCounts = () => {
  const allReportsCounts = [
    {
      icon: nreports,
      total: "1100",
      title: "New Reports",
    },
    {
      icon: ureports,
      total: "1100",
      title: "Unread Reports",
    },
    {
      icon: appeal,
      total: "1100",
      title: "Appeals",
    },
    {
      icon: reportCom,
      total: "1000",
      title: "Reported Communities",
    },
    {
      icon: reportCom,
      total: "1000",
      title: "Reported Users",
    },
  ];
  return (
    <>
      <div className={com.counts_wraper}>
        {allReportsCounts.map((data) => {
          return (
            <>
              <div className={com.counts_items_box}>
                <div>
                  <Image src={data.icon} />
                </div>
                <div className="text-[30px] font-bold font-grotesk">
                  {data.total}
                </div>
                <div className="text-base font-normal font-grotesk">
                  {data.title}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default AllReportsCounts;
