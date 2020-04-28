import axios from 'axios';

import {API_URL} from './baseAPI'

export const AOApi = {
  getTypes: async () => {
    return axios.get(API_URL + 'types');
  },
  getCities: async () => {
    return axios.get(API_URL + 'cities');
  },
  getFormats() {
    return axios.get(API_URL + 'formats');
  },
  getSegments() {
    return axios.get(API_URL + 'segments');
  },
  getSignificance() {
    return axios.get(API_URL + 'significance');
  },
  getList(filters) {
    return axios.get(API_URL + 'ao', filters);
  }
}

