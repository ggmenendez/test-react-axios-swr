import axios from 'axios';
import provinces from './provinces';
import regions from './regions';

const api = axios.create({
    baseURL: 'https://covid-api.com/api',
    headers: {
        'Accept': 'application/json'
    }
});

api.provinces = provinces;
api.regions = regions;

export default api;