import React from "react";
import vd from "../../../Asstes/style/verifyDetails.module.css";
import BackArrow from "../../BackArrow";
import profile from "../../../Asstes/DashboardImages/profile.png";
import Image from "next/image";
import VerifyProfileStep1 from "./verificationStep1";
import VerifyProfileStep2 from "./verificationStep2"

const VerificationDetailsBodySec = () => {
  return (
    <>
      <div className="body_container">
        <BackArrow pageName="Verified Users" />
        <div className={vd.main_conten_box}>
          <div className={vd.profile_box}>
            <div className="flex gap-[35px] items-center">
              <div className="flex justify-center pl-2">
                <Image src={profile} />
              </div>
              <div className={vd.view_btn}>View Profile</div>
            </div>
            <div className="font-DM text-[20px]">John Doe</div>
          </div>

          <div className="w-full">
            <VerifyProfileStep1 />
          </div>
          <div className="w-full pt-4">
            <VerifyProfileStep2/>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerificationDetailsBodySec;
