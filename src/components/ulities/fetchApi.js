import axios from "axios";
import baseUrl from "../config/ApiUrl";
const apiFetch = async () => {
  try {
    let apiValue = await axios.get(baseUrl+'line-chart');
    return apiValue;
  } catch (error) {
    return error;
  }
};

export default apiFetch;
