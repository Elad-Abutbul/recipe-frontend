import React from "react";
import { useDeleteSavedRecipe, axiosSavedRecipes } from "../../Api";
import { Loading } from "../../components";
import { MdDeleteOutline } from "react-icons/md";
import { useMutation, useQuery, useQueryClient } from "react-query";

export const SavedRecipe = () => {
  const { axiosDeleteSavedRecipe } = useDeleteSavedRecipe();
  const queryClient = useQueryClient();

  const { isLoading, data: savedRecipes } = useQuery(
    ["savedRecipes"],
    axiosSavedRecipes
  );

  const deleteRecipeMutation = useMutation(axiosDeleteSavedRecipe, {
    onSuccess: () => {
      queryClient.invalidateQueries(["savedRecipes"]);
    },
  });

  const handleDeleteRecipe = (recipeId) => {
    deleteRecipeMutation.mutateAsync(recipeId);
  };

  if (isLoading) return <Loading />;

  return (
    <div className="m-10">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {savedRecipes?.length === 0
          ? "Nothing To Show"
          : savedRecipes?.map((recipe) => (
              <li
                key={recipe._id}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={recipe.imageUrl}
                  alt={recipe.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-2xl font-semibold mb-2">{recipe.name}</h2>
                  <p className="text-gray-600 overflow-clip">
                    {recipe.instruction}
                  </p>
                  <p className="text-gray-800">
                    Cooking Time: {recipe.cookingTime} (minutes)
                  </p>
                  <div className="flex m-5 justify-center">
                    <MdDeleteOutline
                      className="cursor-pointer"
                      size={32}
                      color="red"
                      onClick={() =>
                        !deleteRecipeMutation.isLoading &&
                        handleDeleteRecipe(recipe._id)
                      }
                    />
                  </div>
                </div>
              </li>
            ))}
      </ul>
    </div>
  );
};
