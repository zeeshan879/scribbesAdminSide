import React from "react";
import BackArrow from "../../../BackArrow";
import tu from "../../../../Asstes/style/total_user_statistics.module.css";
import SelectCountry from "../../../SelectCountry";
import SelectGender from "../../../SelectGender";
import SelectMonth from "../../SelectMonth";
import SelectAge from "../../../SelectAge";
import LineChart from "../../../Charts/LineChart";
import MostPostedHourChart from "../../../Charts/mostPostedHourChart";

const TotalUserBodySec = () => {
  const pageInfo = { tile: "Users Statistics", subtitle: "Total Users" };
  return (
    <>
      <div className="body_container">
        <BackArrow pageName={pageInfo} />
        <div className={tu.total_user_chart}>
          <div className="flex justify-between items-center">
            <div className="font-grotesk font-bold text-xs md:text-base lg:text-[20px]">
              Total Users
            </div>
            <div className="flex gap-[10px] lg:gap-[40px] item-center">
              <SelectCountry />

              <SelectGender />
              <SelectAge />

              <SelectMonth />
            </div>
          </div>
          <div className="w-full h-[80%] flex gap-[50px] items-center pr-5">
            <div className="text_rotate">Months</div>
            <div className="h-full pt-5 w-full ">
              <LineChart />
            </div>
          </div>
          <div className="flex justify-center pt-4 font-DM">Total Users</div>
          <div className="pl-[150px]">
            <div className="font-grotesk font-bold text-[30px]">8000</div>
            <div className="font-grotesk text-base ">
              Total users in <span className="font-bold">May</span>
            </div>
          </div>
        </div>
        <div className={tu.total_user_chart}>
          <div className="flex justify-between items-center">
            <div className="font-grotesk font-bold text-xs  md:text-base lg:text-[20px]">
              Users by Months
            </div>
            <div className="flex gap-[10px] lg:gap-[40px] item-center">
              <SelectCountry />

              <SelectMonth />
            </div>
          </div>
          <div className="flex gap-0 lg:gap-5 items-center pb-0 lg:pb-[20px] pt-4 h-[95%] ">
            <div className="text_rotate">TotalUsers</div>
            <div className="w-full h-full">
              <MostPostedHourChart />
            </div>
          </div>
          <div className="flex justify-center font-DM pt-[10px]">Month </div>
        </div>
      </div>
    </>
  );
};

export default TotalUserBodySec;
