import { RecipeComment } from "../recipeComment";

export const CommentsFeed = ({ comments }) => {
  return (
    <>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <RecipeComment comment={comment} key={comment._id} />
        ))
      ) : (
        <h2 className="text-center my-10">Be The First To Comment</h2>
      )}
    </>
  );
};
