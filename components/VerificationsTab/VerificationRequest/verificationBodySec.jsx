import React from "react";
import VerificationReqQunts from "./verificationReqQunts";
import VerificationRequestTabs from "./verificationReqTab";
import VerificationRequestFilter from "./verificationReqFilter";
import VerificationReqTable from "./verificationReqTable";

const VerificationBodySec = () => {
  return (
    <>
      <div className="body_container">
        <VerificationReqQunts />
        <div className="flex justify-between pt-[65px] ">
          <div>
            <VerificationRequestTabs />
          </div>
          <div>
            <VerificationRequestFilter />
          </div>
        </div>
        <div className="mt-[25px] w-full">
          <VerificationReqTable />
        </div>
      </div>
    </>
  );
};

export default VerificationBodySec;
