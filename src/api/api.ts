import axios from "axios";

const api = axios.create({
    baseURL: "https://viacep.com.br/ws",
    responseType: "json"
});

export default api;