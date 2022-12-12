import React from "react";
import cen from "../../Asstes/style/home_centerView.module.css";
import Image from "next/image";
import newUser from "../../Asstes/DashboardImages/newUser.png";
import activeUser from "../../Asstes/DashboardImages/activeUser.png";
import req from "../../Asstes/DashboardImages/req.png";
import report from "../../Asstes/DashboardImages/report.png";
import block from "../../Asstes/DashboardImages/block.png";

const UserCounterInfo = () => {
  const userInfor = [
    {
      icon: newUser,
      title: "120000",
      info: "New Users",
    },
    {
      icon: activeUser,
      title: "10000",
      info: "Active Users",
    },
    {
      icon: req,
      title: "1000",
      info: "Verification Requests",
    },
    {
      icon: report,
      title: "1100",
      info: "Reports",
    },
    {
      icon: block,
      title: "1000",
      info: "Blocked IPs",
    },
  ];
  return (
    <>
      <div className={cen.total_useStaus}>
        {userInfor.map((data) => {
          return (
            <>
              <div className={cen.user_infoBox}>
                <div>
                  <Image src={data.icon} />
                </div>
                <div className="text-[30px] font-grotesk font-bold pt-[26px]">
                  {data.title}
                </div>
                <div className="pt-[10px] font-grotesk font-normal">
                  {data.info}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default UserCounterInfo;
