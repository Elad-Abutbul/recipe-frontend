import React from "react";
import { ROUTES } from "../../../constants";
import { useNavigate } from "react-router-dom";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { IoIosEye } from "react-icons/io";
import { LiaSave } from "react-icons/lia";
import { useQueryMutation, useRecipeCard } from "../../../Hooks";
export const RecipeIcons = ({
  setShowFullRecipe,
  mode,
  recipe,
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
          className="cursor-pointer dark:text-white"
          disabled={saveRecipeseMutation.isLoading}
          onClick={(event) => {
            event.stopPropagation(); 
            handleSaveRecipe(recipe._id);
          }}
        />
      )}
      <IoIosEye 
        size={40}
        className="cursor-pointer dark:text-white"
        onClick={(event) => {
          event.stopPropagation(); 
          setShowFullRecipe(true);
        }}
        />
      {mode === "edit-recipes" && (
        <>
          <AiOutlineEdit
            size={40}
            className="cursor-pointer dark:text-white"
            onClick={(event) => {
              event.stopPropagation(); 
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
          className="cursor-pointer dark:text-white"
          onClick={(event) => {
            event.stopPropagation(); 
            mode === "edit-recipes"
              ? deleteOwnerRecipeMutation.mutate(recipe._id)
              : deleteSavedRecipeMutation.mutate(recipe._id);
          }}
        />
      )}
    </div>
  );
};