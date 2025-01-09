import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";


function App() {
  const [socket, setSocket] = useState();
  const inputRef = useRef();
  function sendMessage() {
    console.log("button clicked");
    if (!socket) {
      return;
    }
    const message = inputRef.current.value;
    //@ts-ignore
    socket.send(message);
  }
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8000");
    setSocket(ws);
    ws.onmessage = (e) => {
      alert(e.data);
    };
  }, []);
  return (
    <div>
      chat app
      <input type="text" placeholder="message" ref={inputRef} />
      <button onClick={sendMessage}>send</button>
    </div>
  );
}

export default App;
