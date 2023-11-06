import React from "react";
import { Outlet } from "react-router-dom";
import { ROUTES } from "../../constants";
import { Link } from "react-router-dom";

export const Profile = () => {
  return (
    <div className="p-8">
      <div className="flex justify-center mb-4">
        <Link
          className="text-gray-800 hover:text-gray-600 font-semibold text-lg mx-4 transition duration-300 transform hover:scale-105 hover:shadow-md p-2 rounded-md bg-gray-200 hover:bg-gray-300"
          to={ROUTES.EDIT_RECIPES}
        >
          Edit Recipes
        </Link>
        <Link
          className="text-gray-800 hover:text-gray-600 font-semibold text-lg mx-4 transition duration-300 transform hover:scale-105 hover:shadow-md p-2 rounded-md bg-gray-200 hover:bg-gray-300"
          to={ROUTES.EDIT_PROFILE}
        >
          Edit Profile
        </Link>
      </div>
      <Outlet />
    </div>
  );
};
