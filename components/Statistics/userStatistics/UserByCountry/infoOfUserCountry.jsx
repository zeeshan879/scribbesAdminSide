import React from "react";
import uc from "../../../../Asstes/style/user_by_country.module.css";
import activeFlag from "../../../../Asstes/DashboardImages/activeFlag.png";
import turkey from "../../../../Asstes/DashboardImages/turkey.png";
import japan from "../../../../Asstes/DashboardImages/japan.png";
import Image from "next/image";
const InfoOfUserCountry = () => {
  const countryWithMostUser = [
    {
      icon: activeFlag,
      countryName: "USA",
      totalUser: "1588899",
    },
    {
      icon: turkey,
      countryName: "Turkey",
      totalUser: "1588899",
    },
    {
      icon: japan,
      countryName: "Japan",
      totalUser: "1588899",
    },
  ];
  return (
    <>
      <div className={uc.user_country_box}>
        <div className={uc.country_inner_box}>
          <div className={uc.country_info_itmes}>
            <div className={uc.country_info_tile}>
              <div className="font-grotesk font-bold text-[20px]">
                Countries With Most Users
              </div>
              <div className="font-DM font-medium text-[20px]">Users</div>
            </div>
            {countryWithMostUser.map((data) => {
              return (
                <>
                  <div className={uc.country_info_tile}>
                    <div className="flex items-center gap-[12px] font-DM">
                      <div>
                        {" "}
                        <Image src={data.icon} />
                      </div>{" "}
                      {data.countryName}
                    </div>
                    <div className="font-DM">{data.totalUser}</div>
                  </div>
                </>
              );
            })}
          </div>
          <div className={uc.country_info_itmes}>
            <div className={uc.country_info_tile}>
              <div className="font-grotesk font-bold text-[20px]">
                Countries With Least Users
              </div>
              <div className="font-DM font-medium text-[20px]">Users</div>
            </div>
            {countryWithMostUser.map((data) => {
              return (
                <>
                  <div className={uc.country_info_tile}>
                    <div className="flex items-center gap-[12px] font-DM">
                      <div>
                        {" "}
                        <Image src={data.icon} />
                      </div>{" "}
                      {data.countryName}
                    </div>
                    <div className="font-DM">{data.totalUser}</div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoOfUserCountry;
