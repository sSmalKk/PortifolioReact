import React from "react";
import { Canvas } from "@react-three/fiber";
import { Sky, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import VoxelParts from "./VoxelParts";

export default function ObjectComponent({
  parts, // Lista de partes associadas a materiais
  renderBase = true, // Variável para controlar se a base será renderizada
  renderDistance = 10,
  gravity = [0, -9, 0],
  fov = 45,
}) {
  const renderBaseLayer = () => {
    const baseBlocks = [];
    for (let x = -5; x <= 5; x++) {
      for (let z = -5; z <= 5; z++) {
        baseBlocks.push({
          id: `base-${x}-${z}`,
          position: [x, -1, z],
          materialId: "hydrogen", // Define o material como hidrogênio
          customBlock: false,
        });
      }
    }
    return baseBlocks;
  };

  const baseLayer = renderBase ? renderBaseLayer() : []; // Gera a base apenas se renderBase for true

  return (
    <Canvas
      shadows
      camera={{ fov, position: [5, 10, 15] }}
      style={{ position: "absolute", zIndex: 1 }}
    >
      {/* Luzes e Ambiente */}
      <Sky />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      {/* Física e Objetos do Mundo */}
      <Physics gravity={gravity}>
        <VoxelParts parts={[...parts, ...baseLayer]} renderDistance={renderDistance} />
      </Physics>

      {/* Controles de Câmera Orbitais */}
      <OrbitControls enablePan enableZoom enableRotate maxPolarAngle={Math.PI / 2} />
    </Canvas>
  );
}
