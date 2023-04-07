import React, { useEffect, useState } from "react";
import at from "../../Asstes/style/admin_tab.module.css";
import Table from "react-bootstrap/Table";
import au from "../../Asstes/style/allUser.module.css";
import profile2 from "../../Asstes/DashboardImages/profile2.png";
import supper from "../../Asstes/DashboardImages/supper.png";
import Image from "next/image";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { getAllAdmins, deleteAdmin } from "../../redux/reducers/adminReducer";
import Swal from "sweetalert2/dist/sweetalert2.js";
import Link from "next/link";

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
  const [update, setUpdate] = useState(false);
  const dispatch = useDispatch();
  const allAdmins = useSelector((state) => state.admin.allAdmins);
  const alldminData = allAdmins.data;
  useEffect(() => {
    dispatch(getAllAdmins());
  }, [update]);

  const handleAdminDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this admin!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "This admin has been deleted.", "success").then(
          () => {
            dispatch(deleteAdmin(id));
            setUpdate(true);
          }
        );
      }
    });
  };

  return (
    <>
      <div className={at.super_admin_scroler}>
        <div className={at.supper_admin_table_wraper}>
          <Table className="all-user-table">
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
              {alldminData?.map((data, index) => {
                return (
                  <>
    
                      <tr
                        className={
                          index % 2 != 0 ? au.table_row2 : au.table_row
                        }
                      >
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
                                {data?.adminType === "superAdmin" && (
                                  <div className={at.supper}>
                                    <Image src={supper} />
                                  </div>
                                )}
                                <Image src={profile2} />
                              </div>
                              <div className="font-DM text-sm 2xl:text-base font-normal">
                                {data?.userName ? data?.userName : "null"}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="font-DM text-sm 2xl:text-base font-normal">
                          <div className="pt-[18px]">{data?.email}</div>
                        </td>
                        <td className="font-DM text-sm 2xl:text-base font-normal">
                          <div className="pt-[18px]">
                            {data?.adminType ? data?.adminType : "null"}
                          </div>
                        </td>
                        <td className="font-DM text-sm 2xl:text-base font-normal">
                          <div className="pt-[18px]">{data.id}</div>
                        </td>
                        <td className="font-DM text-sm 2xl:text-base font-normal">
                          <div className="pt-[18px]">
                            {data?.status ? data?.status : "null"}
                          </div>
                        </td>
                        <td className="font-DM text-base font-normal">
                          <div className="pt-[18px] flex gap-[10px] 2xl:gap-[30px] justify-center">
                            <div className="cursor-pointer">
                              <MdOutlineModeEditOutline className="text-[#BCBCBC] text-xl" />
                            </div>
                            <div
                              className="cursor-pointer"
                              onClick={() => handleAdminDelete(data.id)}
                            >
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
