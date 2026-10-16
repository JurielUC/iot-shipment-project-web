import { useRoutes } from "react-router-dom";

import authRoutes from "./authRoutes";
import adminRoutes from "./adminRoutes";

function AppRoutes() {
  return useRoutes([
    ...authRoutes,
    ...adminRoutes,
  ]);
}

export default AppRoutes;