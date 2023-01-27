import React from "react";

import VerificationRequestFilter from "../VerificationRequest/verificationReqFilter";
import VerifiedUserTable from "../UserVerification/VerifiedUserTable";
import BackArrow from "../../BackArrow";

const VerifiedUserBodySec = () => {
  const pageInfo={tile:"Verified Users",subtitle:""}
  return (
    <>
      <div className="body_container">
        <BackArrow pageName={pageInfo} />
        <div className="flex justify-between pt-[65px] ">
          <div></div>
          <div>
            <VerificationRequestFilter />
          </div>
        </div>
        <div className="mt-[25px] w-full">
          <VerifiedUserTable />
        </div>
      </div>
    </>
  );
};

export default VerifiedUserBodySec;
