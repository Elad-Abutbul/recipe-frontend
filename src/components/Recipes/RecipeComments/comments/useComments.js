import { useState } from "react";
import {
  useAuth,
  useGenericQuery,
  useQueryMutation,
  useRemoveToken,
} from "../../../../Hooks";
import { getUser } from "../../../../Utils";
import { QUERY_KEY } from "../../../../constants";
import { recipesApiService } from "../../../../services";

export const useComments = (recipeId) => {
  const [input, setInput] = useState("");
  const user = getUser();

  const { isLoading, data } = useGenericQuery(
    QUERY_KEY.RECIPE_COMMNETS,
    { recipeId },
    recipesApiService.getComments
  );

  const { addCommentMutation, editCommentMutation } = useQueryMutation();
  const { removeToken } = useRemoveToken();
  const { checkIfUserAuth } = useAuth();
  const handleCommentClick = () => {
    if (input === "") return;
    if (!checkIfUserAuth()) {
      removeToken();
      return;
    }
    if (currentUserComment === -1) {
      addCommentMutation.mutate({ comment: input, recipeId, userId: user?.id });
    } else if (input !== data.comments[currentUserComment]?.text) {
      editCommentMutation.mutate({
        comment: input,
        commentId: data?.comments[currentUserComment]?._id,
        recipeId,
      });
    }
    setInput("");
  };

  const currentUserComment = data?.comments.findIndex(
    (comment) => comment?.user?.id === user?.id
  );

  const handleEditComment = () => {
    if (currentUserComment !== -1)
      setInput(data.comments[currentUserComment].text);
  };

  return { data,
     isLoading,
     currentUserComment,
     input,
     setInput,
     handleEditComment,
     handleCommentClick,};
};
