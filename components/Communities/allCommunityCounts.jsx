import React from "react";
import com from "../../Asstes/style/communites.module.css";
import all from "../../Asstes/DashboardImages/all.png";
import verified from "../../Asstes/DashboardImages/verified.png";
import scribeCom from "../../Asstes/DashboardImages/scribeCom.png";
import reportCom from "../../Asstes/DashboardImages/reportCom.png";
import supper from "../../Asstes/DashboardImages/supper.png";
import Image from "next/image";

const AllCommunityCounts = () => {
  return (
    <>
      <div className={com.counts_wraper}>
        <div className={com.counts_items_box}>
          <div>
            <Image src={all} />
          </div>
          <div className="text-[20px] lg:text-[30px] font-bold font-grotesk">1000</div>
          <div className="text-base font-normal font-grotesk">
            All Communities
          </div>
        </div>
        <div className={com.counts_items_box}>
          <div>
            <Image src={verified} />
          </div>
          <div className="text-[20px] lg:text-[30px] font-bold font-grotesk">500</div>
          <div className="text-base font-normal font-grotesk">
            Verified Communities
          </div>
        </div>
        <div className={com.counts_items_box}>
          <div className="flex flex-col">
            <div className="flex justify-center">
              <Image src={supper} />
            </div>
            <Image src={scribeCom} />
          </div>
          <div className="text-[20px] lg:text-[30px] font-bold font-grotesk">30</div>
          <div className="text-base font-normal font-grotesk">
            Scribbes Communities
          </div>
        </div>
        <div className={com.counts_items_box}>
          <div>
            <Image src={reportCom} />
          </div>
          <div className="text-[20px] lg:text-[30px] font-bold font-grotesk">1000</div>
          <div className="text-base font-normal font-grotesk">
            Reported Communities
          </div>
        </div>
		<div className={com.add_com_edit}>
			<div className={com.ad_comminuty_btn}>+Add Community</div>
			<div className={com.edit_comminuty_btn}>Edit Community</div>
		</div>
      </div>
    </>
  );
};

export default AllCommunityCounts;
