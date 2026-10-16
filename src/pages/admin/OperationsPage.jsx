import { AlertTriangle, CheckCircle2, Cpu, Download, FileText, MapPin, Search, Settings2, Signal, Thermometer, Weight } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

import AdminLayout from "@/layouts/AdminLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { alerts, shipments } from "@/data/mock/shipmentData";

const content = {
    shipments: { title: "Shipments", description: "Monitor every registered shipment and its latest checkpoint." },
    alerts: { title: "Alerts", description: "Review rule-based exceptions that need human verification." },
    devices: { title: "IoT devices", description: "Check the ESP32 nodes assigned to each province." },
    reports: { title: "Reports", description: "Prepare printable summaries for monitoring and presentation." },
    settings: { title: "Threshold settings", description: "Configure demonstration rules for sensor readings and delays." },
};

const devices = [
    { id: "OM-ESP32-01", location: "Occidental Mindoro", sensors: "Weight + temperature", status: "Online", seen: "2 min ago" },
    { id: "BTG-ESP32-01", location: "Batangas", sensors: "Temperature", status: "Online", seen: "8 min ago" },
    { id: "NE-ESP32-01", location: "Nueva Ecija", sensors: "Weight", status: "Online", seen: "8 min ago" },
    { id: "BTG-ESP32-02", location: "Batangas", sensors: "Temperature", status: "Offline", seen: "34 min ago" },
];

const OperationsPage = ({ type }) => {
    const [search, setSearch] = useState("");
    const page = content[type];
    const filteredShipments = shipments.filter((item) => `${item.id} ${item.commodity}`.toLowerCase().includes(search.toLowerCase()));
    return <><Helmet><title>{page.title} | Bantay Biyahe</title></Helmet><AdminLayout><div className="mx-auto max-w-[1400px] space-y-6">
        <div><p className="text-sm font-medium text-primary">Operations</p><h1 className="mt-1 text-3xl font-bold">{page.title}</h1><p className="mt-1 text-muted-foreground">{page.description}</p></div>
        {type === "shipments" && <section className="rounded-2xl border bg-card shadow-sm"><div className="flex flex-col gap-3 border-b p-5 sm:flex-row sm:items-center sm:justify-between"><div className="relative max-w-md flex-1"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" /><Input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search shipment ID or commodity" className="pl-9" /></div><Button>Register shipment</Button></div><div className="divide-y">{filteredShipments.map((item) => <div key={item.id} className="grid gap-4 p-5 hover:bg-slate-50 md:grid-cols-[1.2fr_1fr_1fr_auto] md:items-center"><div><div className="flex items-center gap-2"><p className="font-semibold">{item.id}</p><Badge variant={item.status === "For verification" ? "destructive" : "secondary"}>{item.status}</Badge></div><p className="mt-1 text-sm text-muted-foreground">{item.commodity}</p></div><div><p className="flex items-center gap-2 text-sm"><MapPin className="h-4 w-4 text-primary" />{item.checkpoint}</p><div className="mt-2 h-1.5 rounded-full bg-slate-100"><div className="h-full rounded-full bg-primary" style={{ width: `${item.progress}%` }} /></div></div><div className="flex gap-4 text-sm"><span className="flex items-center gap-1"><Weight className="h-4 w-4" />{item.prototypeWeight}</span><span className="flex items-center gap-1"><Thermometer className="h-4 w-4" />{item.temperature}</span></div><Button variant="outline">View journey</Button></div>)}</div></section>}
        {type === "alerts" && <section className="grid gap-4">{alerts.map((alert) => <div key={alert.type} className="flex flex-col gap-4 rounded-2xl border bg-card p-5 shadow-sm sm:flex-row sm:items-center"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-amber-50 text-amber-700"><AlertTriangle /></span><div className="flex-1"><div className="flex gap-2"><h2 className="font-semibold">{alert.type}</h2><Badge variant="outline">{alert.severity}</Badge></div><p className="mt-1 text-sm text-muted-foreground">{alert.message}</p><p className="mt-2 text-xs text-muted-foreground">{alert.shipment} · {alert.time}</p></div><Button variant="outline"><CheckCircle2 /> Mark reviewed</Button></div>)}</section>}
        {type === "devices" && <section className="grid gap-4 md:grid-cols-2">{devices.map((device) => <div key={device.id} className="rounded-2xl border bg-card p-5 shadow-sm"><div className="flex items-start justify-between"><span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-700"><Cpu /></span><Badge variant={device.status === "Online" ? "default" : "destructive"}><Signal /> {device.status}</Badge></div><h2 className="mt-4 font-semibold">{device.id}</h2><p className="text-sm text-muted-foreground">{device.location}</p><div className="mt-4 flex justify-between border-t pt-4 text-xs text-muted-foreground"><span>{device.sensors}</span><span>Seen {device.seen}</span></div></div>)}</section>}
        {type === "reports" && <section className="grid gap-4 md:grid-cols-3">{["Daily shipment summary", "Alert review report", "Device activity log"].map((title) => <div key={title} className="rounded-2xl border bg-card p-5 shadow-sm"><FileText className="h-8 w-8 text-primary" /><h2 className="mt-5 font-semibold">{title}</h2><p className="mt-1 text-sm text-muted-foreground">Updated October 16, 2026</p><Button variant="outline" className="mt-5 w-full"><Download /> Export PDF</Button></div>)}</section>}
        {type === "settings" && <section className="max-w-3xl rounded-2xl border bg-card p-6 shadow-sm"><div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-700"><Settings2 /></span><div><h2 className="font-semibold">Demonstration thresholds</h2><p className="text-sm text-muted-foreground">These values drive transparent, rule-based alerts.</p></div></div><div className="mt-6 grid gap-5 sm:grid-cols-2"><label className="space-y-2 text-sm font-medium">Maximum temperature (°C)<Input defaultValue="5.0" type="number" /></label><label className="space-y-2 text-sm font-medium">Weight difference tolerance (%)<Input defaultValue="5" type="number" /></label><label className="space-y-2 text-sm font-medium">Batangas arrival window (hours)<Input defaultValue="6" type="number" /></label><label className="space-y-2 text-sm font-medium">Nueva Ecija arrival window (hours)<Input defaultValue="12" type="number" /></label></div><Button className="mt-6">Save thresholds</Button></section>}
    </div></AdminLayout></>;
};

export default OperationsPage;
