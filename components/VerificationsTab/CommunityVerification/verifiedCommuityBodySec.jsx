import React from "react";

import VerifiedCommunityFilter from "./verifiedCommunityFillter";
import VerifiedCommunityTable from "./verifiedCommunityTable";
import BackArrow from "../../BackArrow";

const VerifiedCommunityBodySec = () => {
  return (
    <>
      <div className="body_container">
        <BackArrow pageName="Verified Communities" />
        <div className="flex justify-between pt-[65px] ">
          <div></div>
          <div>
            <VerifiedCommunityFilter />
          </div>
        </div>
        <div className="mt-[25px] w-full">
          <VerifiedCommunityTable />
        </div>
      </div>
    </>
  );
};

export default VerifiedCommunityBodySec;
