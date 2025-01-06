import React, { useMemo } from "react";
import { useGameStore } from "../store/gameStore";
import { useDivineForge } from "../store/divineForgeStore"; // Importa o estado do Divine Forge
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";

const VoxelPart = ({ part }) => {
  const { addPart } = useGameStore(); // Para adicionar o bloco
  const { selectedMaterial } = useDivineForge(); // Obtém o material selecionado
  const { position } = part;

  // Gera textura com a cor do material selecionado
  const texture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");

    const color = selectedMaterial?.color || "#ff00ff"; // Usa a cor do material selecionado ou rosa padrão
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 64, 64);

    return new THREE.CanvasTexture(canvas);
  }, [selectedMaterial]);

  // Função para calcular a nova posição do bloco com base na face clicada
  const calculateNewPosition = (faceIndex, currentPosition) => {
    const offsets = [
      [0, 1, 0], // Topo
      [0, -1, 0], // Base
      [-1, 0, 0], // Lateral esquerda
      [1, 0, 0], // Lateral direita
      [0, 0, -1], // Frente
      [0, 0, 1], // Trás
    ];
    const offset = offsets[faceIndex] || [0, 0, 0];
    return [
      currentPosition[0] + offset[0],
      currentPosition[1] + offset[1],
      currentPosition[2] + offset[2],
    ];
  };

  // Evento de clique para adicionar o bloco na posição correta
  const handleClick = (event) => {
    if (!selectedMaterial) {
      console.error("Nenhum material foi selecionado no Divine Forge.");
      return;
    }

    const faceIndex = event.faceIndex % 6; // Identifica a face clicada (0-5)
    const newPosition = calculateNewPosition(faceIndex, position);

    addPart({
      id: `divine-${Date.now()}`,
      materialId: selectedMaterial.id,
      position: newPosition,
      customBlock: true,
    });

    console.log(
      `Bloco com material ${selectedMaterial.name} adicionado na posição ${newPosition}.`
    );
  };

  return (
    <group position={position} onClick={handleClick}>
      <RigidBody type="fixed">
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial map={texture} />
        </mesh>
      </RigidBody>
    </group>
  );
};

export { VoxelPart };
