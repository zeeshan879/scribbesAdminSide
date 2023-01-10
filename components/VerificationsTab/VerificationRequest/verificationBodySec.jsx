import React from "react";
import VerificationReqQunts from "./verificationReqQunts";
import VerificationRequestTabs from "./verificationReqTab";
import VerificationRequestFilter from "./verificationReqFilter";
import VerificationReqTable from "./verificationReqTable";
import AllUsersFilters from "../../AllUsers/allUsersFilters"
import vr from "../../../Asstes/style/verificationtab.module.css"

const VerificationBodySec = () => {
  return (
    <>
      <div className="body_container">
        <VerificationReqQunts />
        <div className={vr.verify_req_filter_box}>
          <div>
            <VerificationRequestTabs />
          </div>
          <div>
            <AllUsersFilters />
          </div>
        </div>
        <div className="mt-[15px] lg:mt-[25px] w-full">
          <VerificationReqTable />
        </div>
      </div>
    </>
  );
};

export default VerificationBodySec;
