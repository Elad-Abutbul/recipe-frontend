const RECIPES_BASE = "/recipes";
const RECIPE_DELETE_BASE = `${RECIPES_BASE}/delete`;
const RECIPES_SEARCH = `${RECIPES_BASE}/search`;

export const RECIPES_API = {
    RECIPES: RECIPES_BASE,
    GET_ALL_RECIPES: `${RECIPES_BASE}/getAllRecipes`,
    GET_MEAT_RECIPES: `${RECIPES_BASE}/getMeatRecipes`,
    GET_PARVE_RECIPES: `${RECIPES_BASE}/getParveRecipes`,
    GET_DAIRY_RECIPES: `${RECIPES_BASE}/getDairyRecipes`,
    GET_RECIPES: `${RECIPES_BASE}/getRecipes`,
    GET_RECIPE: `${RECIPES_BASE}/getRecipe`,
    CREATE_RECIPE: `${RECIPES_BASE}/createRecipe`,
    EDIT_RECIPE: `${RECIPES_BASE}/editRecipe`,
    GET_ALL_OWNER_RECIPE: `${RECIPES_BASE}/getAllOwnerRecipes`,
    GET_RATING_STARS: `${RECIPES_BASE}/ratingStars`,
    GET_USER_STARS: `${RECIPES_BASE}/userStars`,
    COMMENTS: `${RECIPES_BASE}/comments`,
    ADD_COMMENT: `${RECIPES_BASE}/comments/addComment`,
    CONTENT: `${RECIPES_BASE}/content`,
    EDIT_COMMENT: `${RECIPES_BASE}/editComment`,
    CHANGE_RATING: `${RECIPES_BASE}/changeRating`,
    EDIT_RATING_IN_COMMENTS: `${RECIPES_BASE}/editRatingInComments`,
    DELETE: {
      SAVED_RECIPE: `${RECIPE_DELETE_BASE}/saved-recipe`,
      OWNER_RECIPE: `${RECIPE_DELETE_BASE}/owner-recipe`,
    },
    SEARCH: {
      RECIPES: `${RECIPES_SEARCH}`,
    },
};

