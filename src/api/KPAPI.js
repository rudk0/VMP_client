import axios from "axios"
import {API_URL} from "./baseAPI";

export const KPApi = {
  formEstimate: async (ids)=>{
    return axios.post(`${API_URL}cp_form_estimate`, ids)
  }
}