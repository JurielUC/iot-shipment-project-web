import { Navigate } from "react-router-dom";
import useAuth from "@/hooks/use-auth";

import LoadingScreen from "@/components/common/LoadingScreen";

function RoleRoute({ allow = [], children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <>
        <LoadingScreen />
      </>
    );
  }

  if (allow.includes("##")) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!allow.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}

export default RoleRoute;