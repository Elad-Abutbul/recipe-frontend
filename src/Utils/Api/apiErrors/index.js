import { enqueueSnackbar } from "notistack";

export const apiErrors = (error) => {
  console.error(error);
  enqueueSnackbar(error.message, { variant: "error" });
};
