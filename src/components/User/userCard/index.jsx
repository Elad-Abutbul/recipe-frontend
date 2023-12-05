import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const UserCard = ({ user }) => {
 const navigate= useNavigate()
  return (
    <div onClick={()=>navigate(`/user/${user?._id}`,{state:{username:user?.username}})}>
      {user && (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2 text-black">{user?.username}</h2>
            <p className="text-gray-700 text-base">
              {user?.recipeCount} Recipes
            </p>
          </div>
        </div>
      )}
    </div>

  )}
