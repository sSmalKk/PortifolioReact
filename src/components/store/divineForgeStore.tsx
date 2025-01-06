import create from "zustand";

type DivineForgeState = {
  selectedMaterial: { id: string; name: string; color: string } | null;
  selectMaterial: (material: { id: string; name: string; color: string }) => void;
  updateSelectedMaterialColor: (color: string) => void;
};

export const useDivineForge = create<DivineForgeState>((set) => ({
  selectedMaterial: null,
  selectMaterial: (material) =>
    set(() => ({
      selectedMaterial: material,
    })),
  updateSelectedMaterialColor: (color) =>
    set((state) => {
      if (!state.selectedMaterial) return state;
      return {
        selectedMaterial: { ...state.selectedMaterial, color },
      };
    }),
}));
