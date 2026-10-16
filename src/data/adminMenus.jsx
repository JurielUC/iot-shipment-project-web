import { BellRing, Boxes, Cpu, LayoutDashboard, ScrollText, Settings } from "lucide-react";

const adminMenus = [
    { icon: LayoutDashboard, name: "Overview", path: "/admin/dashboard" },
    { icon: Boxes, name: "Shipments", path: "/admin/shipments" },
    { icon: BellRing, name: "Alerts", path: "/admin/alerts" },
    { icon: Cpu, name: "IoT Devices", path: "/admin/devices" },
    { icon: ScrollText, name: "Reports", path: "/admin/reports" },
    { icon: Settings, name: "Settings", path: "/admin/settings" },
];

export default adminMenus;
