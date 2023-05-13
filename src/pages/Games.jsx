/* eslint-disable no-unused-vars */
import React from "react";
import { Table } from "antd";
import Navbar from "../components/Navbar";

const Games = () => {
  const columns = [
    {
      title: "Game name",
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
  const data = [
    {
      key: "1",
      Name: "29 Cards",
      Event: "CSEDU Indoor Games 2024",
      Round: "Qualifying Round",
      Start: "2024-03-14 09:00",
    },
    {
      key: "2",
      Name: "Table Tennis",
      Event: "CSEDU Indoor Games 2024",
      Round: "Round of 16",
      Start: "2024-03-14 14:30",
    },
    {
      key: "3",
      Name: "Darts",
      Event: "CSEDU Indoor Games 2024",
      Round: "Semifinals",
      Start: "2024-03-14 19:15",
    },
    {
      key: "4",
      Name: "Carrom",
      Event: "CSEDU Indoor Games 2024",
      Round: "Finals",
      Start: "2024-03-15 16:00",
    },
    {
      key: "5",
      Name: "Pop Quiz",
      Event: "CSEDU Indoor Games 2024",
      Round: "Finals",
      Start: "2024-03-16 11:00",
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
