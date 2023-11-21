import React from "react";
import { Link } from "react-router-dom";

export const UserCard = ({ item }) => {
  return (
    <Link to={`user/${item.user?.id}`}>
      {item.length === 0 && (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{item.user?.username}</div>
            <p className="text-gray-700 text-base">
              {item.recipesLength} Recipes
            </p>
          </div>
        </div>
      )}
    </Link>
  );
};
