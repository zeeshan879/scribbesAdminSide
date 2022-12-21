import React, { useState } from "react";
import lbar from "../../Asstes/style/homeLeftmenu.module.css";
import Image from "next/image";
import arrowDown from "../../Asstes/DashboardImages/arrowDown.png";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import {
  handelaActivePageTab,
  handelMangUserMenu,
  handelAdminTab,
  handelComunityTab,
  handleSidebarDropDown,
} from "../../redux/reducers/scribbes";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

const DashboardLeftMenu = () => {
  const router = useRouter();
  const pathName = router.pathname;
  const [active, setActive] = useState(true);
  const [subItem, setSubItem] = useState(0);
  const adminTab = useSelector((state) => state.allGernalFunction.adminTab);
  const sidebarDropDown = useSelector(
    (state) => state.allGernalFunction.sidebarDropDown
  );
  const mangUserMenu = useSelector(
    (state) => state.allGernalFunction.mangUserMenu
  );
  const communityTab = useSelector(
    (state) => state.allGernalFunction.communityTab
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

  //useEffect(()=>{
  //  if(router)
  //},[router.pathname])
  return (
    <>
      <div className={lbar.home_left_bar}>
        <Link href="/">
          <div className={lbar.left_bar_logo}>Scribbes</div>
        </Link>
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
                    <div
                      className={
                        pathName === "/create-admin"
                          ? lbar.active_menu_subitems
                          : lbar.menu_subitems
                      }
               
                    >
                      <div
                        className={
                          pathName === "/create-admin" ? lbar.active_fullstop : lbar.fullstop
                        }
                      ></div>{" "}
                      Create Role
                    </div>
                    <div
                      className={
                        pathName === "/roles-to-admin"
                          ? lbar.active_menu_subitems
                          : lbar.menu_subitems
                      }
              
                    >
                      <div
                        className={
                          pathName === "/roles-to-admin"? lbar.active_fullstop : lbar.fullstop
                        }
                      ></div>{" "}
                      Roles to Admin
                    </div>
                    <div
                      className={
                        pathName === "/admin-setttings"
                          ? lbar.active_menu_subitems
                          : lbar.menu_subitems
                      }
             
                    >
                      <div
                        className={
                          pathName === "/admin-setttings"? lbar.active_fullstop : lbar.fullstop
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
                <Accordion.Header>Reports</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
            
                  <Accordion.Header className={lbar.menu_items}
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
                <Accordion.Header>Settings</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLeftMenu;
