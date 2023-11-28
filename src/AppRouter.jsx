import React, { Suspense } from "react";
import { EditProfile, EditRecipes, Home, Profile, RecipeForm, SignInOut, User,SavedRecipes } from "./pages";
import { Loading, Navbar } from "./components";
import { ROUTES } from "./constants";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
      <Navbar />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.LOGIN} element={<SignInOut />} />
        <Route path={ROUTES.REGISTER} element={<SignInOut />} />
        <Route path={ROUTES.CREATE_RECIPE} element={<RecipeForm />} />
        <Route path={ROUTES.EDIT_RECIPE} element={<RecipeForm />} />
        <Route path={ROUTES.SAVE_RECIPES} element={<Suspense fallback={<div>Loading...</div>}> <SavedRecipes /> </Suspense>} />
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
