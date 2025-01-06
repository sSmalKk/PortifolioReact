import React, { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { RigidBody, CapsuleCollider } from "@react-three/rapier";
import * as THREE from "three";
import { useKeyboardControls } from "@react-three/drei";
import { useSocket } from "../../context/SocketProvider";

export const Player = ({
  setChunkPosition,
  flying,
  canPlayerFly,
  initialPosition,
  speed = 5,
  direction = new THREE.Vector3(),
  frontVector = new THREE.Vector3(),
  sideVector = new THREE.Vector3(),
}) => {
  const rigidBodyRef = useRef(null);
  const { updatePosition } = useSocket();
  const [, getKeys] = useKeyboardControls();
  const lastSentData = useRef({ position: null, rotation: null });
  const lastChunkPosition = useRef([0, 0, 0]);
  const [userId, setUserId] = useState(null);
  const [spacePressedCount, setSpacePressedCount] = useState(0);

  // Carrega o userId apenas uma vez
  useEffect(() => {
    const data = localStorage.getItem("userData");
    if (data) {
      try {
        const parsedData = JSON.parse(data);
        setUserId(parsedData.id); // Define apenas o ID do usuário
      } catch (error) {
        console.error("Erro ao analisar userData do localStorage:", error);
      }
    } else {
      console.warn("Nenhum userData encontrado no localStorage");
    }
  }, []);

  useEffect(() => {
    if (!rigidBodyRef.current || !userId) return;

    const initialTranslation = rigidBodyRef.current.translation?.() || [0, 0, 0];
    const initialRotation = rigidBodyRef.current.rotation?.() || [0, 0, 0, 1];
    updatePosition(userId, initialTranslation, initialRotation);
  }, [userId]);

  useEffect(() => {
    // Reseta a contagem de espaço pressionado se o jogador estiver no ar
    if (flying) {
      setSpacePressedCount(0);
    }
  }, [flying]);

  useFrame((state) => {
    if (!rigidBodyRef.current) return;

    const keys = getKeys();
    const { forward, backward, left, right, jump } = keys;

    const velocity = rigidBodyRef.current.linvel?.() || { x: 0, y: 0, z: 0 };

    frontVector.set(0, 0, backward - forward);
    sideVector.set(left - right, 0, 0);

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(speed)
      .applyEuler(state.camera.rotation);

    if (jump && velocity.y === 0 && !flying) {
      rigidBodyRef.current.setLinvel({ x: velocity.x, y: 7.5, z: velocity.z });
    }

    // Verifica a condição de voo com base na tecla de espaço
    // Verifica a condição de voo com base na tecla de espaço
    if (jump && canPlayerFly) {
      // Se o jogador estiver voando, permite que ele suba
      rigidBodyRef.current.setLinvel({ x: velocity.x, y: 7.5, z: velocity.z });
    } else if (flying) {
      // Se o jogador não estiver pressionando a tecla de espaço, permite que ele desça
      rigidBodyRef.current.setLinvel({ x: velocity.x, y: -2.5, z: velocity.z });
    }



    // Se estiver voando, ajusta a movimentação no eixo Y
    if (flying) {
      direction.y = 0;  // Impede que o jogador caia ou suba sem controle
    }

    rigidBodyRef.current.setLinvel({
      x: direction.x,
      y: flying ? velocity.y : velocity.y,  // Ajuste da velocidade no eixo Y (não modifica enquanto não estiver voando)
      z: direction.z,
    });

    const translationVector = rigidBodyRef.current.translation?.() || new THREE.Vector3();
    const preciseTranslation = [translationVector.x, translationVector.y, translationVector.z];
    const rotationQuaternion = new THREE.Quaternion();
    state.camera.getWorldQuaternion(rotationQuaternion);

    if (
      !lastSentData.current.position ||
      !lastSentData.current.rotation ||
      !(new THREE.Vector3(...preciseTranslation).equals(new THREE.Vector3(...lastSentData.current.position))) ||
      !(new THREE.Quaternion(...rotationQuaternion.toArray()).equals(new THREE.Quaternion(...lastSentData.current.rotation)))
    ) {
      lastSentData.current = { position: preciseTranslation, rotation: rotationQuaternion.toArray() };
      updatePosition(userId, preciseTranslation, rotationQuaternion.toArray());
    }

    state.camera.position.set(...preciseTranslation);

    const newChunkPosition = [
      Math.round(preciseTranslation[0] / 16),
      0,
      Math.round(preciseTranslation[2] / 16),
    ];

    if (
      lastChunkPosition.current[0] !== newChunkPosition[0] ||
      lastChunkPosition.current[2] !== newChunkPosition[2]
    ) {
      lastChunkPosition.current = newChunkPosition;
      setChunkPosition(newChunkPosition);
    }
  });

  return (
    <RigidBody
      ref={rigidBodyRef}
      colliders={false}
      type="dynamic"
      position={initialPosition}
      enabledRotations={[false, true, false]}
    >
      <CapsuleCollider args={[2, 0.5]} position={[0, 1, 0]} />
    </RigidBody>
  );
};
