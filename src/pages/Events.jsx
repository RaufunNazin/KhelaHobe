/* eslint-disable no-unused-vars */
import React from "react";
import { Table } from "antd";
import Navbar from "../components/Navbar";
import data from "../data/events.json"

const Events = () => {
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
        render: (text) => <button type="button" className="bg-blue-500 text-white py-1 px-3 rounded font-medium">{text}</button>
      }
  ];

  return (
    <div>
      <Navbar active="events" />
      <div className="mx-4 lg:mx-32 mt-8">
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default Events;
