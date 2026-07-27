import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api"
});

export const getLatestSensorData = () =>
    API.get("/latest");

export const getHealthStatus = () =>
    API.get("/health");