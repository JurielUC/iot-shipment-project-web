import useAuth from "@/hooks/use-auth";
import {
  Bell,
  Menu,
  PanelLeftClose,
  PanelLeftOpen
} from "lucide-react";

function AppHeader({
  onOpenMobileSidebar,
  onToggleSidebar,
  isSidebarCollapsed,
}) {
  const { user } = useAuth();

  const getInitials = () => {
    const first = user?.first_name?.charAt(0) || "";
    const last = user?.last_name?.charAt(0) || "";

    return `${first}${last}`.toUpperCase();
  };

  return (
    <header className="sticky top-0 z-30 flex min-h-16 items-center justify-between border-b border-border bg-card/95 px-4 shadow-sm backdrop-blur sm:px-6">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onOpenMobileSidebar}
          className="rounded-lg p-2 text-muted-foreground transition hover:bg-accent hover:text-accent-foreground lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>

        <button
          type="button"
          onClick={onToggleSidebar}
          className="hidden rounded-lg p-2 text-muted-foreground transition hover:bg-accent hover:text-accent-foreground lg:inline-flex"
        >
          {isSidebarCollapsed ? (
            <PanelLeftOpen className="h-5 w-5" />
          ) : (
            <PanelLeftClose className="h-5 w-5" />
          )}
        </button>

        <div>
          <h1 className="text-base font-semibold text-foreground sm:text-lg">
            Shipment Control Center
          </h1>

          <p className="hidden text-sm text-muted-foreground sm:block">
            Connected route operations · {user.first_name} account
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <button
          type="button"
          className="relative rounded-lg p-2 text-muted-foreground transition hover:bg-accent hover:text-accent-foreground"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-warning" />
        </button>

        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground shadow-sm sm:h-10 sm:w-10">
          {getInitials()}
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
