# Dried Food Vision

A static React/Vite prototype for the proposed **IoT-Based Intelligent Inspection and Classification System for Selected Dried Food Products**.

The interface demonstrates the intended ESP32-CAM workflow for five image-classification categories:

- Dried fish (Daing / Tuyo)
- Dried cassava products (exact product form still to be confirmed)
- Dried squid (Pusit)
- Banana chips
- Dried shrimp (Hibe)

## Static prototype scope

The current app uses local mock records and a sample SVG camera capture. Camera capture, image upload, Machine Learning inference, Flask, and SQLite are not connected yet. Dashboard values are clearly presented as demo values and must not be reported as research results.

The prototype performs product-identification presentation only. It does not assess quality, freshness, moisture, contamination, or food safety, and it does not sort or monitor products during transport.

## Run locally

```bash
npm install
npm run dev
```

Demo login:

```text
admin@driedfoodvision.test
demo1234
```

## Available screens

- Inspection overview
- New inspection static capture/upload simulation
- Inspection history
- Five-category summary
- ESP32-CAM and proposed MobileNetV2 system view
- Demo confidence-threshold settings

## Future integration

The proposal recommends an ESP32-CAM with OV2640, a Python/Flask backend, OpenCV preprocessing, TensorFlow/Keras with MobileNetV2 transfer learning, and SQLite record storage. Those components should replace the fixtures in `src/data/mock/inspectionData.js` when implementation begins.
