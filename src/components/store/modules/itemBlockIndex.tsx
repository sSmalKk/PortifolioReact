import { StateCreator } from "zustand";

export interface ChunkPart {
  id: string; // Identificador único da parte
  geometry: number[][]; // Geometria do chunk (apenas vértices)
  position: number[]; // Posição do chunk no modelo
  rotation: number[]; // Rotação do chunk no modelo
}

export interface ItemBlock {
  id: string;
  name: string;
  img: string;
  value: number;
  material: string; // Nome ou caminho do material associado
  parts: ChunkPart[]; // Lista de partes que compõem o item/bloco
}

export interface ItemBlockIndexSlice {
  items: ItemBlock[]; // Índice unificado de itens/blocos
  addItem: (item: ItemBlock) => void; // Adiciona um item/bloco ao índice
  getItemById: (id: string) => ItemBlock | undefined; // Busca um item pelo ID
}

export const createItemBlockIndexSlice: StateCreator<ItemBlockIndexSlice> = (set, get) => ({
  items: [],
  addItem: (item) =>
    set((state) => ({
      items: [...state.items, item],
    })),
  getItemById: (id) =>
    get().items.find((item) => item.id === id),
});
