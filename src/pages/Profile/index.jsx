import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../constants";

export const Profile = () => {
  const [select, setSelect] = useState("edit-recipes");
  return (
    <div className="p-8">
      <div className="flex justify-center mb-4">
        <Link
          to={ROUTES.EDIT_RECIPES}
          onClick={() => setSelect("edit-recipes")}
          className={`text-gray-800 font-semibold text-lg mx-4 transition duration-300 transform hover:scale-105 hover:shadow-md p-2 rounded-md  border-b-2 bg-gray-200 ${
            select === "edit-recipes" ? " border-black  " : "border-gray-200"
          }`}
        >
          Edit Recipes
        </Link>
        <Link
          to={ROUTES.EDIT_PROFILE}
          onClick={() => setSelect("edit-profile")}
          className={`text-gray-800 font-semibold text-lg mx-4 transition duration-300 transform hover:scale-105 hover:shadow-md p-2 rounded-md  border-b-2 bg-gray-200 ${
            select === "edit-profile" ? " border-black  " : "border-gray-200"
          }`}
        >
          Edit Profile
        </Link>
      </div>
      <Outlet />
    </div>
  );
};
