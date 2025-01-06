import React, { useState } from "react";
import { useGameStore } from "../../store/gameStore";
import CharacterPage from "../pages/CharacterPage";
import MapPage from "../pages/MapPage";
import MaterialCRUD from "./MaterialCRUD";

const CreativeTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"character" | "map" | "materials">(
    "character"
  );
  const [currentLayer, setCurrentLayer] = useState<number>(0);

  const handleLayerChange = (delta: number) => {
    setCurrentLayer((prevLayer) => prevLayer + delta);
  };

  const renderMapGrid = (): JSX.Element[] => {
    const gridSize = 10;
    const cellSize = 50;
    const { chunks, blockState } = useGameStore.getState();

    const currentChunk =
      chunks[0] || { cubesArray: Array(gridSize).fill(Array(gridSize).fill(0)) };
    const { cubesArray } = currentChunk;

    return cubesArray.flatMap((row, y) =>
      row.map((blockType, x) => (
        <div
          key={`${x}-${y}`}
          style={{
            width: `${cellSize}px`,
            height: `${cellSize}px`,
            border: "1px solid #444",
            backgroundColor: blockState[blockType] ? "#666" : "#222",
          }}
        />
      ))
    );
  };

  return (
    <div
      style={{
        flex: "1",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Navegação entre abas */}
      <div
        style={{
          position: "relative",
          width: "100%",
          backgroundColor: "#111",
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
          padding: "10px 0",
        }}
      >
        <button
          onClick={() => setActiveTab("character")}
          style={{
            padding: "10px 20px",
            margin: "0 10px",
            backgroundColor: activeTab === "character" ? "#ff5722" : "#444",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Personagem
        </button>
        <button
          onClick={() => setActiveTab("map")}
          style={{
            padding: "10px 20px",
            margin: "0 10px",
            backgroundColor: activeTab === "map" ? "#ff5722" : "#444",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Mapa
        </button>
        <button
          onClick={() => setActiveTab("materials")}
          style={{
            padding: "10px 20px",
            margin: "0 10px",
            backgroundColor: activeTab === "materials" ? "#ff5722" : "#444",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Materiais
        </button>
      </div>

      {/* Conteúdo das abas */}
      {activeTab === "character" && (
        <div
          style={{
            flex: "1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff", // Fundo branco para visibilidade
          }}
        >
          <CharacterPage />
        </div>
      )}

      {activeTab === "map" && (
        <div
          style={{
            position: "absolute",
            top: "60px", // Distância suficiente dos botões
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#000",
          }}
        >
          <MapPage
            renderMapGrid={renderMapGrid}
            currentLayer={currentLayer}
            handleLayerChange={handleLayerChange}
          />
        </div>
      )}

      {activeTab === "materials" && (
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#000",
          }}
        >
          <MaterialCRUD />
        </div>
      )}
    </div>
  );
};

export default CreativeTab;
