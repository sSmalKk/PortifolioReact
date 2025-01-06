import { StateCreator } from "zustand";

export interface MaterialData {
  id: string;
  name: string;
  symbol: string;
  baseColor: string;
  currentColor: string;
  temperature: number;
}

export interface MaterialsSlice {
  materials: Record<string, MaterialData>; // Todos os materiais disponíveis
  activeMaterials: Record<string, MaterialData>; // Materiais atualmente ativos globalmente
  pageMaterials: Record<string, MaterialData>; // Materiais visíveis na página atual
  addMaterial: (id: string, material: MaterialData) => void;
  addActiveMaterial: (id: string, material: MaterialData) => void;
  addPageMaterial: (id: string, material: MaterialData) => void;
  updateMaterial: (id: string, updates: Partial<MaterialData>) => void;
  removePageMaterial: (id: string) => void;
}

export const createMaterialsSlice: StateCreator<MaterialsSlice> = (set) => ({
  materials: {},
  activeMaterials: {},
  pageMaterials: {},

  addMaterial: (id, material) =>
    set((state) => ({
      materials: { ...state.materials, [id]: material },
    })),
    
  addActiveMaterial: (id, material) =>
    set((state) => ({
      activeMaterials: { ...state.activeMaterials, [id]: material },
    })),
    
  addPageMaterial: (id, material) =>
    set((state) => ({
      pageMaterials: { ...state.pageMaterials, [id]: material },
    })),
    
  updateMaterial: (id, updates) =>
    set((state) => ({
      materials: {
        ...state.materials,
        [id]: { ...state.materials[id], ...updates },
      },
    })),
    
  removePageMaterial: (id) =>
    set((state) => {
      const { [id]: _, ...remaining } = state.pageMaterials;
      return { pageMaterials: remaining };
    }),
});
