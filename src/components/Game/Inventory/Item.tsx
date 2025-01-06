import React from "react";
import { Item as ItemType } from "../../store/useStorage";

interface ItemProps {
  item: ItemType | null;
  isSelected?: boolean;
  isHand?: "left" | "right"; // Define se é mão esquerda ou direita
  onRightClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void; // Ajustado para aceitar evento
}

const Item: React.FC<ItemProps> = ({ item, isSelected, isHand, onRightClick, onClick }) => {
  const renderContent = () => {
    if (!item) {
      if (isHand === "left") {
        return <span style={{ fontSize: "20px", color: "#888" }}>🖐</span>;
      } else if (isHand === "right") {
        return <span style={{ fontSize: "20px", color: "#888" }}>✊</span>;
      }
      return <div style={{ width: "20px", height: "20px", backgroundColor: "#555" }} />;
    }

    return <img src={item.img} alt={item.name} style={{ width: "100%", height: "100%" }} />;
  };

  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        backgroundColor: isSelected ? "#666" : "#333",
        border: "2px solid",
        borderColor: isSelected ? "#0f0" : item ? "#444" : "#888",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        onRightClick?.(e); // Garante que o `onRightClick` seja chamado se definido
      }}
      onClick={(e) => {
        onClick?.(e); // Garante que o `onClick` seja chamado se definido
      }}
    >
      {renderContent()}
    </div>
  );
};

export default Item;
