import React from "react";
import BackArrow from "../../BackArrow";

import PrivcyContent from "./privcyContent";

const PrivcyBodySec = () => {
  const pageInfo={tile:"Privacy & Safety",subtitle:""}
  return (
    <>
      <div className="body_container">
        <BackArrow pageName={pageInfo} />
        <PrivcyContent />
      </div>
    </>
  );
};

export default PrivcyBodySec;
