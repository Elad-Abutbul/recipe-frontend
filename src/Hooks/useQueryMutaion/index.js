import { useMutation, useQueryClient } from "react-query";
import {
  useDeleteSavedRecipe,
  useSaveRecipe,
  useDeleteOwnerRecipe,
  useCreateRecipe,
  useEditRecipe,
  useAddComment,
} from "../../Hooks";
import { changeRecipeRating } from "../../Functions";

const useQueryMutation = () => {
  const queryClient = useQueryClient();
  const { deleteSavedRecipe } = useDeleteSavedRecipe();
  const { saveRecipe } = useSaveRecipe();
  const { deleteOwnerRecipe } = useDeleteOwnerRecipe();
  const { createRecipe } = useCreateRecipe();
  const { editRecipe } = useEditRecipe();
  const { addComment } = useAddComment();

  const deleteSavedRecipeMutation = useMutation({
    mutationFn: async (userId) => deleteSavedRecipe(userId),
    onSuccess: () => queryClient.invalidateQueries(["savedRecipes"]),
  });

  const saveRecipeseMutation = useMutation({
    mutationFn: async (recipeId) => saveRecipe(recipeId),
    onSuccess: () => queryClient.invalidateQueries(["savedRecipes"]),
  });

  const deleteOwnerRecipeMutation = useMutation({
    mutationFn: async (recipeId) => await deleteOwnerRecipe(recipeId),
    onSuccess: () => queryClient.invalidateQueries(["allOwnerRecipes"]),
  });
  const addCommentMutation = useMutation({
    mutationFn: async ({ comment, recipeId }) =>
      await addComment(comment, recipeId),
    onSuccess: (_, { recipeId }) =>
      queryClient.invalidateQueries(["recipeComments", recipeId]),
  });

  const createRecipeMutation = useMutation({
    mutationFn: async (recipe) => await createRecipe(recipe),
    onSuccess: () => queryClient.invalidateQueries(["home"]),
  });

  const changeRecipeStarsMutation = useMutation({
    mutationFn: async ({ userId, rating, recipeId }) =>
      await changeRecipeRating(userId, rating, recipeId),
    onSuccess: (_, { recipeId }) =>
      queryClient.invalidateQueries(["recipe", recipeId]),
  });

  const editRecipeMutation = useMutation({
    mutationFn: async ({ recipe, recipeId }) =>
      await editRecipe(recipe, recipeId),
    onSuccess: () => queryClient.invalidateQueries(["allOwnerRecipes"]),
  });

  return {
    deleteSavedRecipeMutation,
    saveRecipeseMutation,
    deleteOwnerRecipeMutation,
    createRecipeMutation,
    editRecipeMutation,
    changeRecipeStarsMutation,
    addCommentMutation,
  };
};
export default useQueryMutation;
