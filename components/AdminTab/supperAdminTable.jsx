import React from "react";
import at from "../../Asstes/style/admin_tab.module.css";
import Table from "react-bootstrap/Table";
import au from "../../Asstes/style/allUser.module.css";
import profile2 from "../../Asstes/DashboardImages/profile2.png";
import supper from "../../Asstes/DashboardImages/supper.png";
import Image from "next/image";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const SupperAdminTable = () => {
  const tableData = [
    {
      name: "John Doe",
      date: "15-10-2022",
      profile: profile2,
      email: "johndoe@mail.com",
      supper: true,
      rank: "Super Admin",
      id: "66.249.66.24",
      status: "Active",
    },
    {
      name: "John Doe",
      date: "15-10-2022",
      profile: profile2,
      email: "johndoe@mail.com",
      supper: false,
      rank: "Mode",
      id: "66.249.66.24",
      status: "Active",
    },
    {
      name: "John Doe",
      date: "15-10-2022",
      profile: profile2,
      email: "johndoe@mail.com",
      supper: true,
      rank: "Mode",
      id: "66.249.66.24",
      status: "Active",
    },
    {
      name: "John Doe",
      date: "15-10-2022",
      profile: profile2,
      email: "johndoe@mail.com",
      check: false,
      rank: "supper admin",
      id: "66.249.66.24",
      status: "Active",
    },
    {
      name: "John Doe",
      date: "15-10-2022",
      profile: profile2,
      email: "johndoe@mail.com",
      supper: true,
      rank: "Super Admin",
      id: "66.249.66.24",
      status: "Active",
    },
    {
      name: "John Doe",
      date: "15-10-2022",
      profile: profile2,
      email: "johndoe@mail.com",
      supper: false,
      rank: "Super Admin",
      id: "66.249.66.24",
      status: "Active",
    },
  ];
  return (
 <>
        <div className={at.super_admin_scroler}>
 <div className={at.supper_admin_table_wraper}>
        <Table className="all-user-table" >
          <thead>
            <tr className="h-[60px]">
              <th>
                <div className="h-[30px] font-DM ">Admin Name</div>
              </th>
              <th>
                <div className="h-[30px] font-DM">Contact</div>
              </th>
              <th>
                <div className="h-[30px] font-DM">Rank</div>
              </th>
              <th>
                <div className="h-[30px] font-DM">Id</div>
              </th>
              <th>
                <div className="h-[30px] font-DM">Status</div>
              </th>
              <th>
                <div className="h-[30px] font-DM text-center">Action</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => {
              return (
                <>
                  <tr className={index % 2 != 0 ? au.table_row2 : au.table_row}>
                    <td>
                      <div className={at.profile_td}>
                        <div>
                          <label class="container1">
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                          </label>
                        </div>
                        <div className="flex items-center gap-[10px] 2xl:gap-[18px]">
                          <div className="relative">
                            <div className={at.supper}>
                              {data.supper && <Image src={supper} />}
                            </div>
                            <Image src={data.profile} />
                          </div>
                          <div className="font-DM text-sm 2xl:text-base font-normal">
                            {data.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="font-DM text-sm 2xl:text-base font-normal">
                      <div className="pt-[18px]">{data.email}</div>
                    </td>
                    <td className="font-DM text-sm 2xl:text-base font-normal">
                      <div className="pt-[18px]">{data.rank}</div>
                    </td>
                    <td className="font-DM text-sm 2xl:text-base font-normal">
                      <div className="pt-[18px]">{data.id}</div>
                    </td>
                    <td className="font-DM text-sm 2xl:text-base font-normal">
                      <div className="pt-[18px]">{data.status}</div>
                    </td>
                    <td className="font-DM text-base font-normal">
                      <div className="pt-[18px] flex gap-[10px] 2xl:gap-[30px] justify-center">
                        <div className="cursor-pointer">
                          <MdOutlineModeEditOutline className="text-[#BCBCBC] text-xl" />
                        </div>
                        <div className="cursor-pointer">
                          <RiDeleteBin6Line className="text-[#BCBCBC] text-xl" />
                        </div>
                      </div>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>

      </div>
      </div>
      <div className="flex justify-center cursor-pointer pt-[10px] lg:pt-[20px] pb-[10px] lg:pb-[40px] underline font-DM">
          See all communities
        </div>
    </>
  );
};

export default SupperAdminTable;
