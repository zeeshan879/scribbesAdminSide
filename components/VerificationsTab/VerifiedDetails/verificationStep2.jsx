import React from "react";
import vp from "../../../Asstes/style/verifyDetails.module.css";
import chose from "../../../Asstes/DashboardImages/chose.png";
import Image from "next/image";

const VerifyProfileStep2 = () => {
  return (
    <>
      <div className={vp.verify_profile_step2}>
        <div className="text-[18px] sm:text-[20px] font-DM font-bold">
		Step 2: Notability Confirmation
        </div>
        <div className="max-w-[900px] text-base font-DM leading-5 pt-3">
		It Show’s that the user is a public figure, celebrity or profile represents is in the public interest.
        </div>
        <div className="pt-[16px] text-base font-DM font-bold">Category</div>
        <div className={vp.step1_driving_license}>
          <div className="font-DM">Sports</div>

        </div>
		<div className="pt-[21px] text-base font-DM font-bold">Country/Region</div>

        <div className={vp.step1_driving_license}>
          <div className="font-DM">USA</div>

        </div>
		<div className="pt-[22px] text-base font-DM font-bold">Audience (optional)</div>
        <div className={vp.step1_driving_license}>
          <div className="font-DM">People intrested in sports are my followers.</div>

        </div>

		<div className="pt-[22px] text-base font-DM font-bold">Also known as (optional)</div>

        <div className={vp.step1_driving_license}>
          <div className="font-DM text-[#BCBCBC]">(not mentioned)</div>

        </div>
		<div className="max-w-[1000px] text-base font-DM leading-5 pt-8">
		Links to Social media accounts
        </div>
		<div className={vp.form_item_link}>
			<input className={vp.form_ele} />
		</div>
		<div className={vp.form_item_link}>
			<input className={vp.form_ele} placeholder="Link 2" />
		</div>
		<div className={vp.form_item_link}>
			<input className={vp.form_ele} placeholder="Link 3" />
		</div>
		<div className={vp.form_item_link}>
			<input className={vp.form_ele} placeholder="Link 4" />
		</div>
		<div className={vp.form_item_link}>
			<input className={vp.form_ele} placeholder="Link 5" />
		</div>

		<div className="flex justify-end">
		<div className="flex gap-[10px] items-center">
		<div className={vp.step2_deny_btn}>Deny</div>
		<div className={vp.step2_save_btn}>Verify</div>
		</div>
		</div>
      </div>
    </>
  );
};

export default VerifyProfileStep2;
