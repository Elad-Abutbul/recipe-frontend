import React from "react";
import { ROUTES } from "../../../constants";
import { useQureyMutation, useRecipeCard } from "../../../Functions";
import { useNavigate } from "react-router-dom";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { GrFormView } from "react-icons/gr";
import { LiaSave } from "react-icons/lia";

export const RecipeIcons = ({ setShowFullRecipe, mode, recipe }) => {
  const navigate = useNavigate();
  const { handleSaveRecipe } = useRecipeCard();
  const {
    deleteOwnerRecipeMutation,
    deleteSavedRecipeMutation,
    saveRecipeseMutation,
  } = useQureyMutation();
  return (
    <div className="flex gap-5">
      {mode === "all-recipes" && (
        <LiaSave
          size={30}
          className="cursor-pointer"
          disabled={saveRecipeseMutation.isLoading}
          onClick={() => handleSaveRecipe(recipe._id)}
        />
      )}
      <GrFormView
        size={30}
        onClick={() => setShowFullRecipe(true)}
        className="cursor-pointer"
      />
      {mode === "edit-recipes" && (
        <>
          <AiOutlineEdit
            size={30}
            className="cursor-pointer"
            onClick={() => {
              navigate(ROUTES.EDIT_RECIPE, {
                state: { singleRecipe: recipe },
              });
            }}
          />
        </>
      )}
      {(mode === "edit-recipes" || mode === "saved-recipes") && (
        <AiOutlineDelete
          size={30}
          className="cursor-pointer"
          onClick={() =>
            mode === "edit-recipes"
              ? deleteOwnerRecipeMutation.mutate(recipe._id)
              : deleteSavedRecipeMutation.mutate(recipe._id)
          }
        />
      )}
    </div>
  );
};