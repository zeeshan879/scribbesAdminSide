import React from "react";
import Home from "../../styles/Home.module.css";
import user from "../../Asstes/style/admin_userTabs.module.css";
import Image from "next/image";
import backArrow from "../../Asstes/DashboardImages/backArrow.png";
import checkMark from "../../Asstes/DashboardImages/checkMark.png";
import profile from "../../Asstes/DashboardImages/profile.png";
import userLink from "../../Asstes/DashboardImages/userLink.png";
import Header from "../Header";
import UserInnertabs from "../UserTabContent/userInnerTab";

const UserInfoForm = () => {
  return (
    <>
      <div className={user.from_container}>
        <div className={user.io_form}>
          <div className={user.from_profile}>
            <div className={user.profile_div}>
              <div className={user.checkmark_box}>
                <Image src={checkMark} />
              </div>
              <Image src={profile} />
            </div>
            <div className="text-[16px] lg:text-[20px] font-DM font-bold">John Doe</div>
          </div>
          <div className={user.info_form_box}>
            <div className={user._form_left}>
              <div className={user.form_name}>
                <div className="font-DM text-[16px] lg:text-[20px]  font-bold">First name</div>
                <div className={user.io_ele_box}>
                  <input className={user.io_ele} placeholder="Doe" />
                </div>
              </div>
              <div className={user.form_name}>
                <div className="font-DM text-[16px] lg:text-[20px] font-bold pt-[10px] lg:pt-[20px]">
                  Last name
                </div>
                <div className={user.io_ele_box}>
                  <input className={user.io_ele} placeholder="Doe" />
                </div>
              </div>
              <div className={user.form_name}>
                <div className="font-DM text-[16px] lg:text-[20px] font-bold pt-[10px] lg:pt-[20px]">
                  Address
                </div>
                <div className={user.io_ele_box}>
                  <input
                    className={user.io_ele}
                    placeholder="Houston, Texas, United States"
                  />
                </div>
              </div>
              <div className={user.form_name}>
                <div className="font-DM text-[16px] lg:text-[20px] font-bold pt-[10px] lg:pt-[20px]">
                  Phone number
                </div>
                <div className={user.io_ele_box}>
                  <input className={user.io_ele} placeholder="+17139794269" />
                </div>
              </div>
            </div>
            <div className={user._form_right}>
              <div className={user.form_rightLeft}>
                <div className="w-full">
                  <div className="font-DM text-[16px] lg:text-[20px] font-bold ">City</div>
                  <div className={user.io_ele_box}>
                    <input className={user.io_ele} placeholder="Houston" />
                  </div>
                </div>
                <div className="w-full">
                  <div className="font-DM text-[16px] lg:text-[20px] font-bold pt-[10px] lg:pt-[20px]">
                    Country
                  </div>
                  <div className={user.io_ele_box}>
                    <input
                      className={user.io_ele}
                      placeholder="United States"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="font-DM text-[16px] lg:text-[20px] font-bold pt-[10px] lg:pt-[20px] ">
                    Date of birth
                  </div>
                  <div className={user.io_ele_box}>
                    <input className={user.io_ele} placeholder="02/09/1997" />
                  </div>
                </div>
              </div>
              <div className={user.form_right_right}>
                <div className="w-full">
                  <div className="font-DM text-[16px] lg:text-[20px] font-bold ">
                    State
                  </div>
                  <div className={user.io_ele_box}>
                    <input className={user.io_ele} placeholder="Texas" />
                  </div>
                </div>
                <div className="w-full">
                  <div className="font-DM text-[16px] lg:text-[20px] font-bold pt-[10px] lg:pt-[20px]">
                    Zip code
                  </div>
                  <div className={user.io_ele_box}>
                    <input className={user.io_ele} placeholder="77001" />
                  </div>
                </div>
                <div className="w-full">
                  <div className="font-DM text-[16px] lg:text-[20px] font-bold pt-[10px] lg:pt-[20px]">
                    Gender
                  </div>
                  <div className={user.io_ele_box}>
                    <input className={user.io_ele} placeholder="Male" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={user.heading_2}>Account Information</div>
        <div className={user.acount_form_wrapper}>
          <div className={user._form_left}>
            <div className={user.form_name}>
              <div className="font-DM text-[16px] lg:text-[20px] font-bold">Email</div>
              <div className={user.io_ele_box}>
                <input
                  className={user.io_ele}
                  placeholder="johndoe@gmail.com"
                />
              </div>
            </div>
            <div className={user.form_name}>
              <div className="font-DM text-[16px] lg:text-[20px] font-bold pt-[10px] lg:pt-[20px]">
                Status
              </div>
              <div className={user.io_ele_box}>
                <input className={user.io_ele} placeholder="Active" />
              </div>
            </div>
            <div className={user.form_name}>
              <div className="font-DM text-[16px] lg:text-[20px] font-bold pt-[10px] lg:pt-[20px]">
                Verification
              </div>
              <div className={user.io_ele_box}>
                <input className={user.io_ele} placeholder="Verified" />
              </div>
            </div>
          </div>
          <div className={user._form_left}>
            <div className={user.form_name}>
              <div className="font-DM text-[16px] lg:text-[20px] font-bold ">Joining date</div>
              <div className={user.io_ele_box}>
                <input className={user.io_ele} placeholder="01/02/2022" />
              </div>
            </div>
            <div className={user.form_name}>
              <div className="font-DM text-[16px] lg:text-[20px] font-bold pt-[10px] lg:pt-[20px]">
                Account URL
              </div>
              <div className={user.io_ele_box}>
                <input className={user.io_ele} placeholder="Doe" />
              </div>
            </div>
            <div className={user.acount_from_last}>
              <div className={user.form_name}>
                <div className="font-DM text-[16px] lg:text-[20px] font-bold pt-[10px] lg:pt-[20px]">
                  IP address
                </div>
                <div className={user.io_ele_box}>
                  <input className={user.io_ele} placeholder="66.249.66.24" />
                </div>
              </div>
              <div className={user.form_name}>
                <div className="font-DM text-[16px] lg:text-[20px] font-bold pt-[10px] lg:pt-[20px]">
                  Id
                </div>
                <div className={user.io_ele_box}>
                  <input className={user.io_ele} placeholder="8888888" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfoForm;
