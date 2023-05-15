/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/Navbar";
import { useGlobalState } from "../UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const [user, setUser] = useGlobalState("user");
  const [photo, setPhoto] = useGlobalState("photo");
  const upload = () => {
    if (document.getElementById("upload").value === "") {
      toast.error("Please select a file");
    } else {
      toast.success("Picture added");
      document.getElementById("upload").value = "";
      setPhoto(
        "https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/329016851_1126132004719742_309882006475339599_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE4t9w4nnO9G6CfUezpdHfujupAhNR8NY-O6kCE1Hw1j3pe2tfTdDmcDmuamCVYx6gm-aGK-y9hh8A6lBRV8qTA&_nc_ohc=4dhUlaRHld4AX_OTbt0&_nc_ht=scontent-sin6-2.xx&oh=00_AfCiSlg_CaZFr02nnrUxTDkGMbqMl0SWlSmGGrRjumnMJw&oe=64673F7E"
      );
    }
  };
  return (
    <div className="w-full">
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
      <Navbar active="profile" />
      <div className="mt-12">
        <img
          className="w-1/2 lg:w-1/6 mx-auto rounded-full border-2 border-black"
          src={`${
            photo
              ? photo
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
          }`}
          alt="profile"
        />
        <div className="flex justify-center flex-row-reverse items-center px-12 my-6 gap-x-4">
          <button
            type="button"
            onClick={upload}
            className=" text-blue-500 rounded font-medium"
          >
            Upload Picture
          </button>
          <input
            type="file"
            id="upload"
            className="w-1/3 lg:w-1/6 lg:border-2"
          />
        </div>
        <div className="text-center text-xl lg:text-3xl my-5">{user.name}</div>
        <div className="text-center text-xl lg:text-3xl my-5">{user.mail}</div>
        <div className="flex justify-center items-center gap-x-6 lg:gap-x-12 my-5">
          <div className="text-center text-xl lg:text-3xl">{user.phone}</div>
          <button
            type="button"
            className="bg-blue-500 text-white py-1 px-3 rounded font-medium"
          >
            Change
          </button>
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="bg-cyan-500 text-white text-xl lg:text-3xl py-2 px-5 rounded-lg font-medium"
          >
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
