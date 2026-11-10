export const categorySummary = [
    { category: "Dried fish", commonName: "Daing / Tuyo", count: 18, color: "#2f6b55" },
    { category: "Banana chips", commonName: "Dried banana slices", count: 14, color: "#d79a32" },
    { category: "Dried squid", commonName: "Pusit", count: 11, color: "#9a6548" },
    { category: "Dried shrimp", commonName: "Hibe", count: 9, color: "#cf6849" },
    { category: "Dried cassava", commonName: "Product form to confirm", count: 8, color: "#758d68" },
];

export const inspections = [
    { id: "INS-0060", category: "Dried fish", confidence: 94.8, capturedAt: "Nov 10, 2026 · 3:42 PM", source: "ESP32-CAM", status: "Identified" },
    { id: "INS-0059", category: "Banana chips", confidence: 91.2, capturedAt: "Nov 10, 2026 · 2:18 PM", source: "ESP32-CAM", status: "Identified" },
    { id: "INS-0058", category: "Dried shrimp", confidence: 76.4, capturedAt: "Nov 10, 2026 · 1:05 PM", source: "Manual upload", status: "Needs verification" },
    { id: "INS-0057", category: "Dried squid", confidence: 89.7, capturedAt: "Nov 10, 2026 · 11:26 AM", source: "ESP32-CAM", status: "Identified" },
    { id: "INS-0056", category: "Dried cassava", confidence: 84.1, capturedAt: "Nov 9, 2026 · 4:14 PM", source: "Manual upload", status: "Identified" },
    { id: "INS-0055", category: "Dried fish", confidence: 68.3, capturedAt: "Nov 9, 2026 · 2:37 PM", source: "ESP32-CAM", status: "Needs verification" },
];

export const confidenceDistribution = [
    { range: "Below 70%", count: 3 }, { range: "70–79%", count: 7 },
    { range: "80–89%", count: 21 }, { range: "90–100%", count: 29 },
];

export const systemDevices = [
    { id: "CAM-01", name: "Inspection camera", hardware: "ESP32-CAM · OV2640", ip: "192.168.1.24", status: "Online", lastSeen: "Just now" },
    { id: "LOCAL-ML", name: "Classification server", hardware: "MobileNetV2 · Local server", ip: "192.168.1.10", status: "Ready", lastSeen: "Just now" },
];

export const modelClasses = ["Dried fish", "Dried cassava", "Dried squid", "Banana chips", "Dried shrimp"];
