import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { GrFormView } from "react-icons/gr";
import { LiaSave } from "react-icons/lia";
import { ROUTES } from "../../../constants";
import { useNavigate } from "react-router-dom";

export const RecipeIcons = ({
  setShowFullRecipe,
  condition,
  handleSaveRecipe,
  saveRecipeseMutation,
  deleteOwnerRecipeMutation,
  recipe,
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-5">
      <LiaSave
        size={30}
        className="cursor-pointer"
        disabled={saveRecipeseMutation.isLoading}
        onClick={() => handleSaveRecipe(recipe._id)}
      />
      <GrFormView
        size={30}
        onClick={() => setShowFullRecipe(true)}
        className="cursor-pointer"
      />
      {condition === "edit" && (
        <>
          <AiOutlineEdit
            size={30}
            className="cursor-pointer"
            onClick={() =>
              navigate(ROUTES.EDIT_RECIPE, {
                state: { singleRecipe: recipe },
              })
            }
          />
          <AiOutlineDelete
            size={30}
            className="cursor-pointer"
            onClick={() => deleteOwnerRecipeMutation.mutate(recipe._id)}
          />
        </>
      )}
    </div>
  );
};
