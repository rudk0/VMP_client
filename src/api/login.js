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
            const {firstName, lastName, cityId, roles, id} = response.data;
            axios.defaults.headers.common.Authorization = 'Bearer '+jwt;
            localStorage.setItem('authToken', jwt);
            localStorage.setItem('name', firstName);
            localStorage.setItem('surname', lastName);
            localStorage.setItem('cityId', cityId);
            localStorage.setItem('role', roles[0]);
            localStorage.setItem('id', id);
        }
    }
}
export const initializeAuth = () => {
    const token = localStorage.getItem('authToken');
    if (token) {
        axios.defaults.headers.common.Authorization = 'Bearer ' + token;
    }
}
initializeAuth();