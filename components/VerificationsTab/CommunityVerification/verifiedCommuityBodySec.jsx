import React from "react";

import VerifiedCommunityFilter from "./verifiedCommunityFillter";
import VerifiedCommunityTable from "./verifiedCommunityTable";
import BackArrow from "../../BackArrow";

const VerifiedCommunityBodySec = () => {
  const pageInfo={tile:"Verified Communities",subtitle:""}
  return (
    <>
      <div className="body_container">
        <BackArrow pageName={pageInfo} />
        <div className="flex justify-between pt-[65px] ">
          <div></div>
          <div>
            <VerifiedCommunityFilter />
          </div>
        </div>
        <div className="mt-[15px] lg:mt-[25px] w-full">
          <VerifiedCommunityTable />
        </div>
      </div>
    </>
  );
};

export default VerifiedCommunityBodySec;
