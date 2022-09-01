import Axios from "axios";

const baseURL = "https://localhost:5000/api"

const api = Axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }});

api.interceptors.response.use(
    function (response) {
    return response;
    },

    function (error) {
        console.error("Error", error);
        switch (error.response.status_code) {
        case 401:
            console.error("401");
            break;
        case 403:
            console.error("Brak uprawnien");
            window.history.pushState("", "Brak uprawnień", "/");
            break;
        default:
            break;
        }
        return Promise.reject(error);
    }
);

export default api;

export const is5xxError = (error: any) => {
    return error?.response?.status >= 500 && error?.response?.status < 600;
};
