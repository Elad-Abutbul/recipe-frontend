import { useMutation, useQueryClient } from "react-query";
import {
  useDeleteSavedRecipe,
  useSaveRecipe,
  useDeleteOwnerRecipe,
  useCreateRecipe,
  useEditRecipe,
} from "../../Hooks";

const useQueryMutation = () => {
  const queryClient = useQueryClient();
  const { deleteSavedRecipe } = useDeleteSavedRecipe();
  const { saveRecipe } = useSaveRecipe();
  const { deleteOwnerRecipe } = useDeleteOwnerRecipe();
  const { createRecipe } = useCreateRecipe();
  const { editRecipe } = useEditRecipe();

  const deleteSavedRecipeMutation = useMutation({
    mutationFn: async (userId) => deleteSavedRecipe(userId),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries(["savedRecipes"]);
    },
  });

  const saveRecipeseMutation = useMutation({
    mutationFn: async (recipeId) => saveRecipe(recipeId),
    onSuccess: () => queryClient.invalidateQueries(["savedRecipes"]),
  });

  const deleteOwnerRecipeMutation = useMutation({
    mutationFn: async (recipeId) => await deleteOwnerRecipe(recipeId),
    onSuccess: () => queryClient.invalidateQueries(["allOwnerRecipes"]),
  });

  const createRecipeMutation = useMutation({
    mutationFn: async (recipe) => await createRecipe(recipe),
    onSuccess: () => queryClient.invalidateQueries(["allRecipes"]),
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
  };
};
export default useQueryMutation;