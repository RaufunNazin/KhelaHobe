/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";
import { useGlobalState } from "../UserContext";

const Navbar = ({ active }) => {
  const nav = useNavigate();
  const [user, setUser] = useGlobalState("user");
  const [isLoggedIn, setIsLoggedIn] = useGlobalState("isLoggedIn");
  const [modal2Open, setModal2Open] = useState(false);

  const logout = () => {
    setIsLoggedIn(false);
    nav("/login");
    window.location.reload();
  };
  return (
    <nav className="bg-white border-b border-gray-300">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        <div className="self-center text-xl lg:text-2xl cursor-pointer font-semibold whitespace-nowrap">
          Khela Hobe
        </div>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            <li>
              <div
                onClick={() => nav("/home")}
                className={
                  active === "home"
                    ? "block cursor-pointer py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                    : "block cursor-pointer py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                }
              >
                Home
              </div>
            </li>
            <li>
              <div
                onClick={() => nav("/profile")}
                className={
                  active === "profile"
                    ? "block cursor-pointer py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                    : "block cursor-pointer py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                }
              >
                Profile
              </div>
            </li>
            {user.role === "admin" ? (
              <li>
                <div
                  onClick={() => nav("/admin")}
                  className={
                    active === "admin"
                      ? "block cursor-pointer py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                      : "block cursor-pointer py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                  }
                >
                  Admin
                </div>
              </li>
            ) : (
              ""
            )}

            <li>
              <div
                onClick={() => nav("/events")}
                className={
                  active === "events"
                    ? "block cursor-pointer py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                    : "block cursor-pointer py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                }
              >
                Events
              </div>
            </li>
            <li>
              <div
                onClick={() => nav("/mygames")}
                className={
                  active === "mygames"
                    ? "block cursor-pointer py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                    : "block cursor-pointer py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                }
              >
                My Games
              </div>
            </li>
          </ul>
        </div>
        {isLoggedIn ? (
          <div
            onClick={() => setModal2Open(true)}
            className="hidden w-full md:block md:w-auto cursor-pointer py-1 px-3 rounded md:border-0 bg-red-700 text-white font-medium"
          >
            Logout
          </div>
        ) : (
          <div
            onClick={() => nav("/login")}
            className="hidden w-full md:block md:w-auto cursor-pointer py-1 px-3 rounded md:border-0 bg-blue-500 text-white font-medium"
          >
            Login
          </div>
        )}
        <Modal
          title="Confirmation"
          centered
          open={modal2Open}
          okText={"Log out"}
          onOk={logout}
          onCancel={() => setModal2Open(false)}
        >
          <div>Are you sure you want to log out?</div>
        </Modal>
      </div>
    </nav>
  );
};

export default Navbar;
