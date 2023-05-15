/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Table } from "antd";
import Navbar from "../components/Navbar";
import data from "../data/events.json";
import { Modal } from "antd";
import gamesnew from "../data/gamesnew.json";
import eventsnews from "../data/eventss.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Events = () => {
  const confirm = () => {
    localStorage.setItem("games", JSON.stringify(gamesnew));
    localStorage.setItem("events", JSON.stringify(eventsnews));
    toast.success("Participated");
    setModal2Open(false)
  };
  const event = JSON.parse(localStorage.getItem("events"));
  const [modal2Open, setModal2Open] = useState(false);
  const columns = [
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

  return (
    <div>
      <Navbar active="events" />
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
      <div className="mx-4 lg:mx-32 mt-8">
        <Table columns={columns} dataSource={event} />
        <Modal
          title="Confirmation"
          centered
          open={modal2Open}
          okText={"Confirm"}
          onOk={confirm}
          onCancel={() => setModal2Open(false)}
        >
          <div>Are you sure you want to participate?</div>
        </Modal>
      </div>
    </div>
  );
};

export default Events;
