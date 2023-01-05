import React from "react";
import Table from "react-bootstrap/Table";
import au from "../../Asstes/style/allUser.module.css";
import Image from "next/image";

import basket from "../../Asstes/DashboardImages/basket.png";
import profileArrow from "../../Asstes/DashboardImages/profileArrow.png";
import { useState } from "react";

const UserCommunityTable = () => {
  const [toggle, setToggle] = useState(false);
  const tableData = [
    {
      name: "Basket Hounds",
      profile: basket,
      date: "15-10-2022",
      Members: "24k",
      phone: "+92 300 3399922",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      LastVisited: "24h ago",
      country: "United Sates",
    },
    {
      name: "Basket Hounds",
      date: "15-10-2022",
      profile: basket,
      Members: "24k",
      phone: "+92 300 3399922",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      LastVisited: "24h ago",
      country: "United Sates",
    },
    {
      name: "Basket Hounds",
      date: "15-10-2022",
      profile: basket,
      Members: "24k",
      phone: "+92 300 3399922",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      LastVisited: "24h ago",
      country: "United Sates",
    },
    {
      name: "Basket Hounds",
      date: "15-10-2022",
      profile: basket,
      Members: "24k",
      phone: "+92 300 3399922",
      check: true,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      LastVisited: "24h ago",
      country: "United Sates",
    },
    {
      name: "Basket Hounds",
      date: "15-10-2022",
      profile: basket,
      Members: "24k",
      phone: "+92 300 3399922",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      LastVisited: "24h ago",
      country: "United Sates",
    },
    {
      name: "Basket Hounds",
      date: "15-10-2022",
      profile: basket,
      Members: "24k",
      phone: "+92 300 3399922",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      LastVisited: "24h ago",
      country: "United Sates",
    },
    {
      name: "Basket Hounds",
      date: "15-10-2022",
      profile: basket,
      Members: "24k",
      phone: "+92 300 3399922",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      LastVisited: "24h ago",
      country: "United Sates",
    },
    {
      name: "Basket Hounds",
      date: "15-10-2022",
      profile: basket,
      Members: "24k",
      phone: "+92 300 3399922",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      LastVisited: "24h ago",
      country: "United Sates",
    },
    {
      name: "Basket Hounds",
      date: "15-10-2022",
      profile: basket,
      Members: "24k",
      phone: "+92 300 3399922",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      LastVisited: "24h ago",
      country: "United Sates",
    },
    {
      name: "Basket Hounds",
      date: "15-10-2022",
      profile: basket,
      Members: "24k",
      phone: "+92 300 3399922",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      LastVisited: "24h ago",
      country: "United Sates",
    },
  ];
  return (
    <>
	      <div className="flex justify-end pr-[10px] lg:pr-[85px]">
          <div className={au.community_add}>
            Communities Joined <Image src={profileArrow} />
          </div>
        </div>
        <div className="table_scrol_contoler">
      <div className={au.allUser_main_box}>
  
        <Table className="all-user-table">
          <thead>
            <tr className="h-[60px]">
              <th>
                <div className="h-[30px] font-DM">Community Name</div>
              </th>
              <th>
                <div className="h-[30px] font-DM">Joining Date</div>
              </th>

              <th>
                <div className="h-[30px] font-DM">IP Address</div>
              </th>
              <th>
                <div className="h-[30px] font-DM">Id</div>
              </th>
              <th>
                <div className="h-[30px] font-DM">Last Visited</div>
              </th>
              <th>
                <div className="h-[30px] font-DM">Members</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => {
              return (
                <>
                  <tr className={index % 2 != 0 ? au.table_row2 : au.table_row}>
                    <td>
                      <div className="flex gap-[18px] items-center font-DM">
                        <Image src={data.profile} />
                        {data.name}
                      </div>
                    </td>
                    <td className="font-DM text-base font-normal">
                      {data.date}
                    </td>
                    <td className="font-DM text-base font-normal">
                      <div className="pt-[10px]">{data.ip}</div>
                    </td>
                    <td className="font-DM text-base font-normal">
                      <div className="pt-[10px]">{data.id}</div>
                    </td>
                    <td className="font-DM text-base font-normal">
                      <div className="pt-[10px]">{data.LastVisited}</div>
                    </td>
                    <td className="font-DM text-base font-normal">
                      <div className="pt-[10px]">{data.Members}</div>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
		<div className="flex justify-center cursor-pointer pt-[40px] pb-[40px] underline font-DM">
		See all  communities
		</div>
      </div>
      </div>
    </>
  );
};

export default UserCommunityTable;
