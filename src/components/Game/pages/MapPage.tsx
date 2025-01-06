import React from "react";

interface MapPageProps {
  renderMapGrid: () => JSX.Element[];
  currentLayer: number;
  handleLayerChange: (delta: number) => void;
}

const MapPage: React.FC<MapPageProps> = ({
  renderMapGrid,
  currentLayer,
  handleLayerChange,
}) => {
  return (
    <div
      style={{
        position: "relative", // Para ajustar ao espaço do contêiner pai
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
        
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(10, 1fr)`,
          gridTemplateRows: `repeat(10, 1fr)`,
       }}
      >
        {renderMapGrid()}
      </div>

      {/* Controle da camada */}
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          display: "flex",
          gap: "10px",
        }}
      >
        <button
          onClick={() => handleLayerChange(-1)}
          style={{
            padding: "5px 10px",
            backgroundColor: "#444",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          - Camada
        </button>
        <button
          onClick={() => handleLayerChange(1)}
          style={{
            padding: "5px 10px",
            backgroundColor: "#444",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          + Camada
        </button>
      </div>
    </div>
  );
};

export default MapPage;
