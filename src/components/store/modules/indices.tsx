import { StateCreator } from "zustand";

export interface IndicesSlice {
  textures: { [key: string]: string };
  setTextures: (textureName: string, url: string) => void;
}

export const createIndicesSlice: StateCreator<IndicesSlice> = (set) => ({
  textures: { stone: "/assets/textures/cubes/stone.png" },
  setTextures: (textureName, url) =>
    set((state) => ({
      textures: { ...state.textures, [textureName]: url },
    })),
});
