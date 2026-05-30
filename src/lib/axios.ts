import axios from 'axios'

const api = axios.create({
    baseURL: process.env.BACKEND_API_ENDPOINT || 'http://localhost:5000/api',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
})

// Request Interceptor
api.interceptors.request.use(
    (config) => {
        const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response Interceptor
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            console.log("Unauthorized - maybe logout user");
        }
        return Promise.reject(error);
    }
);

export default api;