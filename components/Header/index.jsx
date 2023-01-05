import React,{useState} from "react";
import well from "./header.module.css";
import Image from "next/image";
import notification from "../../Asstes/DashboardImages/notification.png";
import profileArrow from "../../Asstes/DashboardImages/profileArrow.png";
import profile from "../../Asstes/DashboardImages/profile.png";
import { AiOutlineMenu } from 'react-icons/ai';
import MobileLeftMenu from "../AdminLeftMenu/mobileLeftMenu"

const Header = () => {
  const [menuShow,setMenuShow]=useState(false)
  const handleLeftMobileMenu=()=>{
    setMenuShow(!menuShow)
  }



  return (
    <>
<div>
<div className={well.header_wraper}>
        <div className={well.mobile_menu_btn} onClick={()=>handleLeftMobileMenu()} >
          <AiOutlineMenu/>
        </div>
        <div className={well.header_left}>
          <div className={well.header_date}>
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
          <div className={well.notification_icon}>
            <Image src={notification} />
          </div>
          <div className={well.notisep}></div>
          <div>
            <div className="text-[16px] lg:text-[18px]  font-DM font-medium text-[#000580]">
              John Doe
            </div>
            <div className={well.user_status}>Super Admin</div>
          </div>
          <div className={well.header_profile}>
            <Image src={profile} />
          </div>
          <div>
            <Image src={profileArrow} />
          </div>
        </div>
      </div>
</div>
      <MobileLeftMenu state={menuShow} onClick={()=>handleLeftMobileMenu()} />
    </>
  );
};

export default Header;
