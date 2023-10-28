import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CreateRecipe, EditProfile, EditRecipes, Home, Profile, SavedRecipe, SignInOut, } from './pages'
import { EditRecipe, Navbar, RecipeCard } from './components'
import { ROUTES } from './constants'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.LOGIN} element={<SignInOut />} />
          <Route path={ROUTES.REGISTER} element={<SignInOut />} />
          <Route path={ROUTES.CREATE_RECIPE} element={<CreateRecipe />} />
        <Route path={ROUTES.SAVE_RECIPE} element={<SavedRecipe />} />
        <Route path={ROUTES.PROFILE} element={<Profile />} >
          <Route path={ROUTES.EDIT_PROFILE} element={<EditProfile/>} />
        <Route path={ROUTES.EDIT_RECIPES} element={<EditRecipes/>} />
          {/* <Route path={ROUTES.EDIT_RECIPES} element={<RecipeCard/>} /> */}
          </Route>
        </Routes>
    </BrowserRouter>
  )
}
