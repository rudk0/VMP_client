import axios from 'axios';

import {API_URL} from './baseAPI'

export const authApi = {
    auth: async (login, password) => {


        const response = await axios.post(`${API_URL}api/auth/signin`, {
            login,
            password
        } );
        if (response.status === 200) {
            const token = response.data.token;
            const {firstName, lastName} = response.data;
            axios.defaults.headers.common.Authorization = token;
            localStorage.setItem('authToken', token);
            localStorage.setItem('name', firstName);
            localStorage.setItem('surname', lastName);
        }
    }
}
