import { enqueueSnackbar } from "notistack";

export const editHandleSubmit = async (event, editUserField, editUser) => {
  event.preventDefault();
  if (!editUserField.username || !editUserField.password) {
    return enqueueSnackbar("Must Fill Every Field.", { variant: "warning" });
  }
  return await editUser(editUserField.username, editUserField.password);
};
