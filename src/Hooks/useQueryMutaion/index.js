import { useMutation, useQueryClient } from "react-query";
import {
  useDeleteSavedRecipe,
  useSaveRecipe,
  useDeleteOwnerRecipe,
  useCreateRecipe,
  useEditRecipe,
} from "../../Hooks";
import { genericApiFunction } from "../../functions";
import { QUERY_KEY } from "../../constants";
import { recipesApiService } from "../../services";

const useQueryMutation = () => {
  const queryClient = useQueryClient();
  const { deleteSavedRecipe } = useDeleteSavedRecipe();
  const { saveRecipe } = useSaveRecipe();
  const { deleteOwnerRecipe } = useDeleteOwnerRecipe();
  const { createRecipe } = useCreateRecipe();
  const { editRecipe } = useEditRecipe();

  const deleteSavedRecipeMutation = useMutation({
    mutationFn: async (userId) => deleteSavedRecipe(userId),
    onSuccess: () => queryClient.invalidateQueries([QUERY_KEY.SAVED_RECIPE]),
  });

  const saveRecipeseMutation = useMutation({
    mutationFn: async (recipeId) => saveRecipe(recipeId),
    onSuccess: () => queryClient.invalidateQueries([QUERY_KEY.SAVED_RECIPE]),
  });

  const changeRecipeStarsInCommentsMutation = useMutation({
    mutationFn: async ({ userId, rating, recipeId }) =>
      genericApiFunction(recipesApiService.changeRatingInComments, {
        userId,
        rating,
        recipeId,
      }),
    onSuccess: (_, { recipeId }) =>
      queryClient.invalidateQueries([QUERY_KEY.RECIPE_COMMNETS, { recipeId }]),
  });

  const editCommentMutation = useMutation({
    mutationFn: async ({ commentId, comment }) =>
      genericApiFunction(recipesApiService.editComment, { commentId, comment }),
    onSuccess: (_, { recipeId }) =>
      queryClient.invalidateQueries([QUERY_KEY.RECIPE_COMMNETS, {recipeId}]),
  });

  const addCommentMutation = useMutation({
    mutationFn: async ({ comment, recipeId, userId }) =>
      genericApiFunction(recipesApiService.addComment, {
        comment,
        recipeId,
        userId,
      }),
    onSuccess: (_, { recipeId }) =>
      queryClient.invalidateQueries([QUERY_KEY.RECIPE_COMMNETS, {recipeId}]),
  });

  const deleteOwnerRecipeMutation = useMutation({
    mutationFn: async (recipeId) => await deleteOwnerRecipe(recipeId),
    onSuccess: () =>
      queryClient.invalidateQueries([QUERY_KEY.ALL_OWNER_RECIPE]),
  });

  const editRecipeMutation = useMutation({
    mutationFn: async ({ recipe, recipeId }) =>
      await editRecipe(recipe, recipeId),
    onSuccess: () =>
      queryClient.invalidateQueries([QUERY_KEY.ALL_OWNER_RECIPE]),
  });

  const createRecipeMutation = useMutation({
    mutationFn: async (recipe) => await createRecipe(recipe),
    onSuccess: () => queryClient.invalidateQueries([QUERY_KEY.HOME]),
  });

  const changeRecipeStarsMutation = useMutation({
    mutationFn: async ({ userId, rating, recipeId }) =>
      genericApiFunction(recipesApiService.changeRecipeRating, {
        userId,
        rating,
        recipeId,
      }),
  });

  return {
    deleteSavedRecipeMutation,
    saveRecipeseMutation,
    deleteOwnerRecipeMutation,
    createRecipeMutation,
    editRecipeMutation,
    changeRecipeStarsMutation,
    addCommentMutation,
    editCommentMutation,
    changeRecipeStarsInCommentsMutation,
  };
};
export default useQueryMutation;
