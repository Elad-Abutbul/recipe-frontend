import React, { useState } from "react";
import { CommentsFeed } from "../commentsFeed";
import { Loading } from "../../../loading";
import { useAuth, useGetComments, useQueryMutation } from "../../../../Hooks";
import { getUser } from "../../../../Functions";
import { ROUTES } from "../../../../constants";
import { useNavigate } from "react-router-dom";

export const Comments = ({ recipeId }) => {
  const [input, setInput] = useState("");
  const user = getUser();
  const { isLoading, data } = useGetComments(recipeId);
  const { addCommentMutation, editCommentMutation } = useQueryMutation();
  const { checkIfUserAuth } = useAuth();
  const navigate = useNavigate();
  const handleCommentClick = () => {
    if (input !== "" && checkIfUserAuth()) {
      if (myComment === -1) {
        addCommentMutation.mutate({ comment: input, recipeId });
        setInput("");
      } else {
        if (input !== data.comments[myComment].text) {
          editCommentMutation.mutate({
            comment: input,
            commentId: data?.comments[myComment]._id,
            recipeId,
          });
          setInput("");
        }
      }
    } else {
      navigate(ROUTES.LOGIN);
    }
  };
  const myComment = data?.comments.findIndex(
    (comment) => comment.user.id === user.id
  );

  const handleEditComment = () => {
    if (myComment !== -1) setInput(data.comments[myComment].text);
  };

  if (isLoading) return <Loading />;

  return (
    <div className="border shadow-md flex-grow mx-2 sm:mx-5 md:mx-10 bg-white p-4 rounded-md">
      <h1 className="text-center text-lg font-bold mb-2">Recipe Comments</h1>
      <hr />
      <div className="overflow-y-auto h-72">
        <CommentsFeed
          comments={data?.comments}
          recipeId={recipeId}
          myComment={myComment}
        />
      </div>
      <hr />
      <div className="flex flex-col sm:flex-row justify-center items-center w-full">
        <input
          type="search"
          value={input}
          placeholder={
            myComment !== -1 ? "Edit Your Comment" : "Enter A Comment"
          }
          className="border-2 flex mb-2 sm:mb-0 sm:mr-2 border-gray-300 rounded-md p-2 w-full sm:w-auto focus:outline-none"
          onChange={(e) => setInput(e.target.value)}
          onClick={handleEditComment}
        />
        <button
          className="px-4 py-2 flex bg-blue-500 text-white rounded-md w-full sm:w-auto"
          onClick={handleCommentClick}
        >
          Send
        </button>
      </div>
    </div>
  );
};
