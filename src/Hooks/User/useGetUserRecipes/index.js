import { usersApiService } from "../../../services";
import { apiErrors } from "../../../Functions";
import { useQuery } from "react-query";

const useGetUserRecipes = (category, page, userId) => {
  const getUserRecipes = async () => {
    try {
      const res = await usersApiService.getUserRecipes(category, page, userId);
      return res.data;
    } catch (error) {
      apiErrors(error);
    }
  };
  const { loading, data } = useQuery({
    queryFn: getUserRecipes,
    queryKey: ["user", userId, category, page],
  });
  return { loading, data };
};

export default useGetUserRecipes;
