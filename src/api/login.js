import axios from 'axios';

import {API_URL} from './baseAPI'
import querystring from "querystring";

export const authApi = {
    auth: async (login, password) => {

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        const response = await axios.post(`${API_URL}login`, querystring.stringify({
            username: login,
            password: password
        }), config);
        if (response.status === 200) {
            const token = response.data.token;

            axios.defaults.headers.common.Authorization = token;
            localStorage.setItem('authToken', token);
        }
    }
}
