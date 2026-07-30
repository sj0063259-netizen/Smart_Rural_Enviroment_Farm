import axios from "axios";

const API = axios.create({
    baseURL: "https://smart-rural-enviroment-farm-2.onrender.com/api"
});

export const getLatestSensorData = () =>
    API.get("/latest");

export const getHealthStatus = () =>
    API.get("/health");