import { PublicAxiosInstance } from "../config/axios";


export const API_GET_PUBLIC__EVENTS = async (data) => {
    try {
        const response = await PublicAxiosInstance.post("public/get-event", data);
        return response.data;
    } catch (error) {
        console.error("Error in API_POST__UPDATE_USER:", error);
        throw error;
    }
};

export const API_GET_UPCOMMING__EVENTS = async () => {
    try {
        const response = await PublicAxiosInstance.get("public/upcoming-events");
        return response.data;
    } catch (error) {
        console.error("Error in API_POST__UPDATE_USER:", error);
        throw error;
    }
};

export const API_GET_EVENT_DETAIL = async (data) => {
    try {
        const response = await PublicAxiosInstance.post("public/event-detail", data);
        return response.data;
    } catch (error) {
        console.error("Error in contact us:", error);
        throw error;
    }
};

export const API_POST__CONTACT_US = async (data) => {
    try {
        const response = await PublicAxiosInstance.post("public/contact-us", data);
        return response.data;
    } catch (error) {
        console.error("Error in contact us:", error);
        throw error;
    }
};

export const API_POST__CONTACT_ORGANIZER = async (data) => {
    try {
        const response = await PublicAxiosInstance.post("public/contact-organizer", data);
        return response.data;
    } catch (error) {
        console.error("Error in contact us:", error);
        throw error;
    }
};