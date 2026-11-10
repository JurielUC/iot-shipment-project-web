import RoleRoute from "./RoleRoute";

import AdminDashboardPage from "@/pages/admin/AdminDashboardPage";
import OperationsPage from "@/pages/admin/OperationsPage";

const adminRoutes = [
  {
    path: "/admin/dashboard",
    element: (
      <RoleRoute allow={["Admin"]}>
        <AdminDashboardPage />
      </RoleRoute>
    ),
  },
  ...["inspect", "history", "categories", "system", "settings"].map((type) => ({
    path: `/admin/${type}`,
    element: <RoleRoute allow={["Admin"]}><OperationsPage type={type} /></RoleRoute>,
  })),
];

export default adminRoutes;
