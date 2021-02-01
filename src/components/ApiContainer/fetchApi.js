import axios from "axios";
import charturl from "./ApiUrl";
const apiFetch = async () => {
  try {
    let apiValue = await axios.get(charturl);
    return apiValue;
  } catch (error) {
    return error;
  }
};

export default apiFetch;
