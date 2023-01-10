import React from "react";
import VerificationReqQunts from "./verificationReqQunts";
import VerificationRequestTabs from "./verificationReqTab";
import VerificationRequestFilter from "./verificationReqFilter";
import VerifiedUserTable from "../UserVerification/VerifiedUserTable";
import BackArrow from "../../BackArrow";
import AllUsersFilters from "../../AllUsers/allUsersFilters"

const VerifiedUserBodySec = () => {
  return (
    <>
      <div className="body_container">
        <BackArrow pageName="Verified Users" />
        <div className="flex justify-between pt-[65px] ">
          <div></div>
          <div>
            <AllUsersFilters />
          </div>
        </div>
        <div className="mt-[15px] lg:mt-[25px] w-full">
          <VerifiedUserTable />
        </div>
      </div>
    </>
  );
};

export default VerifiedUserBodySec;
