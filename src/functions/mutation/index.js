import { useMutation, useQueryClient } from "react-query";
import {
  useCreateRecipe,
  useDeleteOwnerRecipe,
  useDeleteSavedRecipe,
  useEditRecipe,
  useSaveRecipe,
} from "../../Api";

const useQureyMutation = () => {
  const queryClient = useQueryClient();
  const { fetchDeleteSavedRecipe } = useDeleteSavedRecipe();
  const { fetchSaveRecipe } = useSaveRecipe();
  const { fetchDeleteOwnerRecipe } = useDeleteOwnerRecipe();
  const { fetchCreateRecipe } = useCreateRecipe();
  const { fetchEditRecipe } = useEditRecipe();

  const deleteSavedRecipeMutation = useMutation({
    mutationFn: async (recipeId) => fetchDeleteSavedRecipe(recipeId),
    onSuccess: () => {
      queryClient.invalidateQueries(["savedRecipes"]);
    },
  });

  const saveRecipeseMutation = useMutation({
    mutationFn: async (recipeId) => fetchSaveRecipe(recipeId),
    onSuccess: () => {
      queryClient.invalidateQueries(["savedRecipes"]);
    },
  });

  const deleteOwnerRecipeMutation = useMutation({
    mutationFn: async (recipeId) => await fetchDeleteOwnerRecipe(recipeId),
    onSuccess: () => {
      queryClient.invalidateQueries(["allOwnerRecipes"]);
    },
  });

  const createRecipeMutation = useMutation({
    mutationFn: async (recipe) => await fetchCreateRecipe(recipe),
    onSuccess: () => {
      queryClient.invalidateQueries(["allRecipes"]);
    },
  });

  const editRecipeMutation = useMutation({
    mutationFn: async ({recipe, recipeId}) =>
      await fetchEditRecipe(recipe, recipeId),
    onSuccess: () => {
      queryClient.invalidateQueries(["allOwnerRecipes"]);
    },
  });
  
  return {
    deleteSavedRecipeMutation,
    saveRecipeseMutation,
    deleteOwnerRecipeMutation,
    createRecipeMutation,
    editRecipeMutation,
  };
};
export default useQureyMutation;
