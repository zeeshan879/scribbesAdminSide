import React from "react";
import BackArrow from "../../BackArrow";

import PrivcyContent from "./privcyContent";

const PrivcyBodySec = () => {
  return (
    <>
      <div className="body_container">
        <BackArrow pageName="Privacy & Safety" />
        <PrivcyContent />
      </div>
    </>
  );
};

export default PrivcyBodySec;
