import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Sky, PointerLockControls, KeyboardControls, Html } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { useGameStore } from "../store/gameStore";
import { Player } from "./Player";
import VoxelTerrain from "./VoxelTerrain";
import { Entities } from "./Entity";
import Inventory from "./Inventory";

export default function DashboardMenu({
  isInventoryOpen,
  customModels,
  blockState,
  canPlayerFly = true,
  flying = true,
  textures,
  chunks,
  renderDistance = 10,
  gravity = [0, -9, 0],
  pointLightPosition = [0, 0, 0],
  initialPlayerPosition = [1, 13, 0],
  sunPosition = [100, 20, 100],
  ambientLightIntensity = 3,
  pointLightIntensity = 0.2,
  fov = 45,
  keyboardMap,
}) {
  const setChunkPosition = useGameStore((state) => state.setChunkPosition);
  const [interfaceOpen, setInterfaceOpen] = useGameStore((state) => [
    state.interfaceOpen,
    state.setInterfaceOpen,
  ]);

  const objectRef = useRef();

  useEffect(() => {
    const handlePointerLockChange = () => {
      const isLocked = document.pointerLockElement !== null;
      setInterfaceOpen(!isLocked);
    };

    document.addEventListener("pointerlockchange", handlePointerLockChange);
    return () => {
      document.removeEventListener("pointerlockchange", handlePointerLockChange);
    };
  }, [setInterfaceOpen]);

  return (
    <>
      <KeyboardControls map={keyboardMap}>
        <Canvas
          shadows
          camera={{ fov }}
          style={{ position: "fixed", zIndex: -1 }}
          className="top-0 bottom-0 w-full h-full"
        >
          {/* Luzes e Ambiente */}
          <Sky sunPosition={sunPosition} />
          <ambientLight intensity={ambientLightIntensity} />
          <pointLight castShadow intensity={pointLightIntensity} position={pointLightPosition} />
          <Physics gravity={gravity}>
            {/* Elementos do Mundo */}
            <Player
              canPlayerFly={canPlayerFly}
              gravity={gravity}
              setChunkPosition={setChunkPosition}
              initialPosition={initialPlayerPosition}
              flying={flying}
            />
            <Entities />
            <VoxelTerrain
              customModels={customModels}
              blockState={blockState}
              fullrender
              chunks={chunks}
              textures={textures}
              clusterWidth={1}
              renderDistance={renderDistance}
            />
          </Physics>

          {/* Interface 3D */}
          <Html position={[0, 0, 0]} fullscreen>
            {isInventoryOpen && (
              <div
                style={{
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "1000px",
                  height: "600px",
                  display: "flex",
                  flexDirection: "column",
                  zIndex: 10,
                }}
              >
                <Inventory />
              </div>
            )}
          </Html>

          {!isInventoryOpen && <PointerLockControls enabled={!interfaceOpen} />}
        </Canvas>
      </KeyboardControls>

      {/* Interface Fixa */}

    </>
  );
}
