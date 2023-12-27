import { apiErrors, getUser } from "../../../Functions";
import { recipesApiService } from "../../../services";

const useAddComment = () => {
  const user = getUser();
  const addComment = async (comment, recipeId) => {
    try {
      const res = await recipesApiService.addComment(comment, recipeId, user.id);
      return res;
    } catch (error) {
      apiErrors(error);
    }
  };
  return { addComment };
};
export default useAddComment;
