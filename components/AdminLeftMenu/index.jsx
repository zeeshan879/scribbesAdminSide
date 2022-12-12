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
} from "../../redux/reducers/scribbes";
import { useSelector, useDispatch } from "react-redux";

const DashboardLeftMenu = () => {
  const [active, setActive] = useState(true);
  const [subItem, setSubItem] = useState(0);
  const activePageTab = useSelector(
    (state) => state.allGernalFunction.activePageTab
  );
  const mangUserMenu = useSelector(
    (state) => state.allGernalFunction.mangUserMenu
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
      <div className={lbar.home_left_bar}>
        <div className={lbar.left_bar_logo}>Scribbes</div>
        <div className={lbar.box_wrapper}>
          <Link href="/dashboard">
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
              onClick={() => handleDashBoardHome(true)}
            >
              <Accordion.Item eventKey="0">
                <Link href="/user">
                  <Accordion.Header
                    className={lbar.menu_items}
                    onClick={() => dispatch(handelMangUserMenu(1))}
                  >
                    <div>Users</div>
                  </Accordion.Header>
                </Link>
                <Accordion.Body>
                  <div className={lbar.subContentBox}>
                    <div
                      className={
                        mangUserMenu == 2
                          ? lbar.active_menu_subitems
                          : lbar.menu_subitems
                      }
                      onClick={() => dispatch(handelMangUserMenu(2))}
                    >
                      <div
                        className={
                          mangUserMenu == 2
                            ? lbar.active_fullstop
                            : lbar.fullstop
                        }
                      ></div>{" "}
                      All users
                    </div>

                    <div
                      className={
                        mangUserMenu == 3
                          ? lbar.active_menu_subitems
                          : lbar.menu_subitems
                      }
                      onClick={() => dispatch(handelMangUserMenu(3))}
                    >
                      <div
                        className={
                          mangUserMenu == 3
                            ? lbar.active_fullstop
                            : lbar.fullstop
                        }
                      ></div>{" "}
                      Verified users
                    </div>
                    <div
                      className={
                        mangUserMenu == 4
                          ? lbar.active_menu_subitems
                          : lbar.menu_subitems
                      }
                      onClick={() => dispatch(handelMangUserMenu(4))}
                    >
                      <div
                        className={
                          mangUserMenu == 4
                            ? lbar.active_fullstop
                            : lbar.fullstop
                        }
                      ></div>{" "}
                      Suspended users
                    </div>
                    <div
                      className={
                        mangUserMenu == 5
                          ? lbar.active_menu_subitems
                          : lbar.menu_subitems
                      }
                      onClick={() => dispatch(handelMangUserMenu(5))}
                    >
                      <div
                        className={
                          mangUserMenu == 5
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
                <Accordion.Header>Admin</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Communities</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
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
                <Accordion.Header>Verifications</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
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
