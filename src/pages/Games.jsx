/* eslint-disable no-unused-vars */
import React from "react";
import { Table } from "antd";
import Navbar from "../components/Navbar";
import data from "../data/games.json"

const Games = () => {
  const columns = [
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

  return (
    <div>
      <Navbar active="mygames" />
      <div className="mx-4 lg:mx-32 mt-8">
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default Games;
