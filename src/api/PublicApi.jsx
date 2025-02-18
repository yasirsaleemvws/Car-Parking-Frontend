import { PublicAxiosInstance } from "../config/axios";


export const POST__LOGIN = async (data) => {
  try {
    const response = await PublicAxiosInstance.post(`auth/login`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const POST__REGISTER = async (data) => {
  try {
    const response = await PublicAxiosInstance.post(`auth/12321321321321`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
