import React, { useState } from 'react';
import { handleChangeState } from '../../../functions';
import { useEditUser } from '../../../Api';
import { enqueueSnackbar } from 'notistack';

export const EditProfile = () => {

  const { axiosEditUser } = useEditUser();
  
  const [editUserField, setEditUserField] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!editUserField.username || !editUserField.password) {
     return enqueueSnackbar('Must Fill Every Field.', { variant: 'warning' });
    } return await axiosEditUser(editUserField.username,editUserField.password);
  };

  const handlChange = (event) => {
    handleChangeState(event, setEditUserField, editUserField);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Edit Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
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
            className="border border-gray-300 rounded px-3 py-2"
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
            className="border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
        >
          Save
        </button>
      </form>
    </div>
  );
};