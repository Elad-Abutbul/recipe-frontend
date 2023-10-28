import React from 'react'
import { Outlet } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { Link } from 'react-router-dom';

export const Profile = () => {
  return (
    <div>
            <Link className='text-blue-500' to={ROUTES.EDIT_RECIPES}>Edit Recipes</Link>
           <Link className='text-blue-500' to={ROUTES.EDIT_PROFILE}>Edit Profile</Link> 
            <Outlet/>
    </div>
  )
}
