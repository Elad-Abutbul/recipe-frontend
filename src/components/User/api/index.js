const RECIPES_BASE = "/recipes";
const RECIPE_DELETE_BASE = `${RECIPES_BASE}/delete`;
const SEARCH_RECIPES_BASE = `${RECIPES_BASE}/search`;
export const API_URL = {
  RECIPES: {
    GET_ALL_RECIPES: `${RECIPES_BASE}/getAllRecipes`,
    GET_MEAT_RECIPES: `${RECIPES_BASE}/getMeatRecipes`,
    GET_PARVE_RECIPES: `${RECIPES_BASE}/getParveRecipes`,
    GET_DAIRY_RECIPES: `${RECIPES_BASE}/getDairyRecipes`,
    GET_RECIPES: `${RECIPES_BASE}/getRecipes`,
    CREATE_RECIPE: `${RECIPES_BASE}/createRecipe`,
    EDIT_RECIPE: `${RECIPES_BASE}/editRecipe`,
    GET_ALL_OWNER_RECIPE: `${RECIPES_BASE}/getAllOwnerRecipes`,
    DELETE: {
      SAVED_RECIPE: `${RECIPE_DELETE_BASE}/saved-recipe`,
      OWNER_RECIPE: `${RECIPE_DELETE_BASE}/owner-recipe`,
    },
    // **search**
    SEARCH: {
      SAVE_RECIPES: `${SEARCH_RECIPES_BASE}/save-recipes`,
      DYNCAMIC_PAGE_AND_CATEGORY: `${SEARCH_RECIPES_BASE}`,
      USER_CARD: `${SEARCH_RECIPES_BASE}/user-card`,
    },
  },
};

export const ERRORS = {
  TRY_LETER: "Try Letter",
  NO_ACCESS_PROVIDED: "No Access Provided.",
};
