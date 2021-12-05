import axios from "axios";

const api = axios.create({
  baseURL: `https://sleepy-keller-c69b3d.netlify.app/api`,
});

export default api;
