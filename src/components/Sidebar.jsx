/* eslint-disable no-unused-vars */
import React from "react";
import { slide as Menu } from "react-burger-menu";
import "../index.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { Modal } from "antd";

const Sidebar = () => {
  const nav = useNavigate();
  let location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const to = (address) => {
    setOpen(false);
    nav(`/${address}`);
  };

  const logout = () => {};

  return (
    <div
      className={`${
        location.pathname === "/register" ||
        location.pathname === "/login" ||
        location.pathname === "*"
          ? "hideButton"
          : ""
      }`}
    >
      <Menu
        right
        isOpen={isOpen}
        onOpen={() => setOpen(!isOpen)}
        onClose={() => setOpen(!isOpen)}
      >
        <div onClick={() => to("home")} className="menu-item">
          Home
        </div>
        <div onClick={() => to("profile")} className="menu-item">
          Profile
        </div>
        <div onClick={() => to("events")} className="menu-item">
          Events
        </div>
        <div onClick={() => to("mygames")} className="menu-item">
          My Games
        </div>
        {isLoggedIn ? (
          <li>
            <div
              onClick={() => {
                setModal2Open(true);
                setOpen(false);
              }}
              className="menu-item"
            >
              Logout
            </div>
          </li>
        ) : (
          <li>
            <div onClick={() => to("login")} className="menu-item">
              Login
            </div>
          </li>
        )}
        <Modal
          title="Confirmation"
          style={{ top: 350 }}
          open={modal2Open}
          okText={"Log out"}
          onOk={logout}
          onCancel={() => setModal2Open(false)}
        >
          <div>Are you sure you want to log out?</div>
        </Modal>
      </Menu>
    </div>
  );
};

export default Sidebar;
