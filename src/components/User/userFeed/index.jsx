import React from "react";
import { UserCard } from "../userCard";

export const UserFeed = ({ items }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
    {items?.map((item) => (
      <div key={item._id} className="max-w-sm rounded overflow-hidden shadow-lg">
        <UserCard item={item} />
      </div>
    ))}
  </div>
);
