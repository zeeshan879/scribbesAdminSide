import React from "react";
import vp from "../../../Asstes/style/verifyDetails.module.css";
import chose from "../../../Asstes/DashboardImages/chose.png";
import Image from "next/image";

const VerifyProfileStep1 = () => {
  return (
    <>
      <div className={vp.step1_box}>
        <div className="text-[16px] lg:text-[20px] font-DM font-bold">
        Step 1: Authenticity Confirmation
        </div>
        <div className="max-w-[900px] text-base font-DM leading-5 pt-3">
          Add an official identification document for yourself to show that your
          profile is connected to the public figure, celebrity or brand it
          represents.
        </div>
        <div className="pt-3 text-base font-DM font-bold">Document Attached</div>
        <div className={vp.step1_driving_license}>
          <div className="font-DM">Driving License</div>
 
        </div>
        <div className="pt-[22px] text-base font-DM font-bold">
        View Document
        </div>
        <div className={vp.view_docu_btn}>View</div>

      </div>
    </>
  );
};

export default VerifyProfileStep1;
