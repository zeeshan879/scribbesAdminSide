import React, { useState } from "react";
import DashboardLeftMenu from "../../AdminLeftMenu";
import Home from "../../../styles/Home.module.css";
import Header from "../../Header";
import VerificationBodySec from "./verificationBodySec"
import VerifiedUserBodySec from "../UserVerification/verifiedUserBodySec"
import VerifiedCommunityBodySec from "../CommunityVerification/verifiedCommuityBodySec"
import VerificationDetailsBodySec from "../VerifiedDetails/verificationDetailBodySec"
import { useSelector } from "react-redux";

const VerificationRequest = () => {
  const mangUserMenu = useSelector(
    (state) => state.allGernalFunction.mangUserMenu
  );

  return (
    <>
      <div className={Home.main_container}>
        <div className="flex h-full    justify-between w-[100%]">
          <div className={Home.left_menu}>
            <DashboardLeftMenu />
          </div>
          <div className={Home.centerView}>
            <Header />
            <VerificationBodySec />
            {/*<VerifiedUserBodySec/>*/}
            {/*<VerifiedCommunityBodySec/>*/}
            {/*<VerificationDetailsBodySec/>*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default VerificationRequest;
