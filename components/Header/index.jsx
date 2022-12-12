import React from "react";
import well from "./header.module.css";
import Image from "next/image";
import notification from "../../Asstes/DashboardImages/notification.png";
import profileArrow from "../../Asstes/DashboardImages/profileArrow.png";
import profile from "../../Asstes/DashboardImages/profile.png";

const Header = () => {
  return (
    <>
      <div className={well.header_wraper}>
        <div className={well.header_left}>
          <div className="flex font-DM text-base text-[#BCBCBC]">
            15, Oct, 2022
          </div>
          <div className={well.header_search}>
            <input
              className={well.ip_ele}
              placeholder="Search name, email, ip etc "
            />
          </div>
        </div>
        <div className={well.header_right_side}>
          <div>
            <Image src={notification} />
          </div>
          <div className={well.notisep}></div>
          <div>
            <div className="text-[20px] font-DM font-medium text-[#000580]">
              John Doe
            </div>
            <div className={well.user_status}>Super Admin</div>
          </div>
          <div>
            <Image src={profile} />
          </div>
          <div>
            <Image src={profileArrow} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
