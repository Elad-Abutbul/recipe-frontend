import React, { useState } from "react";
import { getUser, handleChangeState } from "../../../Utils";
import { enqueueSnackbar } from "notistack";
import { useEditProfile } from "../../../Hooks/User/useEditProfile";

const EditProfile = () => {
  const { editProfile } = useEditProfile();
  const user = getUser();
  const [editUserField, setEditUserField] = useState({
    username: user?.username,
    password: "",
  });
  const editHandleSubmit = async (event, editUserField) => {
    event.preventDefault();
    if (!editUserField.username || !editUserField.password) {
      return enqueueSnackbar("Must Fill Every Field.", { variant: "warning" });
    }
    return await editProfile(editUserField.username, editUserField.password);
  };

  const handlChange = (event) => {
    handleChangeState(event, setEditUserField, editUserField);
  };

  return (
    <div className="mx-10">
      <h1 className="text-3xl font-semibold mb-4 text-blue-500">
        Edit Profile
      </h1>
      <form
        onSubmit={(event) => editHandleSubmit(event, editUserField)}
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

export default EditProfile;
