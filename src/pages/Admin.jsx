/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Table } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import user from "../data/user.json";
import games from "../data/games.json";
import event from "../data/events.json";
import eventnew from "../data/eventnew.json";

const Admin = () => {
  const location = useLocation();
  const [events, setEvents] = useState([]);
  const nav = useNavigate();
  const eventColumns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Start Date",
      dataIndex: "start",
      key: "start",
    },
    {
      title: "Location",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text) => (
        <button
          type="button"
          className="bg-blue-500 text-white py-1 px-3 rounded font-medium"
        >
          {text}
        </button>
      ),
    },
  ];
  const gameColumns = [
    {
      title: "Name of Games",
      dataIndex: "Name",
      key: "Name",
    },
    {
      title: "Event",
      dataIndex: "Event",
      key: "Event",
    },
    {
      title: "Round",
      dataIndex: "Round",
      key: "Round",
    },
    {
      title: "Start",
      dataIndex: "Start",
      key: "Start",
    },
  ];

  const load = () => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("events", JSON.stringify(eventnew));
    localStorage.setItem("games", JSON.stringify(games));
  };

  const loadi = () => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("events", JSON.stringify(event));
    localStorage.setItem("games", JSON.stringify(games));
  };

  const loadie = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("events");
    localStorage.removeItem("games");
  };

  const create = () => {
    toast.success("Added successfully");
  };

  useEffect(() => {
    setEvents(JSON.parse(localStorage.getItem("events")));
  }, []);

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme="colored"
      />
      <Navbar active="admin" />
      <button onClick={load} className="">
        .
      </button>
      <button onClick={loadi} className="">
        _
      </button>
      <button onClick={loadie} className="">
        .
      </button>
      <div className="text-center text-2xl">Create Event</div>
      <form className="mx-4 lg:mx-32 mt-8">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="Name"
            id="Name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="Name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="address"
            id="address"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="address"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Address
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="date"
              id="date"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="date"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Start Date
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="time"
              id="time"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="time"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Start Time
            </label>
          </div>
        </div>

        <h3 className="mb-4 font-semibold text-gray-900">Games</h3>
        <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex">
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
            <div className="flex items-center pl-3">
              <input
                id="horizontal-list-checkbox-license"
                type="checkbox"
                value=""
                name="list-checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              />
              <label
                htmlFor="horizontal-list-checkbox-license"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
              >
                Pop Quiz
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
            <div className="flex items-center pl-3">
              <input
                id="horizontal-list-checkbox-id"
                type="checkbox"
                value=""
                name="list-checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              />
              <label
                htmlFor="horizontal-list-checkbox-id"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
              >
                Table Tennis
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
            <div className="flex items-center pl-3">
              <input
                id="horizontal-list-checkbox-millitary"
                type="checkbox"
                value=""
                name="list-checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              />
              <label
                htmlFor="horizontal-list-checkbox-millitary"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
              >
                29 Cards
              </label>
            </div>
          </li>
          <li className="w-full">
            <div className="flex items-center pl-3">
              <input
                id="horizontal-list-checkbox-passport"
                type="checkbox"
                value=""
                name="list-checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              />
              <label
                htmlFor="horizontal-list-checkbox-passport"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
              >
                Carrom
              </label>
            </div>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => create()}
          className="text-white mt-8 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Admin;
