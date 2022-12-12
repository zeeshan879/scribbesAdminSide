import React from "react";
import cen from "../../Asstes/style/home_centerView.module.css";
import ProgressBar from "react-bootstrap/ProgressBar";

const ProgressBars = () => {
  const progressBar = [
    {
      userFrom: " Users From USA",
      totalUser: "3M",
      country: "usa",
    },
    {
      userFrom: " Users From Nigeria",
      totalUser: "(2.5M",
      country: "nigeria",
    },
    {
      userFrom: " Users From Canada",
      totalUser: "2M",
      country: "canada",
    },
    {
      userFrom: " Users From Spain",
      totalUser: "2M",
      country: "spain",
    },
    {
      userFrom: "Users From Dubai",
      totalUser: "1.2M",
      country: "dubai",
    },
  ];
  return (
    <>
      <div className={cen.progres_weapper}>
        {progressBar.map((data) => {
          return (
            <>
              <div>
                <div className={cen.progres_status}>
                  {data.userFrom}{" "}
                  <span className="text-xs text-[#BCBCBC]">
                    ({data.totalUser})
                  </span>
                </div>
                <div className="pt-[5px]">
                  <ProgressBar
                    className={data.country}
                    style={{ height: "7px" }}
                    now={80}
                  />
                </div>
              </div>
            </>
          );
        })}
        {/*<div>
          <div className={cen.progres_status}>
            Users From Nigeria{" "}
            <span className="text-xs text-[#BCBCBC]">(2.5M)</span>
          </div>
          <div className="pt-[5px]">
            <ProgressBar   style={{ height: "7px" }} now={80} />
          </div>
        </div>
        <div>
          <div className={cen.progres_status}>
            Users From Canada{" "}
            <span className="text-xs text-[#BCBCBC]">((2M))</span>
          </div>
          <div className="pt-[5px]">
            <ProgressBar  style={{ height: "7px" }} now={80} />
          </div>
        </div>
        <div>
          <div className={cen.progres_status}>
            Users From Spain{" "}
            <span className="text-xs text-[#BCBCBC]">(3M)</span>
          </div>
          <div className="pt-[5px]">
            <ProgressBar  style={{ height: "7px" }} now={80} />
          </div>
        </div>
        <div>
          <div className={cen.progres_status}>
            Users From Dubai{" "}
            <span className="text-xs text-[#BCBCBC]">(3M)</span>
          </div>
          <div className="pt-[5px]">
            <ProgressBar className="dubai"  style={{ height: "7px" }} now={80} />
          </div>
        </div>*/}
      </div>
    </>
  );
};

export default ProgressBars;
