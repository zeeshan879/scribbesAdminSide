import React from "react";
import cen from "../../Asstes/style/home_centerView.module.css";
import activeFlag from "../../Asstes/DashboardImages/activeFlag.png";
import profileArrow from "../../Asstes/DashboardImages/profileArrow.png";
import badge from "../../Asstes/DashboardImages/badge.png";
import activeUserImge from "../../Asstes/DashboardImages/activeUserImge.png";
import badge2 from "../../Asstes/DashboardImages/badge2.png";
import badge3 from "../../Asstes/DashboardImages/badge3.png";
import Image from "next/image";

const MostActiveUser = () => {
  const activeUser = [
    {
      profile: activeUserImge,
      badge: badge,
      name: "John Doe",
      follow: "2m Followers",
      mark: true,
      time: "389h ",
      post: "38921 ",
    },
    {
      profile: activeUserImge,
      badge: badge2,
      name: "John Doe",
      follow: "1.5m Followers",
      mark: false,
      time: "370h  ",
      post: "38921 ",
    },
    {
      profile: activeUserImge,
      badge: badge3,
      name: "John Doe",
      follow: "2m Followers",
      mark: false,
      time: "350h  ",
      post: "38921 ",
    },
  ];
  return (
    <>
<div className={cen.most_active_user_scrol}>
<div className={cen.avtive_user_wraper}>
        <div className={cen.active_userHeader}>
          <div className="font-grotesk font-bold text-base md:text-[18px] 2xl:text-[20px]">
            Most Active Users
          </div>
          <div className="font-DM font-medium text-base md:text-[18px] 2xl:text-[20px]">Hours Spent</div>
          <div className="font-DM font-medium text-base md:text-[18px] 2xl:text-[20px]">Posts</div>
          <div className="flex gap-[10px] 2xl:gap-[14px] items-center cursor-pointer">
            <div>
              <Image src={activeFlag} />
            </div>
            <div>
              <Image src={profileArrow} />
            </div>
          </div>
        </div>
        {activeUser.map((data) => {
          return (
            <>
              <div className={cen.active_userHeader}>
                <div className={cen.active_userItem}>
                  <div>
                    <Image src={data.badge} />
                  </div>
                  <div>
                    <Image src={data.profile} />
                  </div>
                  <div className={cen.activeProfile_name}>
                    <div className="font-DM font-medium text-base md:text-[18px] 2xl:text-[20px] leading-[26px]">
                      {data.name}
                    </div>
                    <div className="font-DM text-[14px] md:text-base font-normal text-base leading-[20px]">
                      {data.follow}
                    </div>
                  </div>
                </div>
                <div className="w-[50px] text-[14px] md:text-base">{data.time} </div>
                <div className="text-[14px] md:text-base">{data.post} </div>
                <div className="w-[60px]"></div>
              </div>
            </>
          );
        })}
      </div>
</div>
    </>
  );
};

export default MostActiveUser;
