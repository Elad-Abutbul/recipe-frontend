const RECIPES_BASE = "/recipes";
const RECIPE_DELETE_BASE = `${RECIPES_BASE}/delete`;
const RECIPES_SEARCH = `${RECIPES_BASE}/search`;
export const API_URL = {
  RECIPES: {
    RECIPES: RECIPES_BASE,
    GET_ALL_RECIPES: `${RECIPES_BASE}/getAllRecipes`,
    GET_MEAT_RECIPES: `${RECIPES_BASE}/getMeatRecipes`,
    GET_PARVE_RECIPES: `${RECIPES_BASE}/getParveRecipes`,
    GET_DAIRY_RECIPES: `${RECIPES_BASE}/getDairyRecipes`,
    GET_RECIPES: `${RECIPES_BASE}/getRecipes`,
    CREATE_RECIPE: `${RECIPES_BASE}/createRecipe`,
    EDIT_RECIPE: `${RECIPES_BASE}/editRecipe`,
    GET_ALL_OWNER_RECIPE: `${RECIPES_BASE}/getAllOwnerRecipes`,
    GET_RATING_STARS: `${RECIPES_BASE}/ratingStars`,
    GET_USER_STARS: `${RECIPES_BASE}/userStars`,
    COMMENTS: `${RECIPES_BASE}/comments`,
    ADD_COMMENT: `${RECIPES_BASE}/comments/addComment`,
    DELETE: {
      SAVED_RECIPE: `${RECIPE_DELETE_BASE}/saved-recipe`,
      OWNER_RECIPE: `${RECIPE_DELETE_BASE}/owner-recipe`,
    },
    SEARCH: {
      RECIPES: `${RECIPES_SEARCH}`,
    },
  },
};

export const ERRORS = {
  TRY_LETER: "Try Letter",
  NO_ACCESS_PROVIDED: "No Access Provided.",
};
