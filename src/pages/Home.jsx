/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Table } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import user from "../data/user.json";
import games from "../data/games.json";
import events from "../data/events.json";

const Home = () => {
  const eve = JSON.parse(localStorage.getItem("events"));
  const gam = JSON.parse(localStorage.getItem("games"));
  const location = useLocation();
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
          id="part"
          onClick={() => setModal2Open(true)}
          className={` ${
            text === "Participated"
              ? "text-green-500 font-medium"
              : "bg-blue-500 text-white py-1 px-3 rounded font-medium"
          } `}
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

  const [permission, setPermission] = useState("");
  let today = new Date();
  const notification = () => {
    for (let i = 0; i < games.length; i++) {
      let date = new Date(games[i].Start.slice(0, 10));
      if (today < date) {
        var options = {
          body: `You have a ${games[i].Name} match of ${
            games[i].Round
          } at ${games[i].Start.slice(-5)} in ${games[i].Start.slice(0, 10)}`,
          icon: "https://scontent.fdac31-1.fna.fbcdn.net/v/t39.30808-6/329016851_1126132004719742_309882006475339599_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEgCZrToptI2f1PWX1K9JB1jupAhNR8NY-O6kCE1Hw1j2nkyLak7IUMemig5yUAP-lW4MgimqaPxHMLW30JRS1v&_nc_ohc=4dhUlaRHld4AX_GenX-&_nc_ht=scontent.fdac31-1.fna&oh=00_AfCpaOu-tWaUmMRHEUZx1vsUcYl7-04bRVZFtlIm5vhy-Q&oe=6465453E",
          dir: "ltr",
        };

        new Notification("CSEDU Indoor Games 2023", options);
        localStorage.setItem("notificationDisplayed", true);
      }
    }
  };

  useEffect(() => {
    if (permission === "granted") {
      notification();
    }
  }, [permission]);
  useEffect(() => {
    if (localStorage.getItem("notificationDisplayed") === false) {
      notification();
    }
    if (location.state === "login") {
      toast.success("Login Successful");
    }
    if (!("Notification" in window)) {
      toast.error("Browser does not support desktop notification");
    } else {
      Notification.requestPermission().then((permission) => {
        setPermission(permission);
      });
    }
  }, []);
  const notify = () => {
    localStorage.setItem("user", JSON.stringify(user));
  };
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
      <Navbar active="home" />
      <div className="mt-8">
        <div className="flex items-center">
          <hr className="w-1/6 border border-black" />
          <div className="mx-4 text-2xl">Events</div>
          <hr className="w-5/6 border border-black" />
        </div>
        <div
          onClick={() => nav("/events")}
          className="text-right text-blue-500 cursor-pointer mr-8 lg:mr-24"
        >
          View all Events
        </div>
        <div className="mx-4 lg:mx-32 mt-8">
          <Table columns={eventColumns} dataSource={eve} pagination={false} />
        </div>
      </div>
      <div className="mt-16">
        <div className="flex items-center">
          <hr className="w-1/6 border border-black" />
          <div className="mx-4 text-2xl">Games</div>
          <hr className="w-5/6 border border-black" />
        </div>
        <div
          onClick={() => nav("/mygames")}
          className="text-right text-blue-500 cursor-pointer mr-8 lg:mr-24"
        >
          View all Games
        </div>
        <div className="mx-4 lg:mx-32 mt-8">
          <Table
            columns={gameColumns}
            dataSource={gam}
            pagination={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
