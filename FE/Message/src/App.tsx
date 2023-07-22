import React, { useEffect, useState } from "react";
import io from "socket.io-client";
const socket: any = io("https://vercel-server-dun.vercel.app");
// const socket: any = io("http://localhost:8080");

const App: React.FC = () => {
  const [room, setRoom] = useState("");

  const [message, setMessage] = useState("");
  const [messageReceive, setMessageReceive] = useState("");

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  const sendMessage = () => {
    socket.emit("send_message", { message, room });
  };
  useEffect(() => {
    socket.on("receive_message", (data: any) => {
      setMessageReceive(data.message);
    });
  }, [socket]);
  return (
    <>
      <div style={{ minWidth: "100%" }}>
        <div>MESSAGE : {messageReceive}</div>
        <input type="text" onChange={(e) => setRoom(e.target.value)} />
        <button onClick={joinRoom}>Join Room</button>
        <input type="text" onChange={(e) => setMessage(e.target.value)} />
        <button onClick={sendMessage}>Send Message</button>
      </div>
    </>
  );
};

export default App;
