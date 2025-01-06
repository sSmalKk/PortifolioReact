import React, { useMemo, useState } from "react";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";
import { useGameStore } from "../store/gameStore"; // Certifique-se de que o caminho está correto

const VoxelCube = ({
  position,
  id,
  textures,
  blockState,
  clusterWidth,
  hasCubeLeft,
  hasCubeRight,
  hasCubeBottom,
  hasCubeFront,
  hasCubeBack,
  hasCubeTop,
  hover = true,
  customModels = [],
  chunkPosition, // Posição do chunk
}) => {
  const modelType = blockState[id]?.model || "box";
  const textureName = blockState[id]?.texture;
  const rigidBodyType = blockState[id]?.RigidBody || "fixed";

  const rigidBodyShape =
    blockState[id]?.RigidBodyType === "cuboid"
      ? "cuboid"
      : blockState[id]?.RigidBodyType === "sphere"
      ? "ball"
      : "cuboid";

  const [isHovered, setIsHovered] = useState(false);

  const material = useMemo(() => {
    const texturePath = textures[textureName];
    const texture = new THREE.TextureLoader().load(texturePath);

    texture.minFilter = THREE.LinearFilter; // Melhor filtro para texturas mipmap
    texture.magFilter = THREE.LinearFilter;
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

    return new THREE.MeshStandardMaterial({
      map: texture,
    });
  }, [textures, textureName]);

  const geometry = useMemo(() => {
    const geomArray = [];

    if (modelType === "box") {
      geomArray.push(
        { geometry: new THREE.PlaneGeometry(1, 1), position: [0, 0, 0.5], rotation: [0, 0, 0], render: !hasCubeFront },
        { geometry: new THREE.PlaneGeometry(1, 1), position: [0, 0, -0.5], rotation: [0, Math.PI, 0], render: !hasCubeBack },
        { geometry: new THREE.PlaneGeometry(1, 1), position: [0, 0.5, 0], rotation: [-Math.PI / 2, 0, 0], render: !hasCubeTop },
        { geometry: new THREE.PlaneGeometry(1, 1), position: [0, -0.5, 0], rotation: [Math.PI / 2, 0, 0], render: !hasCubeBottom },
        { geometry: new THREE.PlaneGeometry(1, 1), position: [0.5, 0, 0], rotation: [0, Math.PI / 2, 0], render: !hasCubeRight },
        { geometry: new THREE.PlaneGeometry(1, 1), position: [-0.5, 0, 0], rotation: [0, -Math.PI / 2, 0], render: !hasCubeLeft }
      );
    } else if (modelType === "globe") {
      geomArray.push({
        geometry: new THREE.SphereGeometry(0.5, 32, 32),
        position: [0, 0, 0],
        rotation: [0, 0, 0],
        render: true,
      });
    } else if (customModels[modelType]) {
      geomArray.push(
        ...customModels[modelType].map((config) => ({
          geometry: new THREE.PlaneGeometry(1, 1),
          position: config.position,
          rotation: config.rotation,
          render: config.render,
        }))
      );
    }

    return geomArray;
  }, [
    modelType,
    hasCubeFront,
    hasCubeBack,
    hasCubeTop,
    hasCubeBottom,
    hasCubeRight,
    hasCubeLeft,
    customModels,
  ]);

  const handleFaceClick = (faceIndex) => {
    if (!chunkPosition || !position) {
      console.error("chunkPosition ou position não está definido", { chunkPosition, position });
      return;
    }
  
    const globalPosition = chunkPosition.map((v, i) => v + position[i]);
  
    // Atualiza o estado global com as informações do bloco clicado
    useGameStore.getState().setClickedBlock({
      globalPosition,
      face: faceIndex,
      id,
      material: blockState[id]?.texture,
      model: blockState[id]?.model,
    });
  };
  
  return (
    <group
      scale={clusterWidth}
      position={position}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      <RigidBody type={rigidBodyType} colliders={rigidBodyShape}>
        {geometry.map(({ geometry, position, rotation, render }, index) =>
          render ? (
            <mesh
              key={index}
              geometry={geometry}
              material={material}
              position={position}
              rotation={rotation}
              onClick={() => handleFaceClick(index)} // Clique na face
            />
          ) : null
        )}
        {isHovered && (
          <lineSegments geometry={new THREE.EdgesGeometry(new THREE.BoxGeometry(1, 1, 1))}>
            <lineBasicMaterial attach="material" color="yellow" />
          </lineSegments>
        )}
      </RigidBody>
    </group>
  );
};

export { VoxelCube };
