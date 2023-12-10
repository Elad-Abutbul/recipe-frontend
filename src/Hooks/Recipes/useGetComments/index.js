import { useQuery } from "react-query";
import axiosInstance from "../../../axiosConfig";
import { recipeService } from "../../../services";

const useGetComments = () => {
  const getComments = async () => {
    const res = await recipeService.getComments();
    return res.data;
  };
  const { isLoading, data } = useQuery(["recipeComments"], getComments);
  return { isLoading, data };
};

export default useGetComments;
