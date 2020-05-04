import axios from "axios"
import {API_URL} from "./baseAPI";

export const KPApi = {
  formEstimate: async (ids) => {
    return axios.post(`${API_URL}cp_form_estimate`, ids)
  },
  preview: async (estimates, b1_price) => {
    return axios.post(`${API_URL}cp_count/${b1_price}`, estimates)
  },
  formKp: async (data) => {
    return axios({url: `${API_URL}cp`, method: 'post',responseType: 'blob', data})
  }
}