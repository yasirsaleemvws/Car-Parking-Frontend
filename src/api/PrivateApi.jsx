import { PrivateAxiosInstance } from "../config/axios";

export const GET__PARKING_LIST = async (page, rowsPerPage) => {
    try {
        const response = await PrivateAxiosInstance.get(`/parking-list?page=${page}&limit=${rowsPerPage}`);
        return response.data;
    } catch (error) {
        throw new Error(error?.response?.data?.message);
    }
};
