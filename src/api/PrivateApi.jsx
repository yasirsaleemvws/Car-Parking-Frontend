import { PrivateAxiosInstance } from "../config/axios";

export const GET__PARKING_LIST = async (page, rowsPerPage) => {
    try {
        const response = await PrivateAxiosInstance.get(`/parking-list?page=${page}&limit=${rowsPerPage}`);
        return response.data;
    } catch (error) {
        throw new Error(error?.response?.data?.message);
    }
};

export const UPDATE_PASSWORD = async (data) => {
    try {
        const response = await PrivateAxiosInstance.post(`/update-password`, data);
        return response.data;
    } catch (error) {
        throw new Error(error?.response?.data?.message);
    }
};

export const UPDATE_COMPANY_PROFILE = async (data) => {
    try {
        const response = await PrivateAxiosInstance.post(`/update-company-profile`, data);
        return response.data;
    } catch (error) {
        throw new Error(error?.response?.data?.message);
    }
};
