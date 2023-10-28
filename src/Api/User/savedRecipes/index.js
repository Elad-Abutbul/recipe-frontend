import { useState } from 'react';
import axios from '../../../axiosConfig';
import { getUser } from '../getUser'
import { enqueueSnackbar } from 'notistack';

const useSavedRecipes = () => {
     const user = getUser();
     const axiosSavedRecipes = async () => {
          try {
               const res = await axios.get(`auth/savedRecipes/${user._id}`);
               if (!res.data.message) {
           return res.data.savedRecipes
               }
          } catch (error) {
               enqueueSnackbar('Try Later', { variant: 'warning' });
               console.error(error);
          }
     }
     return { axiosSavedRecipes };
}
export default useSavedRecipes