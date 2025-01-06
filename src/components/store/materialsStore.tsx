import create from "zustand";

type MaterialData = {
  id: string;
  name: string;
  symbol: string;
  baseColor: string;
  currentColor: string;
  temperature: number;
};

type MaterialsStore = {
  materials: Record<string, MaterialData>; // Dados base do fetch
  activeMaterials: Record<string, MaterialData>; // Cores em uso globalmente
  pageMaterials: Record<string, MaterialData>; // Cores em uso na página
  addMaterial: (id: string, material: MaterialData) => void;
  addActiveMaterial: (id: string, material: MaterialData) => void;
  addPageMaterial: (id: string, material: MaterialData) => void;
  updateMaterial: (id: string, updates: Partial<MaterialData>) => void;
  removePageMaterial: (id: string) => void;
};

export const useMaterialsStore = create<MaterialsStore>((set) => ({
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
      pageMaterials: {
        ...state.pageMaterials,
        [id]: { ...state.pageMaterials[id], ...updates },
      },
    })),

  removePageMaterial: (id) =>
    set((state) => {
      const updatedPageMaterials = { ...state.pageMaterials };
      delete updatedPageMaterials[id];
      return { pageMaterials: updatedPageMaterials };
    }),
}));
