function validateSensorData(data) {
    const requiredFields = [
        "temperature",
        "humidity",
        "soil",
        "airQuality",
        "battery"
    ];

    for (const field of requiredFields) {
        if (data[field] === undefined) {
            return `Missing field: ${field}`;
        }
    }

    return null;
}

module.exports = {
    validateSensorData
};