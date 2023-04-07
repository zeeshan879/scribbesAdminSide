import React,{useState,useEffect} from "react";
import Table from "react-bootstrap/Table";
import au from "../../../Asstes/style/allUser.module.css";
import Image from "next/image";
import basket from "../../../Asstes/DashboardImages/basket.png";
import checkMark from "../../../Asstes/DashboardImages/checkMark.png";
import edit from "../../../Asstes/DashboardImages/edit.png";
import delte from "../../../Asstes/DashboardImages/delte.png";
import preArrow from "../../../Asstes/DashboardImages/preArrow.png";
import nextArrow from "../../../Asstes/DashboardImages/nextArrow.png";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { useDispatch, useSelector } from "react-redux";
import {deleteCommunityReq,getCommunityVerificationRequest} from "../../../redux/reducers/userReducer"

const VerifiedCommunityTable = () => {
  const allCommunityVerificationReq = useSelector(
    (state) => state.user.allCommunityVerificationReq
  );
  console.log("allCommunityVerificationReq==>", allCommunityVerificationReq);
  const showAllCommunityReq = allCommunityVerificationReq?.data;
  const [update, setUpdate] = useState(false);
  const dispatch=useDispatch()
  const handleDeleteCommunity = (data) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this community?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "This community has been deleted.", "success").then(
          () => {
            dispatch(deleteCommunityReq(data));
            setUpdate(true)
          }
        );
      }
    });
  };
  useEffect(() => {
    dispatch(getCommunityVerificationRequest());
    console.log("effet is running")
  }, [update]);
  return (
    <>
      <div className="table_scrol_contoler">
        <div className={au.allUser_main_box}>
          <Table className="all-user-table">
            <thead>
              <tr className="h-[60px]">
                <th>
                  <div className="h-[30px] font-DM text-center">
                    Community Name
                  </div>
                </th>
                <th>
                  <div className="h-[30px] font-DM text-center">
                    Date Created
                  </div>
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
              {showAllCommunityReq?.map((data, index) => {
                return (
                  <>
                    <tr
                      className={index % 2 != 0 ? au.table_row2 : au.table_row}
                    >
                      <td className="w-[210px] lg:w-[250px]">
                        <div className={au.table_name}>
                          <label class="container1">
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                          </label>
                          <div className={au.table_name_inner}>
                            <div className={au.check_mark}>
                             <Image src={checkMark} />
                            </div>
                            <Image src={basket} />
                            {data?.communityName}
                          </div>
                        </div>
                      </td>
                      <td className="font-DM text-sm lg:text-base font-normal">
                        <div className="pt-[15px] text-center">
                          {data?.createdAt}
                        </div>
                      </td>
                      <td className="font-DM text-sm lg:text-base font-normal">
                        <div className="pt-[15px]">
                          {data.IP ? data.Ip : "null"}
                        </div>
                      </td>
                      <td className="font-DM text-sm lg:text-base font-normal">
                        <div className="pt-[15px]">
                          {data?.id ? data.id : "null"}
                        </div>
                      </td>
                      <td className="font-DM text-sm lg:text-base font-normal">
                        <div className="pt-[15px]">{data?.type}</div>
                      </td>
                      <td className="font-DM text-sm lg:text-base font-normal">
                        <div className="pt-[15px]">
                          {data?.member ? data.member : "null"}
                        </div>
                      </td>
                      <td>
                        <div className="pt-[15px] flex items-center gap-8">
                          <div className="flex gap-4 items-center">
                            <div className="cursor-pointer">
                              <Image src={edit} />
                            </div>
                            <div className="cursor-pointer" onClick={()=>handleDeleteCommunity(data?.id)}>
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
    </>
  );
};

export default VerifiedCommunityTable;
