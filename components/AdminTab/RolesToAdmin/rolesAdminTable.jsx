import React from "react";
import Table from "react-bootstrap/Table";
import au from "../../../Asstes/style/allUser.module.css";
import Image from "next/image";
import profile2 from "../../../Asstes/DashboardImages/profile2.png";
import basket from "../../../Asstes/DashboardImages/basket.png";
import checkMark from "../../../Asstes/DashboardImages/checkMark.png";
import edit from "../../../Asstes/DashboardImages/edit.png";
import error from "../../../Asstes/DashboardImages/error.png";
import delte from "../../../Asstes/DashboardImages/delte.png";
import q from "../../../Asstes/DashboardImages/q.png";
import preArrow from "../../../Asstes/DashboardImages/preArrow.png";
import nextArrow from "../../../Asstes/DashboardImages/nextArrow.png";
import supper from "../../../Asstes/DashboardImages/supper.png";
import BackArrow from "../../BackArrow";
import com from "../../../Asstes/style/communites.module.css";


const RolesToAdminTable = () => {
  const tableData = [
    {
      name: "Basket Hounds",
      mark: true,
      date: "15-10-2022",
      check: false,
      email:"johndoe@mail.com",
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      rank:"Super Admin",
      country: "United Sates",
      member: "24k",
    },
    {
      name: "Basket Hounds",
      mark: false,
      date: "15-10-2022",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      rank:"Mod",
      status: "Active",
      email:"johndoe@mail.com",
      country: "United Sates",
      member: "24k",
    },
    {
      name: "Basket Hounds",
      mark: false,
      date: "15-10-2022",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      rank:"Mod",
      email:"johndoe@mail.com",
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
      rank:"Mod",
      email:"johndoe@mail.com",
      member: "24k",
    },
    {
      name: "Basket Hounds",
      mark: false,
      date: "15-10-2022",
      email:"johndoe@mail.com",
      check: false,
      ip: "66.249.66.24",
      rank:"Mod",
      id: "66.249.66.24",
      status: "Active",
      member: "24k",
    },
    {
      name: "Basket Hounds",
      mark: false,
      date: "15-10-2022",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      rank:"Mod",
      email:"johndoe@mail.com",
      status: "Active",
      member: "24k",
    },
    {
      name: "Basket Hounds",
      mark: false,
      date: "15-10-2022",
      check: false,
      rank:"Mod",
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      email:"johndoe@mail.com",
      member: "24k",
    },
    {
      name: "Basket Hounds",
      mark: false,
      date: "15-10-2022",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      rank:"Mod",
      status: "Active",
      email:"johndoe@mail.com",
      member: "24k",
    },
    {
      name: "Basket Hounds",
      mark: false,
      date: "15-10-2022",
      check: false,
      ip: "66.249.66.24",
      email:"johndoe@mail.com",
      id: "66.249.66.24",
      status: "Active",
      member: "24k",
      rank:"Super Admin"
    },
    {
      name: "Basket Hounds",
      mark: false,
      email:"johndoe@mail.com",
      date: "15-10-2022",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      member: "24k",
      rank:"Mod"
 
    },
  ];
  return (
    <>
  
    <div className="table_scrol_contoler">
     
        <div className={au.allUser_main_box}>
          <Table className="all-user-table" responsive>
            <thead>
              <tr className="h-[60px]">
                <th>
                  <div className="h-[30px] font-DM text-center">Admin Name</div>
                </th>
                <th>
                  <div className="h-[30px] font-DM text-center">Contact</div>
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
                  <div className="h-[30px] font-DM"></div>
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
                            <div className={au.check_super}>
                              {data.mark && <Image src={supper} />}
                            </div>
                            <Image src={profile2} />
                            {data.name}
                          </div>
                        </div>
                      </td>
                      <td className="font-DM text-base font-normal ">
                        <div className="pt-[15px] text-center">{data.email}</div>
                      </td>
                      <td className="font-DM text-base font-normal">
                        <div className="pt-[15px]">{data.rank}</div>
                      </td>
                      <td className="font-DM text-base font-normal">
                        <div className="pt-[15px]">{data.id}</div>
                      </td>
                      <td className="font-DM text-base font-normal">
                        <div className="pt-[15px]">{data.status}</div>
                      </td>
                      <td >
                        <div className={au.mange_role_btn}>
                   
                        Manage Role
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
  
  
    </>
  );
};

export default RolesToAdminTable;
