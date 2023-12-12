import { useState } from "react";
import { myHost } from "./Host";

export function Sample({roomId}) {
  const [serverUrl, setServerUrl] = useState("https://localhost:1234");

  myHost({
    serverUrl: serverUrl,
    roomId: roomId,
  });

  return (
    <>
      <label>
        Server URL:
        <input
          value={serverUrl}
          onChange={(e) => setServerUrl(e.target.value)}
        ></input>
      </label>
      <h1>Welcome to the {roomId} room!</h1>
    </>
  );
}

export default function Room() {
  const [roomId, setRoomId] = useState("general");
  const [show, setShow] = useState(false);

  return (
    <>
      <label>
        Choose the Chat Room: {""}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
        <button onClick={() => setShow(!show)}>
          {show ? "Close Chat" : "Open Chat"}
        </button>
      </label>

      {show && <Sample roomId={roomId} />}
    </>
  );
}
