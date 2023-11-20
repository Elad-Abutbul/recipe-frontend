import { userService } from "../../../services";
import { apiErrors } from "../../../Functions";
import { useQuery } from "react-query";
import { enqueueSnackbar } from "notistack";

const useGetUser = (userId) => {
  const getUser = async () => {
    try {
      const res = await userService.getUser(userId);
      if (res.data.message) {
        return enqueueSnackbar(res.data.message, { variant: "warning" });
      } else {
        return res.data;
      }
    } catch (error) {
      apiErrors(error);
    }
  };
  const { loading, data } = useQuery({
    queryFn: getUser,
    queryKey: ["user"],
  });
  return { loading, data };
};

export default useGetUser;
