import {
  LogOut,
  X,
} from "lucide-react";

import { useLocation, useNavigate } from "react-router-dom";

const Logo = "/dried-food-mark.svg";

import useAuth from "@/hooks/use-auth";
import ToastAlert from "@/utils/toastAlert";
import appDetails from "@/utils/appDetails";

function AppSidebar({
  collapsed = false,
  onCloseMobile,
  menus = [],
  portalName = "Portal",
  clientName = appDetails().heading,
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const { logout } = useAuth();

  const handleLogout = () => {
    logout()
      .then(() => {
        ToastAlert({
          type: "success",
          message: "Logged out successfully.",
       });
        navigate("/login", {
          replace: true,
        });
      })
      .catch(() => {
        ToastAlert({
          type: "success",
          message: "Logged out successfully.",
       });
        navigate("/login", {
          replace: true,
        });
      });
  };

  return (
    <aside
      className={`sticky top-0 flex h-screen shrink-0 flex-col overflow-hidden border-r border-border bg-card transition-all duration-300 ${
        collapsed ? "w-20" : "w-72 max-w-[85vw]"
      }`}
    >
      <div
        className={`flex min-h-20 items-center border-b border-border px-5 ${
          collapsed ? "justify-center" : "justify-between"
        }`}
      >
        {!collapsed ? (
          <div className="flex items-center gap-3">
            <img
              src={Logo}
              alt="Logo"
              className="h-12 w-12 rounded-xl bg-slate-950 object-contain p-1.5 shadow-sm"
            />

            <div>
              <h1 className="text-lg font-bold text-foreground">
                {portalName}
              </h1>

              <p className="text-sm text-muted-foreground">
                {clientName}
              </p>
            </div>
          </div>
        ) : (
          <img
            src={Logo}
            alt="Logo"
            className="h-12 w-12 rounded-xl bg-slate-950 object-contain p-1.5 shadow-sm"
          />
        )}

        <button
          type="button"
          onClick={onCloseMobile}
          className="rounded-lg p-2 hover:bg-accent lg:hidden"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto p-4">
        {menus.map((menu) => {
          const Icon = menu.icon;
          const active = location.pathname === menu.path;

          return (
            <button
              key={menu.path}
              type="button"
              onClick={() => {
                navigate(menu.path);
                onCloseMobile?.();
              }}
              className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition ${
                active
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              } ${collapsed ? "justify-center px-0" : ""}`}
            >
              <Icon className="h-5 w-5 shrink-0" />

              {!collapsed && <span>{menu.name}</span>}
            </button>
          );
        })}
      </nav>

      <div className="border-t border-border p-4">
        <button
          type="button"
          onClick={handleLogout}
          className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-red-500 transition hover:bg-red-50 ${
            collapsed ? "justify-center px-0" : ""
          }`}
        >
          <LogOut className="h-5 w-5 shrink-0" />

          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}

export default AppSidebar;
