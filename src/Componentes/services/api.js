import axios from "axios";

const api = axios.create({
  baseURL: "https://advotech-3e6650f87814.herokuapp.com",
});

export default api;
