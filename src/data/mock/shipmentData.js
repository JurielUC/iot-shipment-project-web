export const shipmentStats = [
    { title: "Active shipments", value: "04", change: "Across 3 checkpoints", tone: "blue" },
    { title: "Delivered today", value: "12", change: "+3 from yesterday", tone: "green" },
    { title: "Open alerts", value: "03", change: "2 require review", tone: "amber" },
    { title: "Online devices", value: "5/6", change: "1 device offline", tone: "violet" },
];

export const shipments = [
    { id: "FISH-OM-001", commodity: "Yellowfin tuna", route: "Occidental Mindoro → Batangas → Nueva Ecija", status: "For verification", checkpoint: "Nueva Ecija", progress: 100, prototypeWeight: "0.90 kg", representedWeight: "90 kg", temperature: "4.0°C", updated: "Oct 16, 2026 · 3:42 PM", alert: "10% weight difference" },
    { id: "VEG-OM-024", commodity: "Leafy vegetables", route: "Occidental Mindoro → Batangas → Nueva Ecija", status: "At Batangas", checkpoint: "Batangas", progress: 66, prototypeWeight: "1.42 kg", representedWeight: "142 kg", temperature: "5.1°C", updated: "Oct 16, 2026 · 2:18 PM" },
    { id: "FISH-OM-023", commodity: "Milkfish", route: "Occidental Mindoro → Batangas → Nueva Ecija", status: "In transit", checkpoint: "Occidental Mindoro", progress: 33, prototypeWeight: "1.15 kg", representedWeight: "115 kg", temperature: "3.2°C", updated: "Oct 16, 2026 · 1:05 PM" },
    { id: "RICE-OM-018", commodity: "Rice sample", route: "Occidental Mindoro → Batangas → Nueva Ecija", status: "Delivered", checkpoint: "Nueva Ecija", progress: 100, prototypeWeight: "2.00 kg", representedWeight: "200 kg", temperature: "4.4°C", updated: "Oct 16, 2026 · 11:26 AM" },
];

export const shipmentEvents = [
    { location: "Occidental Mindoro", event: "Shipment dispatched", time: "Oct 16 · 8:30 AM", reading: "1.00 kg · 3.0°C", device: "OM-ESP32-01" },
    { location: "Batangas", event: "Arrival confirmed", time: "Oct 16 · 11:48 AM", reading: "4.0°C", device: "BTG-ESP32-01" },
    { location: "Nueva Ecija", event: "Final delivery", time: "Oct 16 · 3:42 PM", reading: "0.90 kg", device: "NE-ESP32-01" },
];

export const alerts = [
    { type: "Weight discrepancy", shipment: "FISH-OM-001", message: "Final weight is 10% below the initial reading. Verification is recommended.", time: "8 min ago", severity: "High" },
    { type: "Temperature", shipment: "VEG-OM-024", message: "Temperature reached 5.1°C, above the 5.0°C demonstration limit.", time: "1 hr ago", severity: "Medium" },
    { type: "Device offline", shipment: "—", message: "Batangas gateway BTG-ESP32-02 has not reported for 34 minutes.", time: "34 min ago", severity: "Low" },
];

export const deviceReadings = [
    { label: "8:30", temperature: 3.0 }, { label: "9:30", temperature: 3.3 },
    { label: "10:30", temperature: 3.6 }, { label: "11:48", temperature: 4.0 },
    { label: "1:00", temperature: 4.2 }, { label: "3:42", temperature: 4.0 },
];
