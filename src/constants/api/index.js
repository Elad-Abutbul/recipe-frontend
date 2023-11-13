const RECIPES_BASE = "/recipes";
const RECIPE_DELETE_BASE = `${RECIPES_BASE}/delete`;

export const API_URL = {
  RECIPES: {
    RECIPES: RECIPES_BASE,
    GET_ALL: `${RECIPES_BASE}/getAllRecipes`,
    CREATE_RECIPE: `${RECIPES_BASE}/createRecipe`,
    EDIT_RECIPE: `${RECIPES_BASE}/editRecipe`,
    GET_ALL_OWNER_RECIPE: `${RECIPES_BASE}/getAllOwnerRecipes`,
    DELETE: {
      SAVED_RECIPE: `${RECIPE_DELETE_BASE}/saved-recipe`,
      OWNER_RECIPE: `${RECIPE_DELETE_BASE}/owner-recipe`,
    },
  },
};

export const ERRORS = {
  TRY_LETER: "Try Letter",
  NO_ACCESS_PROVIDED: "No Access Provided.",
};
