import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import au from "../../../Asstes/style/allUser.module.css";
import Image from "next/image";
import profile2 from "../../../Asstes/DashboardImages/profile2.png";
import checkMark from "../../../Asstes/DashboardImages/checkMark.png";
import edit from "../../../Asstes/DashboardImages/edit.png";
import delte from "../../../Asstes/DashboardImages/delte.png";
import preArrow from "../../../Asstes/DashboardImages/preArrow.png";
import nextArrow from "../../../Asstes/DashboardImages/nextArrow.png";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUser,
  getUserVerificationRequest,
} from "../../../redux/reducers/userReducer";

import Swal from "sweetalert2/dist/sweetalert2.js";

const VerifiedUserTable = () => {
  const [update, setUpdate] = useState(false);
  const allUserVerificationReq = useSelector(
    (state) => state.user.allUserVerificationReq
  );
  console.log("alluserReq", allUserVerificationReq);
  const dispatch = useDispatch();
  const showAllUsersReq = allUserVerificationReq?.data;
  const handleDeleteUser = (data) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this user?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "This user has been deleted.", "success").then(
          () => {
            dispatch(deleteUser(data));
            setUpdate(true)
          }
        );
      }
    });
  };
  useEffect(() => {
    dispatch(getUserVerificationRequest());
  }, [update]);
  return (
    <>
      <div className="table_scrol_contoler">
        <div className={au.allUser_main_box}>
          <Table className="all-user-table" responsive>
            <thead>
              <tr className="h-[60px]">
                <th>
                  <div className="h-[30px] font-DM">Name</div>
                </th>
                <th>
                  <div className="h-[30px] font-DM">Contact</div>
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
                  <div className="h-[30px] font-DM">Country</div>
                </th>

                <th>
                  <div className="h-[30px] font-DM">Action</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {showAllUsersReq?.map((data, index) => {
                return (
                  <>
                    <tr
                      className={index % 2 != 0 ? au.table_row2 : au.table_row}
                    >
                      <td className="w-[200px] lg:w-[250px]">
                        <div className={au.table_name}>
                          <label class="container1">
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                          </label>
                          <div className={au.table_name_inner}>
                            <div className={au.check_mark}>
                              {data?.mark && <Image src={checkMark} />}
                            </div>
                            <Image src={profile2} />
                            {data?.userName}
                          </div>
                        </div>
                      </td>
                      <td className="font-DM text-sm lg:text-base font-normal">
                        <div>{data?.email}</div>
                        <div>{data?.phoneNo ? data.phoneNo : "null"}</div>
                      </td>
                      <td className="font-DM text-sm lg:text-base font-normal">
                        <div className="pt-[10px]">
                          {data?.IP ? data?.IP : "null"}
                        </div>
                      </td>
                      <td className="font-DM text-sm lg:text-base font-normal">
                        <div className="pt-[10px]">{data?.id}</div>
                      </td>
                      <td className="font-DM text-sm lg:text-base font-normal">
                        <div className="pt-[10px]">{data?.type}</div>
                      </td>
                      <td className="font-DM text-sm lg:text-base font-normal">
                        <div className="pt-[10px]">
                          {data.country ? data.country : "null"}
                        </div>
                      </td>
                      <td>
                        <div className="pt-[10px] flex items-center gap-8">
                          <div className="flex gap-4 items-center">
                            <div className="cursor-pointer">
                              <Image src={edit} />
                            </div>
                            <div
                              className="cursor-pointer"
                              onClick={() => handleDeleteUser(data?.id)}
                            >
                              <Image src={delte} />
                            </div>
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
      <div className={au.pagination_wrap}>
        <div className="text-[#BCBCBC] font-DM text-base lg:text-[20px]">
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
    </>
  );
};

export default VerifiedUserTable;
