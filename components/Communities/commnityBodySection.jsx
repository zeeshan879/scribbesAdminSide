import React from "react";
import Table from "react-bootstrap/Table";
import au from "../../Asstes/style/allUser.module.css";
import Image from "next/image";
import profile2 from "../../Asstes/DashboardImages/profile2.png";
import basket from "../../Asstes/DashboardImages/basket.png";
import checkMark from "../../Asstes/DashboardImages/checkMark.png";
import edit from "../../Asstes/DashboardImages/edit.png";
import error from "../../Asstes/DashboardImages/error.png";
import delte from "../../Asstes/DashboardImages/delte.png";
import q from "../../Asstes/DashboardImages/q.png";
import preArrow from "../../Asstes/DashboardImages/preArrow.png";
import nextArrow from "../../Asstes/DashboardImages/nextArrow.png";
import BackArrow from "../BackArrow";
import com from "../../Asstes/style/communites.module.css";
import AllCommunitiesTableFilters from "./AllcommunitiesTableFilter";

const CommnityBodySection = () => {
  const tableData = [
    {
      name: "Basket Hounds",
      mark: true,
      date: "15-10-2022",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      country: "United Sates",
      member: "24k",
    },
    {
      name: "Basket Hounds",
      mark: true,
      date: "15-10-2022",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      country: "United Sates",
      member: "24k",
    },
    {
      name: "Basket Hounds",
      mark: true,
      date: "15-10-2022",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      member: "24k",
    },
    {
      name: "Basket Hounds",
      mark: true,
      date: "15-10-2022",
      check: true,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      member: "24k",
    },
    {
      name: "Basket Hounds",
      mark: true,
      date: "15-10-2022",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      member: "24k",
    },
    {
      name: "Basket Hounds",
      mark: true,
      date: "15-10-2022",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      member: "24k",
    },
    {
      name: "Basket Hounds",
      mark: true,
      date: "15-10-2022",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      member: "24k",
    },
    {
      name: "Basket Hounds",
      mark: true,
      date: "15-10-2022",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      member: "24k",
    },
    {
      name: "Basket Hounds",
      mark: true,
      date: "15-10-2022",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      member: "24k",
    },
    {
      name: "Basket Hounds",
      mark: true,
      date: "15-10-2022",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      member: "24k",
    },
  ];
  return (
    <>
      <div className="body_container">
        <BackArrow pageName="Verified Communities" />
        <div className={com.filterBox_wraper}>
          <div></div>
          <div>
            <AllCommunitiesTableFilters />
          </div>
        </div>
        <div className={au.allUser_main_box}>
          <Table className="all-user-table">
            <thead>
              <tr className="h-[60px]">
                <th>
                  <div className="h-[30px] font-DM">Community Name</div>
                </th>
                <th>
                  <div className="h-[30px] font-DM">Date Created</div>
                </th>
                <th>
                  <div className="h-[30px] font-DM">IP Address</div>
                </th>
                <th>
                  <div className="h-[30px] font-DM">Id</div>
                </th>
                <th>
                  <div className="h-[30px] font-DM">Status</div>
                </th>

                <th>
                  <div className="h-[30px] font-DM">Members</div>
                </th>
                <th>
                  <div className="h-[30px] font-DM">Action</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => {
                return (
                  <>
                    <tr
                      className={index % 2 != 0 ? au.table_row2 : au.table_row}
                    >
                      <td className="w-[250px] ">
                        <div className={au.table_name}>
                          <label class="container1">
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                          </label>
                          <div className={au.table_name_inner}>
                            <div className={au.check_mark}>
                              {data.mark && <Image src={checkMark} />}
                            </div>
                            <Image src={basket} />
                            {data.name}
                          </div>
                        </div>
                      </td>
                      <td className="font-DM text-base font-normal ">
                        <div className="pt-[15px]">{data.date}</div>
                      </td>
                      <td className="font-DM text-base font-normal">
                        <div className="pt-[15px]">{data.ip}</div>
                      </td>
                      <td className="font-DM text-base font-normal">
                        <div className="pt-[15px]">{data.id}</div>
                      </td>
                      <td className="font-DM text-base font-normal">
                        <div className="pt-[15px]">{data.status}</div>
                      </td>

                      <td className="font-DM text-base font-normal">
                        <div className="pt-[15px]">{data.member}</div>
                      </td>
                      <td>
                        <div className="pt-[15px] flex items-center gap-8">
                          <div className="flex gap-4 items-center">
                            <div className="cursor-pointer">
                              <Image src={edit} />
                            </div>
                            <div className="cursor-pointer">
                              <Image src={delte} />
                            </div>
                          </div>
                          <div className="cursor-pointer">
                            <Image src={data?.issue} />
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
        <div className={au.pagination_wrap}>
          <div className="text-[#BCBCBC] font-DM text-[20px]">
            Showing 5 to 10 of 50 entries
          </div>
          <div className={au.paginatio_box}>
            <Image src={preArrow} />
            <div>1</div>
            <div className={au.active_page_count}>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>....</div>
            <div>9</div>
            <div>next</div>
            <Image src={nextArrow} />
          </div>
          <div className="w-[300px]"></div>
        </div>
      </div>
    </>
  );
};

export default CommnityBodySection;
