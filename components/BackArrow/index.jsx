import React from "react";
import at from "../../Asstes/style/admin_tab.module.css";
import Image from "next/image";
import backArrow from "../../Asstes/DashboardImages/backArrow.png";
import { useRouter } from "next/router";

const BackArrow = (props) => {
  const router = useRouter();

  return (
    <div className={at.header_wraper}>
      <div className="cursor-pointer" onClick={() => router.back()}>
        <Image src={backArrow} />
      </div>
      {props.pageName.tile}{" "}
      <span className="font-normal">{props.pageName?.subtitle}</span>
    </div>
  );
};

export default BackArrow;
