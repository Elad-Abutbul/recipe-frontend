import React from "react";
import { RatingStars } from "../../ratingStars";
import { useNavigate } from "react-router-dom";

export const RecipeComment = ({ comment, recipeId, currentUserComment }) => {
  const navigate = useNavigate();
  const isUserComment = () => currentUserComment !== -1;
  return (
    <div
      className={`${
        isUserComment ? "bg-blue-600" : "bg-gray-200"
      } p-4 my-2 rounded-md  gap-1  `}
    >
      <div className="flex-col">
        <p
          className={`${
            isUserComment ? "text-white" : "text-gray"
          } font-semibold`}
          onClick={() =>
            navigate(`/user/${comment.user.id}`, {
              state: { username: comment.user.username },
            })
          }
        >
          {comment.user.username}
        </p>

        <p className={`${isUserComment ? "text-white" : "text-gray"}`}>
          {comment?.text}
        </p>
        <div className="flex gap-5">
          <RatingStars
            initialRating={comment.rating}
            recipeId={recipeId}
            mode="comments"
          />
        </div>
      </div>
      <p className={`${isUserComment ? "text-white" : "text-gray"} text-xs`}>
        {new Date(comment.createdAt).toLocaleString()}
      </p>
    </div>
  );
};
