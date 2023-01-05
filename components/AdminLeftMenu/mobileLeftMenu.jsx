import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import lbar from "../../Asstes/style/homeLeftmenu.module.css";
import Image from "next/image";
import arrowDown from "../../Asstes/DashboardImages/arrowDown.png";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import {
  handelaActivePageTab,
  handelMangUserMenu,
  handleSidebarDropDown,
} from "../../redux/reducers/scribbes";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

const MobileLeftMenu = (props) => {
  const router = useRouter();
  const pathName = router.pathname;
  const [active, setActive] = useState(true);
  const [subItem, setSubItem] = useState(0);

  const adminTab = useSelector((state) => state.allGernalFunction.adminTab);
  const sidebarDropDown = useSelector(
    (state) => state.allGernalFunction.sidebarDropDown
  );


  const dispatch = useDispatch();
  const handleDashBoardHome = (data) => {
    if (data) {
      setActive(false);
    } else {
      setActive(true);
      dispatch(handelaActivePageTab(1));
    }
  };


  return (
    <>
      <Offcanvas className={lbar.mobile_left_side} show={props.state} onHide={props.onClick}>

        <div className={lbar.home_left_bar}>
          <div className="flex justify-end px-4 pt-3 text-xl cursor-pointer" onClick={props.onClick}>
            <AiOutlineClose/>
          </div>
        <Link href="/">
          <div className={lbar.left_bar_logo}>Scribbes</div>
        </Link>
        <div className={lbar.left_menu_search}>
          <div className={lbar.search_opt}>
            <input placeholder="Search name, ip etc " className={lbar.search_ele} />
          </div>
        </div>
        <div className={lbar.box_wrapper}>
          <Link href="/">
            <div
              className={
                active == true
                  ? lbar.active_leftMenuHeading
                  : lbar.leftMenuHeading
              }
              onClick={() => handleDashBoardHome(false)}
            >
              Dashboard
            </div>
          </Link>

          <div className={lbar.menu_box}>
            <Accordion
              className="left"
              defaultActiveKey={sidebarDropDown}
              onClick={() => handleDashBoardHome(true)}
            >
              <Accordion.Item eventKey="0">
                <Accordion.Header
                  className={lbar.menu_items}
                  onClick={() => dispatch(handleSidebarDropDown("0"))}
                >
                  <div>Users</div>
                </Accordion.Header>

                <Accordion.Body>
                  <div className={lbar.subContentBox}>
                    <Link href="/All-users">
                      <div
                        className={
                          pathName === "/All-users"
                            ? lbar.active_menu_subitems
                            : lbar.menu_subitems
                        }
                      >
                        <div
                          className={
                            pathName === "/All-users"
                              ? lbar.active_fullstop
                              : lbar.fullstop
                          }
                        ></div>{" "}
                        All users
                      </div>
                    </Link>

                    <div
                      className={
                        pathName === "/verified-users"
                          ? lbar.active_menu_subitems
                          : lbar.menu_subitems
                      }
                      onClick={() => dispatch(handelMangUserMenu(3))}
                    >
                      <div
                        className={
                          pathName === "/verified-users"
                            ? lbar.active_fullstop
                            : lbar.fullstop
                        }
                      ></div>{" "}
                      Verified users
                    </div>
                    <div
                      className={
                        pathName === "/suspended-users"
                          ? lbar.active_menu_subitems
                          : lbar.menu_subitems
                      }
                      onClick={() => dispatch(handelMangUserMenu(4))}
                    >
                      <div
                        className={
                          pathName === "/suspended-users"
                            ? lbar.active_fullstop
                            : lbar.fullstop
                        }
                      ></div>{" "}
                      Suspended users
                    </div>
                    <div
                      className={
                        pathName === "/Reported-users"
                          ? lbar.active_menu_subitems
                          : lbar.menu_subitems
                      }
                      onClick={() => dispatch(handelMangUserMenu(5))}
                    >
                      <div
                        className={
                          pathName === "/Reported-users"
                            ? lbar.active_fullstop
                            : lbar.fullstop
                        }
                      ></div>{" "}
                      Reported users
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header
                  className={lbar.menu_items}
                  onClick={() => dispatch(handleSidebarDropDown("1"))}
                >
                  Admin
                </Accordion.Header>

                <Accordion.Body>
                  <div className={lbar.subContentBox}>
                    <Link href="/super-admin">
                      <div
                        className={
                          pathName === "/super-admin"
                            ? lbar.active_menu_subitems
                            : lbar.menu_subitems
                        }
                      >
                        <div
                          className={
                            pathName === "/super-admin"
                              ? lbar.active_fullstop
                              : lbar.fullstop
                          }
                        ></div>{" "}
                        Super Admins
                      </div>
                    </Link>
                    <Link href="/add-admin">
                      <div
                        className={
                          pathName === "/add-admin"
                            ? lbar.active_menu_subitems
                            : lbar.menu_subitems
                        }
                      >
                        <div
                          className={
                            pathName === "/add-admin"
                              ? lbar.active_fullstop
                              : lbar.fullstop
                          }
                        ></div>{" "}
                        Add Admin
                      </div>
                    </Link>
                    <Link href="/assign-role">
                    <div
                      className={
                        pathName === "/assign-role"
                          ? lbar.active_menu_subitems
                          : lbar.menu_subitems
                      }
                    >
                      <div
                        className={
                          pathName === "/assign-role"
                            ? lbar.active_fullstop
                            : lbar.fullstop
                        }
                      ></div>{" "}
                      Create Role
                    </div>
                    </Link>
                <Link href="roles-to-admin" >
                    <div
                      className={
                        pathName === "/roles-to-admin"
                          ? lbar.active_menu_subitems
                          : lbar.menu_subitems
                      }
                    >
                      <div
                        className={
                          pathName === "/roles-to-admin"
                            ? lbar.active_fullstop
                            : lbar.fullstop
                        }
                      ></div>{" "}
                      Roles to Admin
                    </div>
                    </Link>
                    <div
                      className={
                        pathName === "/admin-setttings"
                          ? lbar.active_menu_subitems
                          : lbar.menu_subitems
                      }
                    >
                      <div
                        className={
                          pathName === "/admin-setttings"
                            ? lbar.active_fullstop
                            : lbar.fullstop
                        }
                      ></div>{" "}
                      Admin Setttings
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header
                  className={lbar.menu_items}
                  onClick={() => dispatch(handleSidebarDropDown("2"))}
                >
                  Communities
                </Accordion.Header>

                <Accordion.Body>
                  <div className={lbar.subContentBox}>
                    <Link href="/all-communities">
                      <div
                        className={
                          pathName === "/all-communities"
                            ? lbar.active_menu_subitems
                            : lbar.menu_subitems
                        }
                        onClick={() => dispatch(handleSidebarDropDown("2"))}
                      >
                        <div
                          className={
                            pathName === "/all-communities"
                              ? lbar.active_fullstop
                              : lbar.fullstop
                          }
                        ></div>{" "}
                        All Communities
                      </div>
                    </Link>

                    <Link href="/verified-communities">
                      <div
                        className={
                          pathName === "/verified-communities"
                            ? lbar.active_menu_subitems
                            : lbar.menu_subitems
                        }
                      >
                        <div
                          className={
                            pathName === "/verified-communities"
                              ? lbar.active_fullstop
                              : lbar.fullstop
                          }
                        ></div>{" "}
                        Verified Communities
                      </div>
                    </Link>
                    <Link href="/scribbes-communities">
                      <div
                        className={
                          pathName === "/scribbes-communities"
                            ? lbar.active_menu_subitems
                            : lbar.menu_subitems
                        }
                      >
                        <div
                          className={
                            pathName === "/scribbes-communities"
                              ? lbar.active_fullstop
                              : lbar.fullstop
                          }
                        ></div>{" "}
                        Scribbes Communities
                      </div>
                    </Link>
                    <Link href="/add-community">
                      <div
                        className={
                          pathName === "/add-community"
                            ? lbar.active_menu_subitems
                            : lbar.menu_subitems
                        }
                      >
                        <div
                          className={
                            pathName === "/add-community"
                              ? lbar.active_fullstop
                              : lbar.fullstop
                          }
                        ></div>{" "}
                        Add Community
                      </div>
                    </Link>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header
                  className={lbar.menu_items}
                  onClick={() => dispatch(handleSidebarDropDown("3"))}
                >
                  Reports
                </Accordion.Header>
                <Accordion.Body>
                  <div className={lbar.subContentBox}>
                    <Link href="/all-reports">
                      <div
                        className={
                          pathName === "/all-reports"
                            ? lbar.active_menu_subitems
                            : lbar.menu_subitems
                        }
                      >
                        <div
                          className={
                            pathName === "/all-reports"
                              ? lbar.active_fullstop
                              : lbar.fullstop
                          }
                        ></div>{" "}
                        All Reports
                      </div>
                    </Link>

                    <Link href="/new-reports">
                      <div
                        className={
                          pathName === "/new-reports"
                            ? lbar.active_menu_subitems
                            : lbar.menu_subitems
                        }
                      >
                        <div
                          className={
                            pathName === "/new-reports"
                              ? lbar.active_fullstop
                              : lbar.fullstop
                          }
                        ></div>{" "}
                        New Reports
                      </div>
                    </Link>
                    <Link href="/user-reports">
                      <div
                        className={
                          pathName === "/user-reports"
                            ? lbar.active_menu_subitems
                            : lbar.menu_subitems
                        }
                      >
                        <div
                          className={
                            pathName === "/user-reports"
                              ? lbar.active_fullstop
                              : lbar.fullstop
                          }
                        ></div>{" "}
                        User Reports
                      </div>
                    </Link>
                    <Link href="/community-reports">
                      <div
                        className={
                          pathName === "/community-reports"
                            ? lbar.active_menu_subitems
                            : lbar.menu_subitems
                        }
                      >
                        <div
                          className={
                            pathName === "/community-reports"
                              ? lbar.active_fullstop
                              : lbar.fullstop
                          }
                        ></div>{" "}
                        Community Reports
                      </div>
                    </Link>
                    <Link href="/report-detail">
                      <div
                        className={
                          pathName === "/report-detail"
                            ? lbar.active_menu_subitems
                            : lbar.menu_subitems
                        }
                      >
                        <div
                          className={
                            pathName === "/report-detail"
                              ? lbar.active_fullstop
                              : lbar.fullstop
                          }
                        ></div>{" "}
                        Most Reported Posts
                      </div>
                    </Link>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header
                  className={lbar.menu_items}
                  onClick={() => dispatch(handleSidebarDropDown("4"))}
                >
                  Verifications
                </Accordion.Header>

                <Accordion.Body>
                  <div className={lbar.subContentBox}>
                    <Link href="/verification-request">
                      <div
                        className={
                          pathName === "/verification-request"
                            ? lbar.active_menu_subitems
                            : lbar.menu_subitems
                        }
                      >
                        <div
                          className={
                            pathName === "/verification-request"
                              ? lbar.active_fullstop
                              : lbar.fullstop
                          }
                        ></div>{" "}
                        Verifications Requests
                      </div>
                    </Link>
                    <Link href="/user-verification">
                      <div
                        className={
                          pathName === "/user-verification"
                            ? lbar.active_menu_subitems
                            : lbar.menu_subitems
                        }
                      >
                        <div
                          className={
                            pathName === "/user-verification"
                              ? lbar.active_fullstop
                              : lbar.fullstop
                          }
                        ></div>{" "}
                        User Verifications
                      </div>
                    </Link>
                    <Link href="/community-verification">
                      <div
                        className={
                          pathName === "/community-verification"
                            ? lbar.active_menu_subitems
                            : lbar.menu_subitems
                        }
                      >
                        <div
                          className={
                            pathName === "/community-verification"
                              ? lbar.active_fullstop
                              : lbar.fullstop
                          }
                        ></div>{" "}
                        Community Verifications
                      </div>
                    </Link>
                    <Link href="/ad">
                      <div
                        className={
                          pathName === "/verified-user"
                            ? lbar.active_menu_subitems
                            : lbar.menu_subitems
                        }
                      >
                        <div
                          className={
                            pathName === "/verified-user"
                              ? lbar.active_fullstop
                              : lbar.fullstop
                          }
                        ></div>{" "}
                        Verified Users
                      </div>
                    </Link>
                    <Link href="/community-verification-detail">
                      <div
                        className={
                          pathName === "/community-verification-detail"
                            ? lbar.active_menu_subitems
                            : lbar.menu_subitems
                        }
                      >
                        <div
                          className={
                            pathName === "/community-verification-detail"
                              ? lbar.active_fullstop
                              : lbar.fullstop
                          }
                        ></div>{" "}
                        Verified Communities
                      </div>
                    </Link>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Statistics</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header
                  className={lbar.menu_items}
                  onClick={() => dispatch(handleSidebarDropDown("6"))}
                >
                  Settings
                </Accordion.Header>
                <Accordion.Body>
                  <div className={lbar.subContentBox}>
                    <Link href="/setting/profile">
                      <div
                        className={
                          pathName === "/setting/profile"
                            ? lbar.active_menu_subitems
                            : lbar.menu_subitems
                        }
                      >
                        <div
                          className={
                            pathName === "/setting/profile"
                              ? lbar.active_fullstop
                              : lbar.fullstop
                          }
                        ></div>{" "}
                        Profile
                      </div>
                    </Link>
                    <Link href="/setting/account-setting">
                      <div
                        className={
                          pathName === "/setting/account-setting"
                            ? lbar.active_menu_subitems
                            : lbar.menu_subitems
                        }
                      >
                        <div
                          className={
                            pathName === "/setting/account-setting"
                              ? lbar.active_fullstop
                              : lbar.fullstop
                          }
                        ></div>{" "}
                        Account-Settings
                      </div>
                    </Link>
                    <Link href="/setting/notification">
                      <div
                        className={
                          pathName === "/setting/notification"
                            ? lbar.active_menu_subitems
                            : lbar.menu_subitems
                        }
                      >
                        <div
                          className={
                            pathName === "/setting/notification"
                              ? lbar.active_fullstop
                              : lbar.fullstop
                          }
                        ></div>{" "}
                        Notifications
                      </div>
                    </Link>
                    <Link href="/setting/privacy-safety">
                      <div
                        className={
                          pathName === "/setting/privacy-safety"
                            ? lbar.active_menu_subitems
                            : lbar.menu_subitems
                        }
                      >
                        <div
                          className={
                            pathName === "/setting/privacy-safety"
                              ? lbar.active_fullstop
                              : lbar.fullstop
                          }
                        ></div>{" "}
                        Privacy & Safety
                      </div>
                    </Link>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
      </Offcanvas>
    </>
  );
};

export default MobileLeftMenu;
