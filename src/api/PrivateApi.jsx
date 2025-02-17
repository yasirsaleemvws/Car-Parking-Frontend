import { PrivateAxiosInstance } from "../config/axios";


export const API_POST__CREATE_EVENT = async (data) => {
    try {
        const response = await PrivateAxiosInstance.post("events/add-event", data);
        return response.data;
    } catch (error) {
        throw new Error(error?.response?.data?.message || "Failed to create event.");
    }
};

export const API_POST__UPDATE_EVENT = async (data) => {
    try {
        const response = await PrivateAxiosInstance.post("events/update-event", data);
        return response.data;
    } catch (error) {
        throw new Error(error?.response?.data?.message || "Failed to create event.");
    }
};


export const API_POST__UPLOAD_FILE = async (data) => {
    try {
        const response = await PrivateAxiosInstance.post("events/upload-file", data);
        return response.data;
    } catch (error) {
        throw new Error(error?.response?.data?.message || "Failed to upload file.");
    }
};


export const API_GET__EVENTS = async (data) => {
    try {
        const response = await PrivateAxiosInstance.post(`events/get-event`, data);
        return response.data;
    } catch (error) {
        throw new Error(error?.response?.data?.message || "Failed to fetch events.");
    }
};


export const API_GET__ORGANIZERS = async (data) => {
    try {
        const response = await PrivateAxiosInstance.post(`admin/users`, data);
        return response.data;
    } catch (error) {
        throw new Error(error?.response?.data?.message || "Failed to fetch events.");
    }
};


export const API_GET__SPONSOR = async (data) => {
    try {
        const response = await PrivateAxiosInstance.post(`sponsors/get-sponsors`, data);
        return response.data;
    } catch (error) {
        throw new Error(error?.response?.data?.message || "Failed to fetch sponsor list.");
    }
};

export const API_GET__DELETE_EVENT = async (data) => {
    try {
        const response = await PrivateAxiosInstance.post(`events/delete-event`, data);
        return response.data;
    } catch (error) {
        throw new Error(error?.response?.data?.message || "Failed to delete event.");
    }
};

export const API_GET__APPROVE_EVENT = async (data) => {
    try {
        const response = await PrivateAxiosInstance.post(`admin/update-event-status`, data);
        return response.data;
    } catch (error) {
        throw new Error(error?.response?.data?.message || "Failed to approve event.");
    }
};

export const API_GET_EVENT_DETAIL = async (data) => {
    try {
        const response = await PrivateAxiosInstance.post("events/event-detail", data);
        return response.data;
    } catch (error) {
        console.error("Error in contact us:", error);
        throw error;
    }
};

export const API_GET_SPONSOR_DETAIL = async (data) => {
    try {
        const response = await PrivateAxiosInstance.post("sponsors/sponsor-detail", data);
        return response.data;
    } catch (error) {
        console.error("Error in contact us:", error);
        throw error;
    }
};


export const API_POST__BECOME_SPONSER = async (data) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        const response = await PrivateAxiosInstance.post("events/become-sponsor", data, {
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

export const API_POST__UPDATE_REQUEST = async (data) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        const response = await PrivateAxiosInstance.post("events/update-sponsorship-request", data, {
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
