import React from "react";
import BackArrow from "../../BackArrow";
import UserInfocard from "./userInfoCard";
import Image from "next/image";
import SelectMonth from "../SelectMonth";
import TotalUserChart from "./TotalUserChart";
import UserByGenderChart from "./UserByGenderChart";
import UserByCountryChart from "./UserByCountryChart";
import UserByAgeChart from "./UserByAgeChart";
import vs from "../../../Asstes/style/video_statics.module.css";

const UserStaticsBodySec = () => {
  const pageInfo={tile:"Users Statistics",subtitle:""}
  return (
    <>
      <div className="body_container">
        <BackArrow pageName={pageInfo} />
        <div className="flex justify-end">
          <div>
            <SelectMonth />
          </div>
        </div>

        <UserInfocard />
        <div className={vs.user_statics_chart_container}>
          <TotalUserChart />
          <UserByGenderChart />
          <UserByCountryChart />
          <UserByAgeChart />
        </div>
      </div>
    </>
  );
};

export default UserStaticsBodySec;
