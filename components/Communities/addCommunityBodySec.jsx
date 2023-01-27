import React from "react";
import ac from "../../Asstes/style/add_community.module.css";
import BackArrow from "../BackArrow";
import CommunityInformation from "./comunityInformation";
import DeskTopPreview from "./deskTopPreview";

const AddCommunityBodySec = () => {
  const pageInfo={tile:"Add Community",subtitle:""}
  return (
    <>
      <div className="body_container">
        <BackArrow pageName={pageInfo} />
        <div className={ac.add_com_container}>
          <CommunityInformation />
          <DeskTopPreview />
        </div>
      </div>
    </>
  );
};

export default AddCommunityBodySec;
