import { PrivateAxiosInstance } from "../config/axios";

export const GET__PARKING_LIST = async (page, rowsPerPage) => {
    try {
        const response = await PrivateAxiosInstance.get(`/parking-list?page=${page}&limit=${rowsPerPage}`);
        return response.data;
    } catch (error) {
        throw new Error(error?.response?.data?.message);
    }
};

export const POST_PASSWORD = async (data) => {
    try {
        const response = await PrivateAxiosInstance.post(`/update-password`, data);
        return response.data;
    } catch (error) {
        throw new Error(error?.response?.data?.message);
    }
};

export const POST_COMPANY_PROFILE = async (data) => {
    try {
        const response = await PrivateAxiosInstance.post(`companies/update-company`, data);
        return response.data;
    } catch (error) {
        throw new Error(error?.response?.data?.message);
    }
};

export const POST_PROFILE = async (data) => {
    try {
        const response = await PrivateAxiosInstance.post(`auth/update-profile`, data);
        return response.data;
    } catch (error) {
        throw new Error(error?.response?.data?.message);
    }
};

export const POST_NOTIFICATION_PREFERENCES = async (data) => {
    try {
        const response = await PrivateAxiosInstance.post(`notifications/update-notification-preferences`, data);
        return response.data;
    } catch (error) {
        throw new Error(error?.response?.data?.message);
    }
};

export const POST_DISPLAY_MODE = async (data) => {
    try {
        const response = await PrivateAxiosInstance.post(`settings/set-display-mode`, data);
        return response.data;
    } catch (error) {
        throw new Error(error?.response?.data?.message);
    }
};

export const GET_PROFILE_INFO = async () => {
    try {
        const response = await PrivateAxiosInstance.get(`settings/fetch-user-settings`);
        return response.data;
    } catch (error) {
        throw new Error(error?.response?.data?.message);
    }
};
