import React from "react";
import vq from "../../../Asstes/style/verificationtab.module.css";
import verified from "../../../Asstes/DashboardImages/verified.png";
import req from "../../../Asstes/DashboardImages/req.png";
import vuser from "../../../Asstes/DashboardImages/vuser.png";
import Image from "next/image";

const VerificationReqQunts = () => {
  const qountsArray = [
    {
      icon: req,
      total: "1000",
      des: "Verification Requests",
    },
    {
      icon: vuser,
      total: "5000",
      des: "Verified Users",
    },
    {
      icon: verified,
      total: "1000",
      des: "Verified Communities",
    },
  ];

  return (
    <>
      <div className={vq.wraper}>
        {qountsArray.map((data) => {
          return (
            <>
              <div className={vq.items_box}>
                <div>
                  <Image src={data.icon} />
                </div>
                <div className="font-DM text-[30px]">{data.total}</div>
                <div className="font-grotesk text-base">{data.des}</div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default VerificationReqQunts;
