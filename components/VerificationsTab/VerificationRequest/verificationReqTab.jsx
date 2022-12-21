import React from "react";
import { useState } from "react";
import au from "../../../Asstes/style/allUser.module.css";

const VerificationRequestTabs = () => {
  const [active, setActive] = useState(1);
  return (
    <>
      <div className={au.tabs_wrper}>
        <div
          className={active === 1 ? au.active_tabs_item : au.tabs_item}
          onClick={() => setActive(1)}
        >
          Verification Requests
        </div>
        <div
          className={active === 2 ? au.active_tabs_item : au.tabs_item}
          onClick={() => setActive(2)}
        >
          User Verifications
        </div>
        <div
          className={active === 3 ? au.active_tabs_item : au.tabs_item}
          onClick={() => setActive(3)}
        >
          Community verifications
        </div>
      </div>
    </>
  );
};

export default VerificationRequestTabs;
