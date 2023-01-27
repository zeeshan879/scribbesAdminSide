import React from "react";
import uc from "../../../../Asstes/style/user_by_country.module.css";
import BackArrow from "../../../BackArrow";
import profileArrow from "../../../../Asstes/DashboardImages/profileArrow.png";
import Image from "next/image";
import { useState } from "react";
import InfoOfUserCountry from "./infoOfUserCountry";
import UserByCountryChart from "../../../Charts/userByCountryChart";

const UserByCountryBodySec = () => {
  const [click, setClick] = useState(false);
  const pageInfo={tile:"Users Statistics",subtitle:"users by country"}
  return (
    <>
      <div className="body_container">
        <BackArrow pageName={pageInfo} />
        <div className={uc.main_container}>
          <div className="flex justify-end">
            <div className={uc.AZ_box} onClick={() => setClick(!click)}>
              <div className="font-DM text-[#1CAC19]">A-Z</div>
              <Image src={profileArrow} />

              {click && (
                <div className={uc.az_toggle_wraper}>
                  <div className={uc.az_items}>A-Z</div>
                  <div className={uc.az_items}>Most Users - Least Users</div>
                  <div className={uc.az_items}>Least Users - Most Users</div>
                </div>
              )}
            </div>
          </div>
          <div className={uc.user_chart_box}>
            <UserByCountryChart />
          </div>
          <InfoOfUserCountry />
        </div>
      </div>
    </>
  );
};

export default UserByCountryBodySec;
