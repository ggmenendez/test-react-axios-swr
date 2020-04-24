import axios from 'axios';

const api = axios.create({
    baseURL: 'https://covid-api.com/api',
    headers: {
        'Accept': 'application/json'
    }
});

export default api;