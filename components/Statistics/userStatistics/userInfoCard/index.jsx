import React from "react";
import vs from "../../../../Asstes/style/video_statics.module.css";
import Image from "next/image";
import conversion from "../../../../Asstes/DashboardImages/conversion.png";
import Link from "next/link";

const UserInfocard = () => {
  const smallCard = [
    {
      title: "Total Users",
      option: "500000",
      des: "Than last month",
      nextPage:"/statistics/users/total-users"

    },
    {
      title: "New Users",
      option: "500000",
      des: "Than last month",
    },
    {
      title: "Most Active Country",
      option: "500000",
      des: "USA",
      nextPage:"/statistics/users/by-country"
    },
    {
      title: "Most Users by Age",
      option: "18-20",
      des: "Than last month",
    },

  ];
  return (
    <>
      <div className={vs.video_Card_wrapper}>
        {smallCard.map((data, index) => {
          return (
            <>
            <Link href={`${data.nextPage}`}>
              <div className={vs.video_statics_card}>
                <div className="font-grotesk font-normal">{data.title}</div>
                <div className="flex items-center gap-[8px] text-base font-bold font-grotesk">
                  500000
                  <span
                    className={
                      index == 1
                        ? "flex items-center gap-1 text-[#FF0000] font-normal"
                        : "flex items-center gap-1 text-[#1CAC19] font-normal"
                    }
                  >
                    {" "}
                    <Image src={conversion} />
                    500%
                  </span>{" "}
                  <span className="font-normal text-[#BCBCBC]">
                    Than last month
                  </span>{" "}
                </div>
              </div>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
};

export default UserInfocard;
