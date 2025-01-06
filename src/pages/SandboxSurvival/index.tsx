import React, { useEffect, useState } from "react";
import Game from "components/Game/Game";
import { Helmet } from "react-helmet";
import { useGameStore } from "components/store/gameStore";

function SandboxSurvival() {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isInventoryOpen, setIsInventoryOpen] = useState(false); // Controle do inventário
  const token = localStorage.getItem("token") || process.env.JWT || "";
  const clickedBlock = useGameStore((state) => state.clickedBlock);

  useEffect(() => {
    if (clickedBlock) {
      console.log("Bloco clicado:", clickedBlock);
      // Aqui você pode realizar ações adicionais com o bloco clicado
    }
  }, [clickedBlock]);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!token) {
        console.error("Token not found");
        setLoading(false);
        return;
      }

      const endpoints = [
        "/device/api/v1/user/me", // Rota padrão para modo "device"
        "/admin/user/me",  // Rota alternativa para "admin"
        "/user/api/v1/me",        // Rota genérica
      ];



      for (let endpoint of endpoints) {
        try {
          console.log(`Trying endpoint: ${endpoint}`);

          const response = await fetch(endpoint, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.ok) {
            const data = await response.json();
            setUserData(data.data);
            localStorage.setItem("userData", JSON.stringify(data.data));
            console.log(`Successfully fetched user data from: ${endpoint}`);
            break; // Sai do loop se o fetch foi bem-sucedido
          } else {
            console.warn(`Failed at endpoint ${endpoint}: ${response.statusText}`);
          }
        } catch (error) {
          console.error(`Error fetching user info from ${endpoint}:`, error);
        }
      }

      setLoading(false);
    };

    fetchUserData();
  }, [token]);

  // Gerenciar o travamento do mouse e inventário
  const toggleInventory = () => {
    const inventoryState = !isInventoryOpen;
    setIsInventoryOpen(inventoryState);

    if (inventoryState) {
      document.exitPointerLock(); // Liberar o mouse
    } else {
      document.body.requestPointerLock(); // Travar o mouse
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "e") {
        toggleInventory();
      }
    };

    const handlePointerLockChange = () => {
      const isLocked = document.pointerLockElement !== null;
      if (!isLocked && !isInventoryOpen) {
        // Se o mouse for liberado, mas o inventário está fechado, re-trava
        document.body.requestPointerLock();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerlockchange", handlePointerLockChange);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerlockchange", handlePointerLockChange);
    };
  }, [isInventoryOpen]);

  const blockState = {
    0: { texture: "stone", model: "box", RigidBody: "fixed", RigidBodyType: "cuboid" },
    1: { texture: "wood", model: "globe", RigidBody: "fixed", RigidBodyType: "cuboid" },
    2: { texture: "brick", model: "stairs", RigidBody: "fixed", RigidBodyType: "cuboid" },
  };

  const customModels = {
    stairs: [
      { position: [0, 0, 0.5], rotation: [0, 0, 0], render: true },
      { position: [0, 0, 0], rotation: [-Math.PI / 2, 0, 0], render: true },
    ],
  };

  const textures = {
    stone: "/assets/textures/cubes/stone.png",
    wood: "/assets/textures/cubes/wood.png",
    brick: "/assets/textures/cubes/stone.png",
  };

  const cubesArray = [];
  for (let x = -10; x <= 10; x++) {
    for (let z = -10; z <= 10; z++) {
      cubesArray.push([x, 0, z, 0]);
    }
  }

  const chunks = [
    {
      position: [1, 0, 0],
      cubesArray: cubesArray,
    },
  ];
  // Exibindo os detalhes no SandboxSurvival
  useEffect(() => {
    if (clickedBlock) {
      console.log("Detalhes do bloco clicado:", clickedBlock);
      // Exemplo de uso
      console.log(`Coordenadas: ${clickedBlock.globalPosition}`);
      console.log(`Material: ${clickedBlock.material}`);
      console.log(`Face clicada: ${clickedBlock.face}`);
    }
  }, [clickedBlock]);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: "1.5rem",
        }}
      >
        Carregando dados do usuário...
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Sandbox Admin</title>
      </Helmet>

      <div
        style={{
          position: "relative", // Canvas do jogo deve estar no topo.
          zIndex: isInventoryOpen ? -1 : 0,
        }}
      >
        <Game isInventoryOpen={isInventoryOpen}
          customModels={customModels}
          blockState={blockState}
          canPlayerFly={true}
          textures={textures}
          chunks={chunks}
          renderDistance={15}
          gravity={[0, -9.81, 0]}
          pointLightPosition={[5, 10, 5]}
          initialPlayerPosition={[userData?.x || 0, 22, userData?.z || 0]}
          sunPosition={[150, 50, 150]}
          ambientLightIntensity={1.5}
          pointLightIntensity={0.5}
          fov={60}
          keyboardMap={[
            { name: "forward", keys: ["w", "W"] },
            { name: "backward", keys: ["s", "S"] },
            { name: "left", keys: ["a", "A"] },
            { name: "right", keys: ["d", "D"] },
            { name: "shift", keys: ["Shift"] },
            { name: "jump", keys: ["Space"] },
            { name: "inventory", keys: ["e", "E"] },
            { name: "fly", keys: ["g", "G"] }, // Added fly toggle
          ]}
        /></div>

    </>
  );
}

export default SandboxSurvival;
