import PortalLayout from "./PortalLayout";
import adminMenus from "@/data/adminMenus";

function AdminLayout({ children }) {
  return (
    <PortalLayout menus={adminMenus} portalName="Bantay Biyahe">
      {children}
    </PortalLayout>
  );
}

export default AdminLayout;
