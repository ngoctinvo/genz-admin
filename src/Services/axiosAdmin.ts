import axios, { AxiosError } from "axios";

// Setup cấu hình mặc định cho axios
const axiosAdmin = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn/api",
  headers: {
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNzEiLCJIZXRIYW5TdHJpbmciOiIxMS8xMi8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NzA3MTY4MDAwMDAiLCJuYmYiOjE2NDU5ODEyMDAsImV4cCI6MTY3MDg2NDQwMH0.hImF3FD5ezlSpmo_fyOBeTlwLGcUfxyEeZIRIddaRFE",
  },
});

axiosAdmin.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.demo = "FE71";
  }

  return config;
});

axiosAdmin.interceptors.response.use(
  (reponse) => {
    return reponse.data.content;
  },
  (error: AxiosError<{ content: string }>) => {
    return error.response?.data?.content;
  }
);

export default axiosAdmin;
