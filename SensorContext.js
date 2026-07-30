import { createContext, useContext, useEffect, useState } from "react";
import { getLatestData } from "../services/api";
import socket from "../services/socket";

const SensorContext = createContext();

export function SensorProvider({ children }) {

    const [sensorData, setSensorData] = useState(null);

    useEffect(() => {

        async function loadData() {

            try {

                const response = await getLatestData();

                if (response.success) {
                    setSensorData(response.data);
                }

            } catch (err) {

                console.log("Waiting for ESP32...");

            }

        }

        loadData();

        socket.on("sensorData", (data) => {

            setSensorData(data);

        });

        return () => {

            socket.off("sensorData");

        };

    }, []);

    return (

        <SensorContext.Provider value={{ sensorData }}>

            {children}

        </SensorContext.Provider>

    );

}

export function useSensor() {

    return useContext(SensorContext);

}