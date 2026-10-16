import {
    LayoutDashboard,
    Users,
    Settings,
} from "lucide-react";

const adminMenus = [
    { icon: LayoutDashboard, name: "Dashboard", path: "/admin/dashboard" },
    { icon: Users, name: "Users", path: "/admin/users" },
    { icon: Settings, name: "Settings", path: "/admin/settings" },
];

export default adminMenus;