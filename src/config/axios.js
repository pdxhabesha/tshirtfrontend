import axios from "axios";

let api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});
if (localStorage.getItem("token")) {
    api.defaults.headers.common["Authorization"] = `Bearer ${
        localStorage.token
        }`;
}

export default api;
