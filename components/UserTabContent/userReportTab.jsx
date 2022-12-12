import React from "react";
import Table from "react-bootstrap/Table";
import au from "../../Asstes/style/allUser.module.css";
import Image from "next/image";
import profile2 from "../../Asstes/DashboardImages/profile2.png";
import checkMark from "../../Asstes/DashboardImages/checkMark.png";
import edit from "../../Asstes/DashboardImages/edit.png";
import error from "../../Asstes/DashboardImages/error.png";
import delte from "../../Asstes/DashboardImages/delte.png";
import q from "../../Asstes/DashboardImages/q.png";
import preArrow from "../../Asstes/DashboardImages/preArrow.png";
import nextArrow from "../../Asstes/DashboardImages/nextArrow.png";

const UserReportTab = () => {
  const tableData = [
    {
      name: "John Doe",
      date: "15-10-2022",
      report: "Comment",
      phone: "+92 300 3399922",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      country: "United Sates",
    },
    {
      name: "John Doe",
      date: "15-10-2022",
      report: "Comment",
      phone: "+92 300 3399922",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      country: "United Sates",
    },
    {
      name: "John Doe",
      date: "15-10-2022",
      report: "Post",
      phone: "+92 300 3399922",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      country: "United Sates",
    },
    {
      name: "John Doe",
      date: "15-10-2022",
      report: "Post",
      phone: "+92 300 3399922",
      check: true,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      country: "United Sates",
    },
    {
      name: "John Doe",
      date: "15-10-2022",
      report: "Post",
      phone: "+92 300 3399922",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      country: "United Sates",
    },
    {
      name: "John Doe",
      date: "15-10-2022",
      report: "Post",
      phone: "+92 300 3399922",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      country: "United Sates",
    },
    {
      name: "John Doe",
      date: "15-10-2022",
      report: "Post",
      phone: "+92 300 3399922",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      country: "United Sates",
    },
    {
      name: "John Doe",
      date: "15-10-2022",
      report: "Post",
      phone: "+92 300 3399922",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      country: "United Sates",
    },
    {
      name: "John Doe",
      date: "15-10-2022",
      report: "Comment",
      phone: "+92 300 3399922",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      country: "United Sates",
    },
    {
      name: "John Doe",
      date: "15-10-2022",
      report: "Post",
      phone: "+92 300 3399922",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      country: "United Sates",
    },
  ];
  return (
    <>
      <div className={au.allUser_main_box}>
        <Table className="all-user-table">
          <thead>
            <tr className="h-[60px]">
              <th>
                <div className="h-[30px] font-DM">Date</div>
              </th>
              <th>
                <div className="h-[30px] font-DM">Reported Content</div>
              </th>
              <th>
                <div className="h-[30px] font-DM">IP Address</div>
              </th>
              <th>
                <div className="h-[30px] font-DM">Id</div>
              </th>
              <th>
                <div className="h-[30px] font-DM">Report Counts</div>
              </th>
              <th>
                <div className="h-[30px] font-DM">Last Report Time</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => {
              return (
                <>
                  <tr className={index % 2 != 0 ? au.table_row2 : au.table_row}>
                    <td>{data.date}</td>
                    <td className="font-DM text-base font-normal">
                      {data.report}
                    </td>
                    <td className="font-DM text-base font-normal">
                      <div className="pt-[10px]">{data.ip}</div>
                    </td>
                    <td className="font-DM text-base font-normal">
                      <div className="pt-[10px]">{data.id}</div>
                    </td>
                    <td className="font-DM text-base font-normal">
                      <div className="pt-[10px]">{data.status}</div>
                    </td>
                    <td className="font-DM text-base font-normal">
                      <div className="pt-[10px]">{data.country}</div>
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
    </>
  );
};

export default UserReportTab;
