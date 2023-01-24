import React from "react";
import info from "../../../../Asstes/style/info_about_user_post.module.css";
import Image from "next/image";
import activeFlag from "../../../../Asstes/DashboardImages/activeFlag.png";
import profileArrow from "../../../../Asstes/DashboardImages/profileArrow.png";
import conversion from "../../../../Asstes/DashboardImages/conversion.png";
import SelectMonth from "../../SelectMonth";

const InfoAboutUserPost = () => {
  const largeCard = [
    {
      title: "Average Posts",
      option: "60k",
      des: "are average posts for the month",
    },
    {
      title: "Most Active Country",
      option: "USA",
      des: "with 2000 Posts",
    },
    {
      title: "Average Posts",
      option: "Video",
      des: "1M Posts",
    },
  ];
  const smallCard = [
    {
      title: "Most Liked",
      option: "500000",
      des: "Than last month",
    },
    {
      title: "Most Saved",
      option: "500000",
      des: "Than last month",
    },
    {
      title: "Most Comments",
      option: "500000",
      des: "Than last month",
    },
  ];
  return (
    <>
      <div className={info.main_wrapper}>
        <div className="flex justify-end items-center gap-[42px]">
          <div className="flex items-center gap-[14px] cursor-pointer">
            <Image src={activeFlag} />
            <Image src={profileArrow} />
          </div>
          <SelectMonth />
        </div>
        <div className={info.card_wraper}>
          {largeCard.map((data) => {
            return (
              <>
                <div className={info.card1}>
                  <div className="font-grotesk text-base lg:text-[20px] font-bold">
                    {data.title}
                  </div>
                  <div>
                    <div className=" text-[20px] lg:text-[30px] font-grotesk font-bold">
                      {data.option}
                    </div>
                    <div className="text-base font-grotesk">{data.des}</div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="flex justify-end items-center gap-[42px] mt-[26px]">
          <div className="flex items-center gap-[14px] cursor-pointer">
            <Image src={activeFlag} />
            <Image src={profileArrow} />
          </div>
          <div className="flex items-center gap-[14px] cursor-pointer">
            <div className="text-base font-DM text-[#1CAC19]">Month</div>
            <Image src={profileArrow} />
          </div>
        </div>
        <div className={info.card_wraper}>
          {smallCard.map((data) => {
            return (
              <>
                <div className={info.small_Card}>
                  <div className="font-grotesk font-normal">{data.title}</div>
                  <div className="flex items-center gap-[8px] text-base font-bold font-grotesk">
                    500000
                    <span className="flex items-center gap-1 text-[#1CAC19] font-normal">
                      {" "}
                      <Image src={conversion} />
                      500%
                    </span>{" "}
                    <span className="font-normal text-[#BCBCBC]">
                      Than last month
                    </span>{" "}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default InfoAboutUserPost;
