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
    const response = await PublicAxiosInstance.post(`admin/login`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const POST__REGISTER = async (data) => {
  try {
    const response = await PublicAxiosInstance.post(`auth/signup`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const POST__FORGET_PASSWORD = async (data) => {
  try {
    const response = await PublicAxiosInstance.post(`auth/forgot-password`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const POST__RESET_PASSWORD = async (data) => {
  try {
    const response = await PublicAxiosInstance.post(`auth/forgot-password`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
