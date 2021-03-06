import axios from "axios"
import {API_URL} from "./baseAPI";

export const ROApi = {
  getRoImage: (id) =>{
    return axios.get(`${API_URL}load_photo/${id}`, {
      responseType: 'arraybuffer'
    }).then(response => Buffer.from(response.data, 'binary').toString('base64'))
  },
  postRo: (Ro) => {
    return axios.post(`${API_URL}ao`, Ro)
      .then((res) => {
        let bodyFormData = new FormData();
        bodyFormData.append('file', Ro.photo)
        axios({
          method: 'post',
          url: `${API_URL}ao_photo/${res.data}`,
          data: bodyFormData,
          headers: {'Content-Type': 'multipart/form-data'}
        })
      });
  }
  ,
  getRo: (id) => {
    return axios.get(`${API_URL}ao/${id}`);
  },
  putRo: (Ro, id ) => {
    const {photo}  = Ro;
    delete Ro.photo;
    return axios.put(`${API_URL}ao/${id}`, Ro)
      .then((res) => {
        let bodyFormData = new FormData();
        bodyFormData.append('file', photo)
        axios({
          method: 'post',
          url: `${API_URL}ao_photo/${res.data}`,
          data: bodyFormData,
          headers: {'Content-Type': 'multipart/form-data'}
        })
      });
  }
  
}