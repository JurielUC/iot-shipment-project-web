import { useState } from "react";

import AppHeader from "@/components/layout/AppHeader";
import AppSidebar from "@/components/layout/AppSidebar";

function PortalLayout({
  children,
  menus,
  portalName,
}) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-muted lg:flex">
      <div className="hidden lg:block">
        <AppSidebar
          collapsed={isSidebarCollapsed}
          menus={menus}
          portalName={portalName}
        />
      </div>

      {isMobileSidebarOpen && (
        <button
          onClick={() => setIsMobileSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        />
      )}

      <div
        className={`fixed inset-y-0 left-0 z-50 lg:hidden transition-transform duration-300 ${
          isMobileSidebarOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        <AppSidebar
          menus={menus}
          portalName={portalName}
          onCloseMobile={() =>
            setIsMobileSidebarOpen(false)
          }
        />
      </div>

      <div className="flex min-h-screen min-w-0 flex-1 flex-col">
        <AppHeader
          onOpenMobileSidebar={() =>
            setIsMobileSidebarOpen(true)
          }
          onToggleSidebar={() =>
            setIsSidebarCollapsed((prev) => !prev)
          }
          isSidebarCollapsed={isSidebarCollapsed}
        />

        <main className="flex-1 p-4 sm:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

export default PortalLayout;