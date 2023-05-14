/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/Navbar";
import { useGlobalState } from "../UserContext";

const Profile = () => {
  const [user, setUser] = useGlobalState("user");
  return (
    <div className="w-full">
      <Navbar active="profile" />
      <div className="mt-12">
        <img
          className="w-1/2 lg:w-1/6 mx-auto rounded-full border-2 border-black"
          src={`${
            user.photo
              ? user.photo
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
          }`}
          alt="profile"
        />
        <div className="flex justify-center my-6">
          <button
            type="button"
            className="bg-blue-500 text-white py-1 px-3 rounded font-medium"
          >
            Change
          </button>
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
