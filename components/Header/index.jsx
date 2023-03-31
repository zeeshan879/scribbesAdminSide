import React, { useState } from "react";
import well from "./header.module.css";
import Image from "next/image";
import notification from "../../Asstes/DashboardImages/notification.png";
import profileArrow from "../../Asstes/DashboardImages/profileArrow.png";
import profile1 from "../../Asstes/DashboardImages/profile.png";
import { AiOutlineMenu } from "react-icons/ai";
import MobileLeftMenu from "../AdminLeftMenu/mobileLeftMenu";
import addUser from "../../Asstes/DashboardImages/addUser.png";
import logout from "../../Asstes/DashboardImages/logout.png";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import Router from "next/router";

const Header = () => {
  const [menuShow, setMenuShow] = useState(false);
  const [profile, setProfile] = useState(false);
  const admin = useSelector((state) => state.admin.currentUser);
  const adminData = admin?.data;
  const cookies = new Cookies();
  const router = useRouter();
  const handleSignOut=()=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to logout!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        cookies.remove("token");
        Router.push("/login");

      }
    })

  }

  const handleLeftMobileMenu = () => {
    setMenuShow(!menuShow);
  };

  return (
    <>
      <div>
        <div className={well.header_wraper}>
          <div
            className={well.mobile_menu_btn}
            onClick={() => handleLeftMobileMenu()}
          >
            <AiOutlineMenu />
          </div>
          <div className={well.header_left}>
            <div className={well.header_date}>15, Oct, 2022</div>
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
                {adminData?.userName}
              </div>
              <div className={well.user_status}>Super Admin</div>
            </div>
            <div
              className={well.header_profile}
              onClick={() => setProfile(!profile)}
            >
              <Image src={profile1} />
            </div>
            <div onClick={() => setProfile(!profile)}>
              <Image src={profileArrow} />
            </div>
            {profile && (
              <div className={well.profile_toggle}>
                <div className={well.profile_togle_inner}>
                  <div className="flex items-center gap-[15px] md:gap-[26px]">
                    <div>
                      <Image src={profile1} />
                    </div>
                    <div>
                      <div className="font-DM text-base md:text-[20px] text-[#000580]">
                        {adminData?.userName}
                      </div>
                      <div className="font-DM text-sm">{adminData?.email}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-[20px] pl-[20px]">
                    <div>
                      <Image src={addUser} />
                    </div>
                    <div className="font-DM text-[#BCBCBC] text-sm 2xl:text-base">
                      Add an existing account
                    </div>
                  </div>
                </div>
                <div className="flex items-center pt-3 md:pt-4 pl-[30px] md:pl-[50px] gap-[20px]">
                  <div onClick={()=>handleSignOut()}>
                    <Image src={logout} />
                  </div>
                  <div className="font-DM text-[#BCBCBC]">Log out</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <MobileLeftMenu state={menuShow} onClick={() => handleLeftMobileMenu()} />
    </>
  );
};

export default Header;
