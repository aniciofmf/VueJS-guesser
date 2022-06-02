import axios from "axios";
import { API } from "../constants/constants";

const axiosApi = axios.create({
	baseURL: API,
});

export default axiosApi;
