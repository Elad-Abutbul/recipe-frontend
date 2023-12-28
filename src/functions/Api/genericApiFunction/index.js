import { apiErrors } from "../errors";

export const genericApiFunction = async (service, params) => {
  try {
    const res = await service(params);
    return res?.data;
  } catch (error) {
    apiErrors(error);
  }
};
