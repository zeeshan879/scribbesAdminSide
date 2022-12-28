import React from "react";
import Home from "../../../styles/Home.module.css";
import user from "../../../Asstes/style/admin_userTabs.module.css";
import Image from "next/image";
import checkMark from "../../../Asstes/DashboardImages/checkMark.png";
import profile from "../../../Asstes/DashboardImages/profile.png";

const ProfileUserInfoForm = () => {
  return (
    <>
      <div className={user.profile_from_container}>
        <div className={user.io_form}>
          <div className={user.seting_from_profile}>
            <div className={user.seting_profile_box}>
              <div className={user.profile_div}>
                <div className={user.checkmark_box}>
                  <Image src={checkMark} />
                </div>
                <Image src={profile} />
              </div>
              <div>
                <div className="text-[20px] font-DM font-bold">John Doe</div>
                <div className={user.super_Admin_btn}>Super Admin</div>
              </div>
            </div>

            <div className={user.seting_profile_save}>Save</div>
          </div>
          <div className={user.info_form_box}>
            <div className={user._form_left}>
              <div className={user.form_name}>
                <div className="font-DM text-[20px] font-bold">First name</div>
                <div className={user.io_ele_outPut_box}>John</div>
              </div>
              <div className={user.form_name}>
                <div className="font-DM text-[20px] font-bold pt-[20px]">
                  Last name
                </div>
                <div className={user.io_ele_outPut_box}>Doe</div>
              </div>
              <div className={user.form_name}>
                <div className="font-DM text-[20px] font-bold pt-[20px]">
                  Address
                </div>
                <div className={user.io_ele_outPut_box}>
                  Houston, Texas, United States
                </div>
              </div>
              <div className={user.form_name}>
                <div className="font-DM text-[20px] font-bold pt-[20px]">
                  Phone number
                </div>
                <div className={user.io_ele_outPut_box}>+17139794269</div>
              </div>
            </div>
            <div className={user._form_right}>
              <div className={user.form_rightLeft}>
                <div className="w-full">
                  <div className="font-DM text-[20px] font-bold ">City</div>
                  <div className={user.io_ele_outPut_box}>Houston</div>
                </div>
                <div className="w-full">
                  <div className="font-DM text-[20px] font-bold pt-[20px]">
                    Country
                  </div>
                  <div className={user.io_ele_outPut_box}>United States</div>
                </div>
                <div className="w-full">
                  <div className="font-DM text-[20px] font-bold pt-[20px] ">
                    Date of birth
                  </div>
                  <div className={user.io_ele_outPut_box}>02/09/1997</div>
                </div>
              </div>
              <div className={user.form_right_right}>
                <div className="w-full">
                  <div className="font-DM text-[20px] font-bold ">State</div>
                  <div className={user.io_ele_outPut_box}>Texas</div>
                </div>
                <div className="w-full">
                  <div className="font-DM text-[20px] font-bold pt-[20px]">
                    Zip code
                  </div>
                  <div className={user.io_ele_outPut_box}>77001</div>
                </div>
                <div className="w-full">
                  <div className="font-DM text-[20px] font-bold pt-[20px]">
                    Gender
                  </div>
                  <div className={user.io_ele_outPut_box}>Male</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileUserInfoForm;
