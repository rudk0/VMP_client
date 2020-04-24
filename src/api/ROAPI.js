import axios from "axios"
import {API_URL} from "./baseAPI";

export const ROApi = {
  postRo: (Ro) => {
    return axios.post(`${API_URL}ao`, Ro);
}
}