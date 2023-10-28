import { useState } from 'react';
import axios from '../../../axiosConfig';
import { getUserId } from '../getUserId'
import { enqueueSnackbar } from 'notistack';

const useSavedRecipes = () => {
     const userId = getUserId();
     const axiosSavedRecipes = async () => {
          try {
               const res = await axios.get(`auth/savedRecipes/${userId}`);
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