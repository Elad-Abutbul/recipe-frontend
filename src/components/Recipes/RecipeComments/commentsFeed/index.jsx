import React from "react";
import { useGetComments } from "../../../../Hooks";
import { Loading } from "../../../loading";
import { SingleRecipeComment } from "../singleRecipeComment";

export const CommentsFeed = () => {
  const { isLoading, data } = useGetComments();
  if (isLoading) <Loading />;
  return (
    <div className="border shadow-md flex-grow mx-10 my-4 relative">
      <h1 className="text-center text-lg font-bold">Recipe Comments</h1>
      <hr />
      {data?.comments.length > 0 ? (
        data?.comments.map((comment) => (
          <SingleRecipeComment comment={comment} key={comment._id} />
        ))
      ) : (
        <h2 className="text-center my-10">Be The First To Comment</h2>
      )}

      <div className="absolute bottom-3 left-0 right-0 m-5 px-3 flex justify-center">
        <hr />
        <input
          type="search"
          placeholder="Enter Comment"
          className="border-2 border-gray-300 rounded-md "
        />
        <button
          className="ml-3 px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={() => {}}
        >
          Send
        </button>
      </div>
    </div>
  );
};
