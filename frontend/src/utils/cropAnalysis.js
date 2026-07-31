// ======================================================
// FarmSafe Crop Analysis Engine
// ======================================================

function checkRange(value, min, max) {
  if (value < min) {
    return { status: "Low", ok: false };
  }

  if (value > max) {
    return { status: "High", ok: false };
  }

  return { status: "Optimal", ok: true };
}

export function analyzeCrop(sensor, crop) {
  // -----------------------------
  // Sensor Offline
  // -----------------------------

  if (!sensor.connected) {
    return {
      connected: false,

      healthScore: 0,

      irrigation: {
        title: "--",
        message: "Waiting for ESP32 sensor data.",
        value: "--",
      },

      fertilizer: {
        title: "--",
        message: "Waiting for ESP32 sensor data.",
      },

      status: {
        overall: "Offline",

        temperature: { status: "--" },
        humidity: { status: "--" },
        soil: { status: "--" },
        air: { status: "--" },
      },

      actions: [],

      summary:
        "Connect the ESP32 to receive live crop recommendations.",
    };
  }

  // -----------------------------
  // Ideal Values
  // -----------------------------

  const ideal = crop.idealConditions;

  const temperature = checkRange(
    sensor.temperature,
    ideal.temperature.min,
    ideal.temperature.max
  );

  const humidity = checkRange(
    sensor.humidity,
    ideal.humidity.min,
    ideal.humidity.max
  );

  const soil = checkRange(
    sensor.soil,
    ideal.soilMoisture.min,
    ideal.soilMoisture.max
  );

  const air =
    sensor.airQuality <= ideal.airQuality.max
      ? {
          status: "Good",
          ok: true,
        }
      : {
          status: "Poor",
          ok: false,
        };

  // -----------------------------
  // Health Score
  // -----------------------------

  let score = 0;

  if (temperature.ok) score += 25;
  if (humidity.ok) score += 25;
  if (soil.ok) score += 35;
  if (air.ok) score += 15;

  // -----------------------------
  // Overall Status
  // -----------------------------

  let overall = "";

  if (score >= 90) {
    overall = "Excellent";
  } else if (score >= 70) {
    overall = "Good";
  } else if (score >= 50) {
    overall = "Moderate";
  } else {
    overall = "Critical";
  }

  // -----------------------------
  // Irrigation
  // -----------------------------

  let irrigation = {
    title: "No Irrigation Required",
    message: "Soil moisture is within the ideal range.",
    value: "Optimal",
  };

  if (sensor.soil < ideal.soilMoisture.min) {
    irrigation = {
      title: "Irrigation Required",
      message:
        "Soil moisture is low. Water the crop as soon as possible.",
      value: crop.water.requirement,
    };
  }

  if (sensor.soil > ideal.soilMoisture.max) {
    irrigation = {
      title: "Stop Irrigation",
      message:
        "Soil moisture is too high. Stop irrigation temporarily.",
      value: "No Irrigation",
    };
  }

  // -----------------------------
  // Fertilizer
  // -----------------------------

  let fertilizer = {
    title: "Recommended",

    message: crop.fertilizer.nitrogen,
  };

  if (sensor.soil < ideal.soilMoisture.min) {
    fertilizer = {
      title: "Delay Fertilizer",

      message:
        "Apply irrigation before fertilizer for better absorption.",
    };
  }

  if (sensor.soil > ideal.soilMoisture.max) {
    fertilizer = {
      title: "Delay Fertilizer",

      message:
        "Wait until excess moisture reduces before applying fertilizer.",
    };
  }

  // -----------------------------
  // Action Plan
  // -----------------------------

  const actions = [];

  if (!temperature.ok)
    actions.push("Adjust temperature if possible.");

  if (!humidity.ok)
    actions.push("Monitor humidity.");

  if (!soil.ok)
    actions.push("Inspect soil moisture.");

  if (!air.ok)
    actions.push("Poor air quality detected.");

  if (actions.length === 0) {
    actions.push("Continue normal monitoring.");
    actions.push("Inspect crops every morning.");
    actions.push("Keep irrigation schedule unchanged.");
  }

  // -----------------------------
  // AI Summary
  // -----------------------------

  let summary = "";

  if (overall === "Excellent") {
    summary = `${crop.name} is growing under excellent environmental conditions. Continue regular monitoring.`;
  }

  if (overall === "Good") {
    summary = `${crop.name} is healthy, but one or two parameters should be monitored.`;
  }

  if (overall === "Moderate") {
    summary = `${crop.name} is under moderate stress. Follow the recommended actions.`;
  }

  if (overall === "Critical") {
    summary = `${crop.name} is under critical environmental stress. Immediate attention is recommended.`;
  }

  // -----------------------------
  // Return
  // -----------------------------

  return {
    connected: true,

    healthScore: score,

    irrigation,

    fertilizer,

    summary,

    actions,

    status: {
      overall,

      temperature,

      humidity,

      soil,

      air,
    },
  };
}