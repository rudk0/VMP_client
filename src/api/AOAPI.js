import axios from 'axios';

import {API_URL} from './baseAPI'
import {camelize} from "../helpers/helperOtPoliny";
import { Base64 } from 'js-base64';
const hexToBase64 = (str) =>  {
  return btoa(String.fromCharCode.apply(null, str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")));
}
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
    return axios({method: "get", url: API_URL + 'ao?'  + query}).then((res)=>{
      axios({method: "get", url: `${API_URL}load_photo/${24}`, responseType: "blob"}).then((res)=> {
        let a = document.createElement('img')
        console.log(res.data);
        a.src=  URL.createObjectURL(res.data);
      //  document.body.appendChild(a);
//        console.log(res.headers)
      })
      return res;
    });
  }
  
}