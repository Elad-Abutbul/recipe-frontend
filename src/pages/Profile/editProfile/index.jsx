import React, { useState } from "react";
import { editHandleSubmit, getUser, handleChangeState } from "../../../Functions";
import { useEditUser } from "../../../Hooks";

export const EditProfile = () => {
  const { editUser } = useEditUser();
  const user= getUser()
  const [editUserField, setEditUserField] = useState({
    username: user.username,
    password: "",
  });
  const handlChange = (event) => {
    handleChangeState(event, setEditUserField, editUserField);
  };

  return (
    <div className="mx-10">
    <h1 className="text-3xl font-semibold mb-4 text-blue-500">
        Edit Profile
      </h1>
      <form
        onSubmit={(event) => editHandleSubmit(event, editUserField, editUser)}
        className="space-y-4"
      >
        <div className="flex flex-col">
          <label htmlFor="username" className="text-gray-600 font-medium">
            Username
          </label>
          <input
            type="text"
            name="username"
            onChange={handlChange}
            value={editUserField.username}
            placeholder="Enter A Username.."
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-gray-600 font-medium">
            Password
          </label>
          <input
            onChange={handlChange}
            type="password"
            name="password"
            value={editUserField.password}
            placeholder="Enter A Password.."
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Save
        </button>
      </form>
    </div>
  );
};
