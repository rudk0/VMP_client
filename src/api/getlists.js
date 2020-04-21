import axios from 'axios';

import {API_URL} from './baseAPI'

export const listsApi = {
    getTypes: async (token) => {
        const AuthStr = 'Bearer '.concat(token);
        axios.get(API_URL+'ao_list_types', { headers: { Authorization: AuthStr } })
            .then(res => {
                const types = res.data;
                this.setState({types});
            })
    }
}
