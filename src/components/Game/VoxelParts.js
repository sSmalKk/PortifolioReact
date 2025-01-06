import React from "react";
import { VoxelPart } from "./VoxelPart";

const VoxelParts = ({ parts }) => {
  if (!parts || parts.length === 0) {
    return null;
  }

  return (
    <group>
      {parts.map((part) => (
        <VoxelPart key={part.id} part={part} />
      ))}
    </group>
  );
};

export default VoxelParts;
