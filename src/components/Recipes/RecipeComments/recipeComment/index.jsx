import React from "react";
import { RatingStars } from "../../ratingStars";
import { useNavigate } from "react-router-dom";
import { MdModeEdit } from "react-icons/md";

export const RecipeComment = ({ comment, recipeId, myComment }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`${
        myComment ? "bg-blue-600" : "bg-gray-200"
      } p-4 my-2 rounded-md  gap-1  `}
    >
      <div className="flex-col">
        <p
          className={`${myComment ? "text-white" : "text-gray"} font-semibold`}
          onClick={() =>
            navigate(`/user/${comment.user.id}`, {
              state: { username: comment.user.username },
            })
          }
        >
          {comment.user.username}
        </p>

        <p className={`${myComment ? "text-white" : "text-gray"}`}>
          {comment?.text}
        </p>
        <div className="flex gap-5">
          <RatingStars
            initialRating={comment.rating}
            recipeId={recipeId}
            mode="comments"
          />
          {myComment && (
            <span className="cursor-pointer hover:text-white">
              <MdModeEdit size={20} />
            </span>
          )}
        </div>
      </div>
      <p className={`${myComment ? "text-white" : "text-gray"} text-xs`}>
        {new Date(comment.createdAt).toLocaleString()}
      </p>
    </div>
  );
};
