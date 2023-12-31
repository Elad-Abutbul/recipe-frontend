import React from "react";
import { ROUTES } from "../../../constants";
import { useNavigate } from "react-router-dom";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { GrFormView } from "react-icons/gr";
import { LiaSave } from "react-icons/lia";
import { useQueryMutation, useRecipeCard } from "../../../Hooks";
export const RecipeIcons = ({
  setShowFullRecipe,
  mode,
  recipe,
  page,
  category
}) => {
  const navigate = useNavigate();
  const { handleSaveRecipe } = useRecipeCard();
  const {
    deleteOwnerRecipeMutation,
    deleteSavedRecipeMutation,
    saveRecipeseMutation,
  } = useQueryMutation();

  return (
    <div className="flex gap-5">
      {(mode === "all-recipes" || mode === 'user') && (
        <LiaSave
          size={40}
          className="cursor-pointer"
          disabled={saveRecipeseMutation.isLoading}
          onClick={(event) => {
            event.stopPropagation(); // Stop event propagation
            handleSaveRecipe(recipe._id);
          }}
        />
      )}
      <GrFormView
        size={40}
        onClick={(event) => {
          event.stopPropagation(); // Stop event propagation
          setShowFullRecipe(true);
        }}
        className="cursor-pointer"
      />
      {mode === "edit-recipes" && (
        <>
          <AiOutlineEdit
            size={40}
            className="cursor-pointer"
            onClick={(event) => {
              event.stopPropagation(); // Stop event propagation
              navigate(ROUTES.EDIT_RECIPE, {
                state: { singleRecipe: recipe },
              });
            }}
          />
        </>
      )}
      {(mode === "edit-recipes" || mode === "saved-recipes") && (
        <AiOutlineDelete
          size={40}
          className="cursor-pointer"
          onClick={(event) => {
            event.stopPropagation(); // Stop event propagation
            mode === "edit-recipes"
              ? deleteOwnerRecipeMutation.mutate(recipe._id)
              : deleteSavedRecipeMutation.mutate(recipe._id);
          }}
        />
      )}
    </div>
  );
};