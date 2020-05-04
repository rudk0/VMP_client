import axios from 'axios';

import {API_URL} from './baseAPI'

export const DbApi = {
  deleteCity: async (id) => {
    return axios.delete(API_URL + 'city/' + id);
  },
  addCity: async (city) => {
    return axios.post(API_URL + 'city/', {city});
  },
  changeCity: async (id, city) => {
    console.log(city)
    return axios.put(API_URL + 'city/'+ id, {city});
  },
  addFormat: async (format) => {
    return axios.post(API_URL + 'formats/', {format})
  },
  deleteFormat: async (id) => {
    return axios.delete(API_URL + 'formats/' + id);
  },
  deleteTypes: async (id) => {
    return axios.delete(API_URL + 'types/'+ id);
  },
  addType: async (type) => {
    return axios.post(API_URL + 'types/', {type});
  },
  addSegment: async (segment) => {
    return axios.post(API_URL + 'segments/', {segment});
  },
  deleteSegment: async (id) => {
    return axios.delete(API_URL + 'segments/'+ id);
  },
  addSignificance: async (significance) => {
    return axios.post(API_URL + 'significance/',   {significance});
  },

  deleteSignificance: async (id) => {
    return axios.delete(API_URL + 'significance/'+ id);
  }
}