import { StateCreator } from "zustand";

export interface Chunk {
  position: number[];
  cubesArray: number[][];
}

export interface BlockState {
  [key: number]: {
    name: string;
    texture: string;
    model: string;
    textures: string[];
    RigidBody: string;
    RigidBodyType: string;
    type: number;
  };
}

export interface CustomModel {
  position: number[];
  rotation: number[];
  render: boolean;
}

export interface TerrainSlice {
  blockState: BlockState;
  chunks: Chunk[];
  customModels: { [key: string]: CustomModel[] };

  setBlockState: (index: number, newState: BlockState[number]) => void;
  addChunk: (chunk: Chunk) => void;
  setCustomModels: (modelName: string, newConfig: CustomModel[]) => void;
}

export const createTerrainSlice: StateCreator<TerrainSlice> = (set) => ({
  blockState: {},
  chunks: [],
  customModels: {},

  setBlockState: (index, newState) =>
    set((state) => ({
      blockState: { ...state.blockState, [index]: newState },
    })),
  addChunk: (chunk) =>
    set((state) => ({
      chunks: [...state.chunks, chunk],
    })),
  setCustomModels: (modelName, newConfig) =>
    set((state) => ({
      customModels: { ...state.customModels, [modelName]: newConfig },
    })),
});
