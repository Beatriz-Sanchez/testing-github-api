import axios from 'axios';

const baseApi = axios.create({
    baseURL: "http://api.github.com",
    headers: {
        "Content-Type": "application/json",
    },
});

export default baseApi;