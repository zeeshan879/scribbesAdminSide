import React from "react";
import ac from "../../Asstes/style/add_community.module.css";
import BackArrow from "../BackArrow";
import CommunityInformation from "./comunityInformation";
import DeskTopPreview from "./deskTopPreview";

const AddCommunityBodySec = () => {
  return (
    <>
      <div className="body_container">
        <BackArrow pageName="Add Community" />
        <div className={ac.add_com_container}>
          <CommunityInformation />
          <DeskTopPreview />
        </div>
      </div>
    </>
  );
};

export default AddCommunityBodySec;
