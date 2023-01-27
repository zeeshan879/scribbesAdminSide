import React from "react";
import BackArrow from "../../BackArrow";
import au from "../../../Asstes/style/allUser.module.css";
import rd from "../../../Asstes/style/reportDetail.module.css";
import profile from "../../../Asstes/DashboardImages/profile.png";
import pichacho from "../../../Asstes/DashboardImages/pichacho.png";
import preArrow from "../../../Asstes/DashboardImages/preArrow.png";
import nextArrow from "../../../Asstes/DashboardImages/nextArrow.png";
import Image from "next/image";
import Link from "next/link";

const ReportDetailBodySec = () => {
  const pageInfo={tile:"Report Details",subtitle:""}
  return (
    <>
      <div className="body_container">
        <BackArrow pageName={pageInfo} />
        <div className={rd.main_content_wrapper}>
          <div className={rd.profile_wraper}>
            <div className={rd.profile_left_box}>
              <div>
                <Image src={profile} />
              </div>
              <div className="font-DM font-bold text-base  lg:text-[20px]">John Doe</div>
              <div className={rd.view_btn}>View Profile</div>
            </div>
            <Link href="/take-action">
            <div className={rd.take_action_btn}>Take Action</div>
            </Link>
          </div>
          <div className={rd.report_details_box}>
            <div className={rd.report_img_box}>
              <div className={rd.report_img_text}>
                How to get started with NFT’s?
              </div>
              <div>
                <Image src={pichacho} />
              </div>
            </div>
            <div className="flex flex-col gap-[30px]">
              <div className="font-DM font-bold text-base lg:text-[20px]">
                Total Reports : <span className="font-normal">50</span>
              </div>
              <div className="font-DM font-bold text-base lg:text-[20px]">
                Post id: <span className="font-normal">5039920</span>
              </div>
            </div>
          </div>

          <div className={rd.report_des_slider}>
            <div className={rd.report_slider_iiner}>
              <div className="flex items-center gap-6  lg:gap-[47px]">
                <div className="cursor-pointer">
                  <Image src={preArrow} />
                </div>
                <div className={rd.report_content}>
                  <div className="flex font-DM font-bold text-xs lg:text-[20px] items-center">
                    Reported By:{" "}
                    <span className="font-normal">Someone User</span>{" "}
                    <span className="text-[#BCBCBC] text-xs pl-2 items-center flex pt-1">
                      (02-02-2022)
                    </span>
                  </div>
                  <div className="flex font-DM font-bold text-xs  lg:text-[20px] items-center pt-[10px] lg:pt-[20px]">
                    User id:
                    <span className="font-normal">878787</span>
                  </div>
                  <div className="flex pt-[20px] font-DM font-bold text-xs lg:text-[20px] items-center">
                    Report Category:
                    <span className="font-normal">
                      Spam and missleading information
                    </span>
                  </div>

                  <div className="flex font-DM pt-[20px] font-bold  text-xs lg:text-[20px] items-center">
                    Description:
                  </div>
                  <div className="max-w-[400px] text-xs  lg:text-base font-DM pt-[14px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    aliquam sit nisl tincidunt sed semper libero convallis. Amet
                    vitae pharetra, rhoncus, elit, auctor tristique lobortis
                    consectetur. Mauris suscipit blandit dolor bibendum eget at.
                  </div>
                </div>
              </div>
			  <div className="cursor-pointer">
                  <Image src={nextArrow} />
                </div>
            </div>
          </div>
		  <div className={au.pagination_wrap}>
        <div className="text-[#BCBCBC] font-DM text-[20px] w-12 xl:w-[300px]">
    
        </div>
        <div className={au.paginatio_box}>
          <Image src={preArrow} />
          <div>1</div>
          <div className={au.active_page_count}>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>....</div>
          <div>9</div>
          <div>next</div>
          <Image src={nextArrow} />
        </div>
        <div className="text-[#BCBCBC] font-DM text-[20px] w-12 xl:w-[300px]">
          </div>

      </div>
        </div>
      </div>
    </>
  );
};

export default ReportDetailBodySec;
