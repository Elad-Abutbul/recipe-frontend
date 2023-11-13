import { ERRORS } from "../../../constants";
import { enqueueSnackbar } from "notistack";

export const apiErrors = (error) => {
  console.error(error);
  enqueueSnackbar(ERRORS.TRY_LETER, { variant: "error" });
};
