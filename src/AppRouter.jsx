import React from "react";
import {
  EditProfile,
  EditRecipes,
  Home,
  Profile,
  RecipeForm,
  SavedRecipes,
  SignInOut,
  User,
} from "./pages";
import { Recipes, Navbar } from "./components";
import { ROUTES } from "./constants";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.LOGIN} element={<SignInOut />} />
        <Route path={ROUTES.REGISTER} element={<SignInOut />} />
        <Route path={ROUTES.CREATE_RECIPE} element={<RecipeForm />} />
        <Route path={ROUTES.EDIT_RECIPE} element={<RecipeForm />} />
        <Route path={ROUTES.SAVE_RECIPES} element={<SavedRecipes />} />
        <Route path={ROUTES.USER} element={<User />} />

        <Route path={ROUTES.PROFILE} element={<Profile />}>
          <Route path={ROUTES.EDIT_PROFILE} element={<EditProfile />} />
          <Route path={ROUTES.EDIT_RECIPES} element={<EditRecipes />} />
        </Route>
        <Route path={`${ROUTES.RECIPES}/:kosherType`} element={<Recipes />} />
  
      </Routes>
    </BrowserRouter>
  );
};
