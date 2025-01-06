import React, { useEffect } from "react";
import { useSocket } from "context/SocketProvider";
import { useGameStore } from "components/store/gameStore";
import SimpleEntity from "./SimpleEntity";

export function Entities() {
  const entities = useGameStore((state) => state.entities);
  const setEntities = useGameStore((state) => state.setEntities);
  const { onVisiblePlayersUpdate, updatePosition } = useSocket();

  useEffect(() => {
    const userId = localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData")!).id
      : "";

    if (!userId) {
      console.error("Nenhum userId encontrado no localStorage.");
      return;
    }

    // Escuta atualizações de jogadores visíveis
    const handleVisiblePlayersUpdate = (visiblePlayers: any[]) => {
      console.log("Jogadores visíveis atualizados:", visiblePlayers);
      setEntities(
        visiblePlayers.map((player) => ({
          id: player.id,
          position: player.position,
          rotation: player.rotation,
        }))
      );
    };

    onVisiblePlayersUpdate(handleVisiblePlayersUpdate);

    // Simulação de envio de posição inicial
    const position: [number, number, number] = [0, 0, 0]; // Substituir pela posição real
    const rotation: [number, number, number] = [0, 0, 0]; // Substituir pela rotação real
    updatePosition(userId, position, rotation);

    return () => {
      // Remove listener ao desmontar
      onVisiblePlayersUpdate(() => {});
    };
  }, [setEntities, onVisiblePlayersUpdate, updatePosition]);

  if (!entities.length) {
    console.warn("Nenhuma entidade encontrada para renderizar.");
    return null;
  }

  return (
    <>
      {entities.map(({ id, position, rotation }) => (
        <SimpleEntity
          key={id}
          id={id}
          position={position}
          rotation={rotation}
        />
      ))}
    </>
  );
}

export default Entities;
