import RoleRoute from "./RoleRoute";

import AdminDashboardPage from "@/pages/admin/AdminDashboardPage";

const adminRoutes = [
  {
    path: "/admin/dashboard",
    element: (
      <RoleRoute allow={["Admin"]}>
        <AdminDashboardPage />
      </RoleRoute>
    ),
  }
];

export default adminRoutes;