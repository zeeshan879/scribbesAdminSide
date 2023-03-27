import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
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
import Link from "next/link";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { getAllUsers, deleteUser } from "../../redux/reducers/userReducer";
import { useDispatch, useSelector } from "react-redux";

const AllUserTable = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.user.allUsers);

  const handleDeleteUser = (data) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to delete this user!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'this user has been deleted.',
          'success'
        ).then(()=>{
          dispatch(deleteUser(data));
        })
      }
    })
  };

  const items = [
    {
      name: "John Doe",
      mark: true,
      email: "johndoe@mail.com",
      phone: "+92 300 3399922",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      country: "United Sates",
      issue: error,
    },
    {
      name: "John Doe",
      mark: true,
      email: "johndoe@mail.com",
      phone: "+92 300 3399922",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      country: "United Sates",
      issue: q,
    },
    {
      name: "John Doe",
      mark: false,
      email: "johndoe@mail.com",
      phone: "+92 300 3399922",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      country: "United Sates",
    },
    {
      name: "John Doe",
      mark: true,
      email: "johndoe@mail.com",
      phone: "+92 300 3399922",
      check: true,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      country: "United Sates",
    },
    {
      name: "John Doe",
      mark: false,
      email: "johndoe@mail.com",
      phone: "+92 300 3399922",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      country: "United Sates",
    },
    {
      name: "John Doe",
      mark: false,
      email: "johndoe@mail.com",
      phone: "+92 300 3399922",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      country: "United Sates",
    },
    {
      name: "John Doe",
      mark: false,
      email: "johndoe@mail.com",
      phone: "+92 300 3399922",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      country: "United Sates",
    },
    {
      name: "John Doe",
      mark: false,
      email: "johndoe@mail.com",
      phone: "+92 300 3399922",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      country: "United Sates",
    },
    {
      name: "John Doe",
      mark: false,
      email: "johndoe@mail.com",
      phone: "+92 300 3399922",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      country: "United Sates",
    },
    {
      name: "John Doe",
      mark: false,
      email: "johndoe@mail.com",
      phone: "+92 300 3399922",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      country: "United Sates",
    },
  ];

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item) => (
            <div>
              {console.log("items======>", item.name)}
              {/* <h3>Item #{item}</h3> */}
            </div>
          ))}
      </>
    );
  }

  function PaginatedItems({ itemsPerPage }) {
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };

    return (
      <>
        <Items currentItems={currentItems} />
        <ReactPaginate
          breakLabel="..."
          nextLabel={<Image src={nextArrow} />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel={<Image src={preArrow} />}
          renderOnZeroPageCount={null}
          pageClassName="text-[#BCBCBC] text-[20px] mx-[8px] h-[23px]  w-[23px] flex justify-center items-center cursor-pointer"
          activeClassName="active bg-[#1CAC19] h-[23px] w-[23px] flex justify-center items-center rounded-[3px] text-white"
          breakLinkClassName="page-link"
          containerClassName="pagination"
        />
      </>
    );
  }
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <>
      <div className="table_scrol_contoler">
        <div className={au.allUser_main_box}>
          <Table className="all-user-table" responsive>
            <thead>
              <tr className="h-[50px] 2xl:h-[60px]">
                <th>
                  <div className="h-[25px] 2xl:h-[30px] font-DM">Name</div>
                </th>
                <th>
                  <div className="h-[25px] 2xl:h-[30px] font-DM">Contact</div>
                </th>
                <th>
                  <div className="h-[25px] 2xl:h-[30px] font-DM">
                    IP Address
                  </div>
                </th>
                <th>
                  <div className="h-[25px] 2xl:h-[30px] font-DM">Id</div>
                </th>
                <th>
                  <div className="h-[25px] 2xl:h-[30px] font-DM">Status</div>
                </th>
                <th>
                  <div className="h-[25px] 2xl:h-[30px] font-DM">Country</div>
                </th>
                <th>
                  <div className="h-[25px] 2xl:h-[30px] font-DM">Action</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {allUsers?.data.map((data, index) => {
                return (
                  <>
                    <Link href={`/users/user-information?id=${data.id} `}>
                    <tr
                      className={index % 2 != 0 ? au.table_row2 : au.table_row}
              
                    >
                      <td className="w-[200px] 2xl:w-[250px] ">
                        <div className={au.table_name}>
                   
                     
                          <label class="container1">
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                          </label>
                          <div className={au.table_name_inner}>
                            <div className={au.check_mark}>
                              {data.mark && <Image src={checkMark} />}
                            </div>
                            {/* <Image src={`http://localhost:5000/${data?.profilePic}`} height="57px" width="57px" /> */}
                            <Image src={profile2} />
                            {data?.userName}
                          </div>
                        </div>
                      </td>
                      <td className="font-DM text-sm 2xl:text-base font-normal">
                        <div>{data?.email}</div>
                        <div>{data?.phoneNo ? data.phoneNo : "null"}</div>
                      </td>
                      <td className="font-DM text-sm 2xl:text-base font-normal">
                        <div className="pt-[10px]">
                          {data?.IP ? data.IP : "null"}
                        </div>
                      </td>
                      <td className="font-DM text-sm 2xl:text-base font-normal">
                        <div className="pt-[10px]">{data?.id}</div>
                      </td>
                      <td className="font-DM text-sm 2xl:text-base font-normal">
                        <div className="pt-[10px]">{data?.status?data?.status:"null"}</div>
                      </td>
                      <td className="font-DM text-sm 2xl:text-base font-normal">
                        <div className="pt-[10px]">{data?.userLocation}</div>
                      </td>
                      <td>
                        <div className="pt-[10px] flex items-center gap-[15px] 2xl:gap-8">
                          <div className="flex gap-3 2xl:gap-4 items-center">
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
                          <div className="cursor-pointer">
                            <Image src={data?.issue} />
                          </div>
                        </div>
                      </td>
                    </tr>
                    </Link>
                  </>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
      <div className={au.pagination_wrap}>
        <div className="text-[#BCBCBC] font-DM text-base 2xl:text-[20px]">
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
        <div className="w-[50px] lg:w-[100px] 2xl:w-[300px]"></div>
      </div>
      <div className="flex justify-center">
        <PaginatedItems itemsPerPage={4} />
      </div>
    </>
  );
};

export default AllUserTable;
