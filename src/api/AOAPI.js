import axios from 'axios';

import {API_URL} from './baseAPI'
import {camelize} from "../helpers/helperOtPoliny";

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
  deleteAO(id){
    return axios.delete(API_URL + 'ao/' + id)
  },
  getList(filters) {
    const esc = encodeURIComponent;
    const query = filters ?  Object.keys(filters).map(k => esc(camelize(k) ) + '=' + filters[k]).join('&') : '';
    return axios({method: "get", url: API_URL + 'ao?'  + query});
  }
  
}