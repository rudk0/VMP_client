import axios from 'axios';

import {API_URL} from './baseAPI'

export const authApi = {
    auth: async (login, password) => {
        const response = await axios.post(`${API_URL}api/auth/signin`, {
            login,
            password
        });
        if (response.status === 200) {
            const jwt = response.data.jwt;
            const {firstName, lastName, cityId, roles} = response.data;
            axios.defaults.headers.common.Authorization = jwt;
            localStorage.setItem('authToken', jwt);
            localStorage.setItem('name', firstName);
            localStorage.setItem('surname', lastName);
            localStorage.setItem('cityId', cityId);
            localStorage.setItem('role', roles[0]);
        }
    }
}
export const initializeAuth = () => {
    const token = localStorage.getItem('authToken');
    if (token) {
        axios.defaults.headers.common.Authorization = token;
    }
}
initializeAuth();