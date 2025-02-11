import axios from "axios";

// const API_BASE_URL = "https://api.github.com/orgs/react-native-community/repos?";
// const API_SEARCH_BASE_URL = "https://api.github.com/search/repositories?";

// export const fetchDataApi = async (limit, page) => {
//     const response = await axios.get(`${API_BASE_URL}per_page=${limit}&page=${page}`);
//     return response.data;
// };

// export const fetchDataSearchApi = async (query) => {
//     const response = await axios.get(`${API_SEARCH_BASE_URL}q=${query}+org:react-native-community`);
//     return response.data;
// };

const apiClient = axios.create({
    baseURL: "https://api.github.com",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/vnd.github.v3+json",
    },
});

export const fetchDataApi = async (limit = 10, page = 1, sort, direction) => {
    try {
        const response = await apiClient.get("/orgs/react-native-community/repos", {
            params: {
                per_page: limit,
                page,
                sort, //updated|pushed
                direction //asc|desc
            },
        });
        return { success: true, data: response.data };
    } catch (error) {
        return handleApiError(error);
    }
};

export const fetchDataSearchApi = async ({ query, language, sort, order }) => {
    try {
        const searchQuery = `${query ? `${query} ` : ""}org:react-native-community${language ? ` language:${language}` : ""}`;
        const response = await apiClient.get("/search/repositories", {
            params: {
                q: searchQuery,
                sort: sort || "updated", //stars|forks|updated
                order: order || "asc", //asc|desc
            },
        });
        return { success: true, data: response.data };
    } catch (error) {
        return handleApiError(error);
    }
};

const handleApiError = (error) => {
    if (error.response) {
        console.error("API Error Resp data:", error.response.data);
        console.error("API Error Resp status:", error.response.status);
        console.error("API Error Resp headers:", error.response.headers);
        return {
            success: false,
            message: error.response.data.message,
        };
    } else if (error.request) {
        console.error("API No Resp:", error.request);
        return {
            success: false,
            message: "No response from the server.",
        };
    } else {
        console.error("API Request err:", error.message);
        return {
            success: false,
            message: error.message,
        };
    }
};

// const handleApiError = (error) => {
//     if (error.response) {
//         console.error('Error response data:', error.response.data);
//         console.error('Error response status:', error.response.status);
//         console.error('Error response headers:', error.response.headers);
//     } else if (error.request) {
//         console.error('Error request:', error.request);
//     } else {
//         console.error('Error message:', error.message);
//     }
//     console.error('Error config:', error.config);
// };