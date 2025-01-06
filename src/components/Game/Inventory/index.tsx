import React, { useState } from "react";
import { useGameStore } from "../../store/gameStore";
import CreativeTab from "../pages/CreativeTab";
import Item from "./Item";
import ObjectComponent from "../Objects";

const Inventory: React.FC = () => {
  const {
    hands,
    equipped,
    hotbar,
    selectedItem,
    setSelectedItem,
    simulateBackendUpdate,
  } = useGameStore();
  const { parts } = useGameStore();

  const [activeTab, setActiveTab] = useState<"character" | "map" | "camera">(
    "character"
  );
  const [currentLayer, setCurrentLayer] = useState<number>(0);
  const [mousePosition, setMousePosition] = useState<[number, number]>([0, 0]);

  // Funções para Gerenciar o `Part`
  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition([e.clientX, e.clientY]);  // Atualiza a posição do mouse
  };


  // Verifique se part é definido e não nulo, se não, forneça um array vazio
  const partsArray = parts ? [parts] : [];

  // Funções para Gerenciar Itens no Inventário
  const handleItemClick = (item: any | null) => {
    setSelectedItem(selectedItem?.id === item?.id ? null : item);  // Seleciona ou desmarca item
    console.log(parts)
  };

  const handleDrop = async (slot: string) => {
    if (selectedItem) {
      await simulateBackendUpdate(selectedItem, slot);  // Simula o envio do item para o backend
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "80%",
        height: "90%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#222",
        color: "#fff",
        border: "2px solid #444",
        borderRadius: "10px",
        overflow: "hidden",
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Equipados */}
      <div style={{ flex: "1", display: "flex", overflow: "hidden" }}>
        <div
          style={{
            flex: "0 0 25%",
            backgroundColor: "#111",
            borderRight: "2px solid #444",
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
          }}
        >
          <h4 style={{ padding: "10px", borderBottom: "1px solid #444" }}>Receitas</h4>
          <div
            style={{
              flex: "0 0 150px",
              backgroundColor: "#333",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1,
            }}
          >
            <div
              style={{
                flex: "0 0 auto",
                backgroundColor: "#333",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                height: "150px",
                width: "100%",
              }}
            >
              {/* ObjectComponent centralizado */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                <ObjectComponent parts={parts} renderBase={false} />
              </div>
            </div>
          </div>

          {/* Lista de Equipados */}
          <h4 style={{ padding: "10px", borderBottom: "1px solid #444" }}>
            Equipados
          </h4>
          <ul style={{ padding: "10px" }}>
            {Object.entries(equipped).map(([slot, item]) => (
              <li
                key={slot}
                style={{
                  marginBottom: "10px",
                  cursor: "pointer",
                  padding: "5px",
                  backgroundColor: selectedItem?.id === item?.id ? "#333" : "transparent",
                  border: "1px dashed #777",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleItemClick(item); // Função de clique para selecionar o item
                }}
                onDrop={() => handleDrop(slot)} // Função de drop de item
                onDragOver={(e) => e.preventDefault()} // Impede o comportamento padrão de arrastar
              >
                {slot.charAt(0).toUpperCase() + slot.slice(1)}: {item ? <Item item={item} /> : "Vazio"}
                {item?.pockets && (
                  <div
                    style={{
                      marginTop: "10px",
                      display: "grid",
                      gridTemplateColumns: "repeat(5, 1fr)",
                      gap: "10px",
                    }}
                  >
                    {item.pockets.map((pocketItem, index) =>
                      pocketItem ? (
                        <Item
                          key={index}
                          item={pocketItem}
                          isSelected={selectedItem?.id === pocketItem.id}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleItemClick(pocketItem); // Função de clique para selecionar o item no pocket
                          }}
                        />
                      ) : (
                        <div
                          key={`empty-${index}`}
                          style={{
                            width: "50px",
                            height: "50px",
                            backgroundColor: "#333",
                            border: "2px dashed #777",
                          }}
                        />
                      )
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Centralização da Interface */}
        <CreativeTab />
      </div>

      {/* Hotbar */}
      <div
        style={{
          flex: "0 0 10%",
          display: "grid",
          gridTemplateColumns: "repeat(9, 1fr)",
          gap: "5px",
          backgroundColor: "#111",
          padding: "10px",
        }}
      >
        {[hands.left, hands.right, ...hotbar.slice(2)].map((item, index) => (
          <Item
            key={index}
            item={item}
            isSelected={selectedItem?.id === item?.id}
            onClick={() => handleItemClick(item)} // Clique na hotbar
          />
        ))}
      </div>
    </div>
  );
};

export default Inventory;
