import { PublicAxiosInstance } from "../config/axios";


export const POST__LOGIN = async (data) => {
  try {
    const response = await PublicAxiosInstance.post(`auth/login`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const POST__ADMIN_LOGIN = async (data) => {
  try {
    const response = await PublicAxiosInstance.post(`auth/admin/login`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const POST__REGISTER = async (data) => {
  try {
    const response = await PublicAxiosInstance.post(`auth/register`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
