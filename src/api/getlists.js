import axios from 'axios';

import {API_URL} from './baseAPI'

export const listsApi = {
  getTypes: async () => {
    return axios.get(API_URL + 'types');
  }
}
