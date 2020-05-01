import axios from "axios"
import {API_URL} from "./baseAPI";

export const kpAPI= {
  postKP: (KP) => {
    return axios.post(`${API_URL}cp_form_estimate`, KP);
  }
}