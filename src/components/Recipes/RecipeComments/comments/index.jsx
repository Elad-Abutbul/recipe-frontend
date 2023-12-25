import React, { useState, useRef, useEffect } from "react";
import { CommentsFeed } from "../commentsFeed";
import { useAuth, useGetComments, useQueryMutation } from "../../../../Hooks";
import { Loading } from "../../../loading";
import { ROUTES } from "../../../../constants";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../../../Functions";

export const Comments = ({ recipeId }) => {
  const [input, setInput] = useState("");
  const user = getUser();
  const { isLoading, data } = useGetComments(recipeId);
  const { addCommentMutation } = useQueryMutation();
  const { checkIfUserAuth } = useAuth();
  const navigate = useNavigate();
  const commentsContainerRef = useRef(null);

  const handleCommentClick = () => {
    if (input !== "" && checkIfUserAuth()) {
      addCommentMutation.mutate({ comment: input, recipeId });
    } else {
      navigate(ROUTES.LOGIN);
    }
  };

  const myComment = data?.comments.find(
    (comment) => comment.user.id === user.id
  );

  useEffect(() => {
    if (commentsContainerRef.current) {
      commentsContainerRef.current.scrollTop =
        commentsContainerRef.current.scrollHeight;
      setInput("");
    }
  }, [data?.comments]);

  if (isLoading) return <Loading />;

  return (
    <div className="border shadow-md flex-grow mx-2 sm:mx-5 md:mx-10 bg-white p-4 rounded-md">
      <h1 className="text-center text-lg font-bold mb-2">Recipe Comments</h1>
      <hr />
      <div className="overflow-y-auto h-72" ref={commentsContainerRef}>
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
          placeholder={myComment ? "Edit Your Comment" : "Enter A Comment"}
          className="border-2 flex mb-2 sm:mb-0 sm:mr-2 border-gray-300 rounded-md p-2 w-full sm:w-auto focus:outline-none"
          onChange={(e) => setInput(e.target.value)}
          disabled={myComment}
        />
        <button
          className="px-4 py-2 flex bg-blue-500 text-white rounded-md w-full sm:w-auto"
          onClick={handleCommentClick}
          disabled={myComment}
        >
          Send
        </button>
      </div>
    </div>
  );
};
