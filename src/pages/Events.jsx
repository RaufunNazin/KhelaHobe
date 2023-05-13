/* eslint-disable no-unused-vars */
import React from "react";
import { Table } from "antd";
import Navbar from "../components/Navbar";

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
  const data = [
    {
      key: "1",
      name: "CSEDU Indoor Games 2024",
      start: "Jan 31, 2024",
      address: "Dept. of CSE, University of Dhaka",
      action: "Participate"
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
