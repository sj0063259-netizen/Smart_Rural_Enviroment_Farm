import { io } from "socket.io-client";

const socket = io("https://smart-rural-enviroment-farm-2.onrender.com", {
  transports: ["websocket"],
  autoConnect: true,
});

export default socket;