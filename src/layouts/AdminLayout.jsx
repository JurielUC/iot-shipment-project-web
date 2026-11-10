import PortalLayout from "./PortalLayout";
import adminMenus from "@/data/adminMenus";

function AdminLayout({ children }) {
  return (
    <PortalLayout menus={adminMenus} portalName="Dried Food Vision">
      {children}
    </PortalLayout>
  );
}

export default AdminLayout;
