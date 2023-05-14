/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.state === "login") {
      toast.success("Login Successful");
    }
    if (!("Notification" in window)) {
      console.log("Browser does not support desktop notification");
    } else {
      Notification.requestPermission();
    }
  }, []);
  const notify = () => {
    var options = {
      body: "You have a Carrom match of round SemiFinals at 2:30pm today",
      icon: "https://scontent.fdac31-1.fna.fbcdn.net/v/t39.30808-6/329016851_1126132004719742_309882006475339599_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEgCZrToptI2f1PWX1K9JB1jupAhNR8NY-O6kCE1Hw1j2nkyLak7IUMemig5yUAP-lW4MgimqaPxHMLW30JRS1v&_nc_ohc=4dhUlaRHld4AX_GenX-&_nc_ht=scontent.fdac31-1.fna&oh=00_AfCpaOu-tWaUmMRHEUZx1vsUcYl7-04bRVZFtlIm5vhy-Q&oe=6465453E",
      dir: "ltr",
    };

    new Notification("CSEDU Indoor Games 2024", options);
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
      <button onClick={notify}>notify</button>
    </div>
  );
};

export default Home;
