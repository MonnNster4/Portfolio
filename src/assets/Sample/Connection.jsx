export function connectionConsole(serverUrl, roomId) {
  return {
    connect() {
      console.log("Connecting to " + roomId + "Server of " + serverUrl);
    },

    disconnect() {
      console.log("Disconnecting to " + roomId + "Server of " + serverUrl);
    },
  };
}
