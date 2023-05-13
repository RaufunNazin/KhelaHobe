/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const nav = useNavigate();
  return (
    <nav className="bg-white border-b border-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="self-center text-xl lg:text-2xl cursor-pointer font-semibold whitespace-nowrap">
          Khela Hobe
        </div>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            <li>
              <div
                onClick={() => nav("/home")}
                className="block cursor-pointer py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                aria-current="page"
              >
                Home
              </div>
            </li>
            <li>
              <div
                onClick={() => nav("/events")}
                className="block cursor-pointer py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Events
              </div>
            </li>
            <li>
              <div
                onClick={() => nav("/mygames")}
                className="block cursor-pointer py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                My Games
              </div>
            </li>
          </ul>
        </div>
        <div
          onClick={() => nav("/login")}
          className="hidden w-full md:block md:w-auto bg-blue-500 text-white  cursor-pointer py-1 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700"
        >
          Login
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
