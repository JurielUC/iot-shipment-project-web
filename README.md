# Bantay Biyahe

Bantay Biyahe is a React web application for monitoring food shipments across Occidental Mindoro, Batangas, and Nueva Ecija. It displays checkpoint activity, weight and temperature readings, IoT device status, alerts, and reports.

The current version uses static demonstration data and a presentation account. It is ready to be connected to the planned REST API and ESP32 devices later.

## Requirements

Install the following before running the application:

- [Node.js](https://nodejs.org/) 20 or newer
- npm, which is included with Node.js

## Installation

Open a terminal in the project directory and install the dependencies:

```bash
npm install
```

If the dependencies have already been installed, this step can be skipped.

## Run the application

Start the Vite development server:

```bash
npm run dev
```

Open the URL shown in the terminal. The default address is usually:

```text
http://localhost:5173
```

Keep the terminal open while using the application. Press `Ctrl+C` to stop the development server.

### Windows PowerShell note

If PowerShell prevents `npm.ps1` from running because of its execution policy, use the Windows command executable instead:

```powershell
npm.cmd install
npm.cmd run dev
```

## Presentation account

Use this static account on the login page:

```text
Email:    admin@bantaybiyahe.test
Password: demo1234
```

The login is stored only for the current browser tab. Logging out or closing the tab clears the demonstration session.

## Production build

Create an optimized build:

```bash
npm run build
```

The generated files will be saved in the `dist` directory. To preview that build locally:

```bash
npm run preview
```

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Generate the production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Check JavaScript and JSX source files |

## Current application sections

- Operations overview
- Shipment monitoring
- Rule-based alerts
- IoT device status
- Reports
- Alert threshold settings

## Current data and API status

Shipment records, sensor readings, alerts, devices, and reports currently use demonstration data stored under `src/data/mock`.

The existing service layer under `src/services` can be connected to the central REST API when the backend is available. The planned integration uses JSON events from ESP32 devices and a shared Shipment ID across all three checkpoints.

Do not treat the static presentation login as production authentication. Real deployment should use the backend authentication, authorization, validation, and audit logging described in the project requirements.
