import React, { createContext, useContext, useEffect, ReactNode, useRef } from "react";
import { io, Socket } from "socket.io-client";

interface SocketContextType {
  updatePosition: (
    userId: string,
    position: [number, number, number],
    rotation: [number, number, number]
  ) => void;
  onVisiblePlayersUpdate: (
    callback: (visiblePlayers: any[]) => void
  ) => void;
  socket: Socket | null;
}

const SocketContext = createContext<SocketContextType>({
  updatePosition: () => {},
  onVisiblePlayersUpdate: () => {},
  socket: null,
});

export const SocketProvider = ({ children }: { children: ReactNode }) => {
  const socket = useRef<Socket | null>(null);

  useEffect(() => {
    // Inicializa a conexão do socket
    socket.current = io("https://portifoliodb.onrender.com", {
  transports: ["websocket", "polling"],
  reconnection: true, // Reconexão automática
});


    socket.current.on("connect", () => {
      console.log("Conectado ao servidor de sockets:", socket.current?.id);
    });

    socket.current.on("disconnect", () => {
      console.log("Desconectado do servidor de sockets.");
    });

    return () => {
      socket.current?.disconnect();
    };
  }, []);

  /**
   * Atualiza a posição do jogador no servidor.
   */
  const updatePosition = (
    userId: string,
    position: [number, number, number],
    rotation: [number, number, number]
  ) => {
    if (!socket.current) return;
    socket.current.emit("updatePosition", { userId, position, rotation });
    //console.log("Enviando posição ao servidor:", { userId, position, rotation });//
  };

  /**
   * Escuta atualizações de jogadores visíveis.
   */
  const onVisiblePlayersUpdate = (callback: (visiblePlayers: any[]) => void) => {
    if (!socket.current) return;
    socket.current.on("updateVisiblePlayers", callback);

    return () => {
      socket.current?.off("updateVisiblePlayers", callback);
    };
  };

  return (
    <SocketContext.Provider value={{ updatePosition, onVisiblePlayersUpdate, socket: socket.current }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);
