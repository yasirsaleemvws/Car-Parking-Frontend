import { PublicAxiosInstance } from "../config/axios";


export const API_POST__LOGIN = async (data) => {
  try {
    const response = await PublicAxiosInstance.post(`auth/login`, data);
    return response.data; // You may want to return the response data to handle it in your components
  } catch (error) {
    throw error; // Rethrow the error for handling in your components
  }
};

export const API_POST__REGISTER = async (data) => {
  try {
    const response = await PublicAxiosInstance.post(`auth/register`, data);
    return response.data; // You may want to return the response data to handle it in your components
  } catch (error) {
    throw error; // Rethrow the error for handling in your components
  }
};

export const API_POST__FORGET_PASSWORD = async (data) => {
  try {
    const response = await PublicAxiosInstance.post(`auth/forget-password`, data);
    return response.data; // You may want to return the response data to handle it in your components
  } catch (error) {
    throw error; // Rethrow the error for handling in your components
  }
};


export const API_POST__VERIFY_OTP = async (data) => {
  try {
    const response = await PublicAxiosInstance.post(`auth/verify-otp`, data);
    return response.data; // You may want to return the response data to handle it in your components
  } catch (error) {
    throw error; // Rethrow the error for handling in your components
  }
};

export const API_POST__RESET_PASSWORD = async (data) => {
  try {
    const response = await PublicAxiosInstance.post(`auth/reset-password`, data);
    return response.data; // You may want to return the response data to handle it in your components
  } catch (error) {
    throw error; // Rethrow the error for handling in your components
  }
};

export const API_POST__UPDATE_USER = async (data) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    const response = await PublicAxiosInstance.post("auth/update-user", data, {
      headers: {
        Authorization: `Bearer ${user?.token}`,
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error in API_POST__UPDATE_USER:", error);
    throw error;
  }
};

export const API_POST__UPDATE_PASSWORD = async (data) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    const response = await PublicAxiosInstance.post("auth/change-password", data, {
      headers: {
        Authorization: `Bearer ${user?.token}`,
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error in API_POST__UPDATE_USER:", error);
    throw error;
  }
};

export const API_POST__DELETE_USER = async (data) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    const response = await PublicAxiosInstance.post("auth/delete-user", data, {
      headers: {
        Authorization: `Bearer ${user?.token}`,
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error in API_POST__UPDATE_USER:", error);
    throw error;
  }
};


export const API_GET__NOTIFICATIONS = async () => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    const response = await PublicAxiosInstance.get("auth/get-notifications", {
      headers: {
        Authorization: `Bearer ${user?.token}`,
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error in contact us:", error);
    throw error;
  }
};

