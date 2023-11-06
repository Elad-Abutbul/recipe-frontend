import { useQuery } from "react-query";
import { axiosGetAllRecipes } from "../../../../Api";
export const useGetAllRecipes = () => {
  const getAllRecipes = useQuery(["allRecipes"], axiosGetAllRecipes);
  return { getAllRecipes };
};
