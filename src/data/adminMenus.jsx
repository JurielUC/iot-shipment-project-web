import { Camera, ChartNoAxesCombined, Cpu, History, LayoutDashboard, Settings } from "lucide-react";

const adminMenus = [
    { icon: LayoutDashboard, name: "Overview", path: "/admin/dashboard" },
    { icon: Camera, name: "New Inspection", path: "/admin/inspect" },
    { icon: History, name: "Inspection History", path: "/admin/history" },
    { icon: ChartNoAxesCombined, name: "Category Summary", path: "/admin/categories" },
    { icon: Cpu, name: "Device & Model", path: "/admin/system" },
    { icon: Settings, name: "Settings", path: "/admin/settings" },
];

export default adminMenus;
