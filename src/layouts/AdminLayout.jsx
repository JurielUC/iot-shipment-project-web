import PortalLayout from "./PortalLayout";
import adminMenus from "@/data/adminMenus";

function AdminLayout({ children }) {
  return (
    <PortalLayout menus={adminMenus} portalName="Admin Portal">
      {children}
    </PortalLayout>
  );
}

export default AdminLayout;