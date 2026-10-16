import LoginPage from "@/pages/auth/LoginPage";
import UnauthorizedPage from "@/pages/system/UnauthorizedPage";
import NotFoundPage from "@/pages/system/NotFoundPage";

const authRoutes = [
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/unauthorized",
    element: <UnauthorizedPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export default authRoutes;