import { SERVER_URL } from "constants/serverUrl";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Socket, io } from "socket.io-client";

let socket: Socket;

export const useChat = () => {

  if (!socket) {
    socket = io(SERVER_URL);
  }
  console.log(socket)

  const [chats, setChats] = useState<[]>();
  const [log, setLog] = useState<string>();

  useEffect(() => {
    socket.on("log", (log: string) => {
      setLog(log);
    });

    socket.on("messages", (chats) => {
      setChats(chats);
    });

    socket.emit("messages:get");
  }, []);

  const send = useCallback((payload) => {
    socket.emit("message:post", payload);
  }, []);

  const chatActions = useMemo(
    () => ({
      send,
    }),
    []
  );
  return { chats, log, chatActions };
};