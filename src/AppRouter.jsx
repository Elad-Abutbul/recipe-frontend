import React, { Suspense, lazy } from "react";
import { Loading } from "./components";
import { ROUTES } from "./constants";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const SignInOut = lazy(() => import("./pages/signInOut"));
const EditProfile = lazy(() => import("./pages/Profile/editProfile"));
const EditRecipes = lazy(() => import("./pages/Profile/editRecipes"));
const RecipeForm = lazy(() => import("./pages/recipeForm"));
const User = lazy(() => import("./pages/user"));
const Profile = lazy(() => import("./pages/Profile"));
const SavedRecipes = lazy(() => import("./pages/savedRecipes"));
const Recipe = lazy(() => import("./pages/recipe"));

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.LOGIN} element={<SignInOut />} />
          <Route path={ROUTES.REGISTER} element={<SignInOut />} />
          <Route path={ROUTES.CREATE_RECIPE} element={<RecipeForm />} />
          <Route path={ROUTES.EDIT_RECIPE} element={<RecipeForm />} />
          <Route path={ROUTES.SAVE_RECIPES} element={<SavedRecipes />} />
          <Route path={ROUTES.RECIPE} element={<Recipe />} />
          <Route path={`${ROUTES.USER}/:id`} element={<User />} />
          <Route path={ROUTES.PROFILE} element={<Profile />}>
            <Route path={ROUTES.EDIT_PROFILE} element={<EditProfile />} />
            <Route path={ROUTES.EDIT_RECIPES} element={<EditRecipes />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
