import { useEffect } from "react";
import { connectionConsole } from "./Connection";

export function myHost({ serverUrl, roomId }) {
  useEffect(() => {
    const  connection = connectionConsole(serverUrl, roomId);
    connection.connect();

    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]);
}
