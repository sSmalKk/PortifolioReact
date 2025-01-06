import { StateCreator } from "zustand";

export interface TexturesSlice {
  textures: { [key: string]: string };
  setTextures: (textureName: string, url: string) => void;
}

export const createTexturesSlice: StateCreator<TexturesSlice> = (set) => ({
  textures: {},
  setTextures: (textureName, url) =>
    set((state) => ({
      textures: { ...state.textures, [textureName]: url },
    })),
});
