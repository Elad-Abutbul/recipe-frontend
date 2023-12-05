import React from "react";
import { UserCard } from "../userCard";

export const UserFeed = ({ users }) => (
  <div className="absolute flex flex-col">
    {users?.map((user) => (
      <div key={user._id} className="max-w-sm rounded overflow-hidden shadow-lg border">
        <UserCard user={user} />
      </div>
    ))}
  </div>
);
