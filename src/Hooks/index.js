import {
  useCreateRecipe,
  useDeleteSavedRecipe,
  useEditRecipe,
  useRecipeCard,
  useDeleteOwnerRecipe,
  useRecipeContent,
  useRatingStarComp,
} from "./Recipes";
import { useAuth, useEditUser, useSaveRecipe, useSignInOut } from "./User";

import useRemoveToken from "./useRemoveToken";

import useQueryMutation from "./useQueryMutaion";
import useDebounce from "./useDebounce";
import useGenericQuery from "./useGenericQuery";
export {
  //recipes
  useRatingStarComp,
  useRecipeContent,
  useCreateRecipe,
  useDeleteSavedRecipe,
  useEditRecipe,
  useRecipeCard,
  useDeleteOwnerRecipe,
  //user
  useAuth,
  useEditUser,
  useSaveRecipe,
  useSignInOut,

  // token
  useRemoveToken,

  //mutation
  useQueryMutation,

  //debounde
  useDebounce,
  //
  useGenericQuery,
};
