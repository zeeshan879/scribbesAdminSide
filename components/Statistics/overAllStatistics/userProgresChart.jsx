import React from "react";
import cen from "../../../Asstes/style/home_centerView.module.css";
import ProgressBar from "react-bootstrap/ProgressBar";

const UserProgressChart = () => {
  const progressBar = [
    {
      userFrom: "USA",

      country: "analysis",
    },
    {
      userFrom: "Nigeria",

      country: "analysis",
    },
    {
      userFrom: "Canada",

      country: "analysis",
    },
    {
      userFrom: "Spain",

      country: "analysis",
    },
    {
      userFrom: "Others",

      country: "analysis",
    },
  ];
  return (
    <>
      {progressBar.map((data) => {
        return (
          <>
            <div className="pt-[23px]">
              <div className="flex font-DM  justify-between text-base">
                {data.userFrom}
                <div>60%</div>
              </div>
              <div className="pt-[5px]">
                <ProgressBar
                  className={data.country}
                  style={{ height: "7px" }}
                  now={60}
                />
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default UserProgressChart;
