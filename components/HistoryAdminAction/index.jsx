import React from "react";
import cen from "../../Asstes/style/home_centerView.module.css";

const HistoryOfAdminAction = () => {
  const history = [
    {
      title: "Muhammad",
      action: "suspended Joe",
      status: "(Super admin)",
      subStatus: "(Admin)",
      time: "1h ago",
    },
    {
      title: "Muhammad",
      action: "deleted a post.",
      status: "(Super admin)",
      subStatus: "",
      time: "6h ago",
    },
    {
      title: "Muhammad",
      action: "add Joe as.",
      status: "(Super admin)",
      subStatus: "",
      time: "7h ago",
    },
    {
      title: "Joe",
      action: "verified john.",
      status: "(admin)",
      subStatus: "",
      time: "7h ago",
    },
    {
      title: "Muhammad",
      action: "deleted a post.",
      status: "(Super admin)",
      subStatus: "",
      time: "7h ago",
    },
    {
      title: "Muhammad",
      action: "deleted a post.",
      status: "(Super admin)",
      subStatus: "",
      time: "7h ago",
    },
  ];
  return (
    <>
      <div className={cen.progres_weapper}>
        <div className="text-[20px] font-grotesk font-DM text-black">
          History Of Admin Actions
        </div>
        <div className={cen.action_box}>
          {history.map((data, index) => {
            return (
              <>
                <div
                  className={
                    index % 2 === 0 ? cen.active_action_item : cen.action_item
                  }
                >
                  {data.title}
                  <span className="text-[#bcbcbc] text-xs px-[2px]">
                    {data.status}
                  </span>{" "}
                  {data.action}
                  <span className="text-[#bcbcbc] text-xs">
                    {data?.subStatus}. 1h ago
                  </span>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HistoryOfAdminAction;
