import axios from "axios";
import { APP_ROUTES, CONSTANTS } from "./Constants";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const PublicAxiosInstance = axios.create({
  baseURL: CONSTANTS?.BACKEND_URL_PUBLIC,
});

export const PrivateAxiosInstance = axios.create({
  baseURL: CONSTANTS?.BACKEND_URL_PUBLIC,
});


const setupInterceptor = (axiosInstance, navigate, user) => {
  // Request 
  axiosInstance.interceptors.request.use(
    (config) => {
      if (user ? user.token : '') {
        config.headers["Authorization"] = `Bearer ${user?.token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // Response
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response?.status === 401) {
        localStorage.clear();
        navigate(APP_ROUTES?.LOGIN);
      }
      return Promise.reject(error);
    }
  );

};

export const useAxiosInterceptors = () => {
  const navigate = useLocation();
  const user = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    setupInterceptor(PrivateAxiosInstance, navigate, user);
  }, [navigate]);
};
