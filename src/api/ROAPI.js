import axios from "axios"
import {API_URL} from "./baseAPI";

export const ROApi = {
  postRo: (Ro) => {
    return axios.post(`${API_URL}ao`, Ro)
      .then((res)=>{
      let bodyFormData = new FormData();
      bodyFormData.append('file', Ro.photo)
      axios({
        method: 'post',
        url: `${API_URL}ao_photo/${res.data}`,
        data: bodyFormData,
        headers: {'Content-Type': 'multipart/form-data' }
      })
    });
}
}