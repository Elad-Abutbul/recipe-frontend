import { apiErrors } from "../apiErrors";

export const genericApiRequest = async (service, params) => {
  try {
    const res = await service(params);
    return res?.data;
  } catch (error) {
    apiErrors(error);
  }
};
