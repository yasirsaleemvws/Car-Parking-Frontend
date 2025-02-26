import { PrivateAxiosInstance } from "../config/axios";

export const GET__PARKING_LIST = async (page, rowsPerPage) => {
    try {
        const response = await PrivateAxiosInstance.get(`/parking-list?page=${page}&limit=${rowsPerPage}`);
        return response.data;
    } catch (error) {
        throw new Error(error?.response?.data?.message);
    }
};

export const GET__UPDATE_PASSWORD = async () => {
    try {
        const response = await PrivateAxiosInstance.post(`/update-password`);
        return response.data;
    } catch (error) {
        throw new Error(error?.response?.data?.message);
    }
};
