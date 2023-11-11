import axios from "../../../axiosConfig";
import { enqueueSnackbar } from "notistack";

export const fetchSearch = async (input, permission, userId) => {
  try {
    const res = await axios.post("/recipes/search", {
      input,
      permission,
      userId,
    });
    return res.data.search;
  } catch (error) {
    console.error(error);
    enqueueSnackbar("An Error Occurred", { variant: "error" });
  }
};
