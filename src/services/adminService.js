import axiosClient from "./axiosClient";

const adminService = {
  getAdminDashboard() {
    return axiosClient.get("/api/v1/admin/dashboard");
  },
};

export default adminService;