import axiosClient from "./axiosClient";

const authService = {
  csrf() {
    return axiosClient.get("/sanctum/csrf-cookie");
  },

  login(data) {
    return axiosClient.post("/v1/login", data);
  },
  
  logout() {
    return axiosClient.post("/v1/logout");
  },

  me() {
    return axiosClient.get("/api/v1/user");
  },
};

export default authService;