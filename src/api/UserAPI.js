import axios from 'axios';

import {API_URL} from './baseAPI'

export const UsersApi = {
  getUsers: async () => {
    return axios.get(API_URL + 'users');
  },
  deleteUser: async (id)=>{
    return axios.delete(API_URL +'user/' + id)
  },
  changePassword: async (password, id) =>{
    return axios.put(API_URL + 'updatePassword/'+ id+"/"+password.password);
  },
  createUser: (user) => {
    return axios.post(`${API_URL}api/auth/signup`, user);
  }
}