import axios from "axios";

const api = axios.create ({
    baseURL: "https://m4miniprojeto.onrender.com"
});

export default api;