import React from "react";
import { getUser } from "../../../../Functions";

export const RecipeComment = ({ comment }) => {
  const user = getUser();
  const myComment = comment.user.id === user.id;

  return (
    <div
      className={`${
        myComment ? "bg-blue-800" : "bg-gray-800"
      } p-4 my-2 rounded-md  gap-1  `}
    >
      <div className="flex-col">
        <p
          className={`${
            myComment ? "text-white" : "text-gray"
          } font-semibold`}
        >
          {comment?.user?.username}
        </p>
        <p className={`${myComment ? "text-white" : "text-gray"}`}>
          {comment?.text}
        </p>
      </div>
      <p className={`${myComment ? "text-white" : "text-gray"} text-xs`}>
        {new Date(comment.createdAt).toLocaleString()}
      </p>
    </div>
  );
};
