import React from "react";
import { Item as ItemType } from "../../store/useStorage";
import Item from "./Item";

interface InventoryGridProps {
  items: (ItemType & { isSelected?: boolean; areaColor?: string })[];
  rows: number;
  cols: number;
  title: string;
  onItemClick: (item: ItemType | null) => void;
}

const InventoryGrid: React.FC<InventoryGridProps> = ({ items, rows, cols, title, onItemClick }) => {
  return (
    <div style={{ display: "grid", gridTemplateRows: `repeat(${rows}, 1fr)`, gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: "5px" }}>
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            backgroundColor: item.areaColor || "#333",
            border: item.isSelected ? "2px solid #0f0" : "2px solid #444",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => onItemClick(item)}
        >
          <Item item={item} />
        </div>
      ))}
    </div>
  );
};

export default InventoryGrid;
