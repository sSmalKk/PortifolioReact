export interface Part {
  id: string;
  materialId: string;
  position: [number, number, number];
  customBlock: boolean;
}

export interface PartSlice {
  parts: Part[];
  addPart: (part: Part) => void;
  removePart: (id: string) => void;
  updatePart: (id: string, updatedPart: Partial<Part>) => void;
  getPart: (id: string) => Part | undefined; // Adicionado método para obter parte específica
}

export const createPartsSlice = (set: any, get: any) => ({
  parts: [],

  addPart: (part) => {
    console.log("Adicionando parte:", part);
    set((state) => ({
      parts: [...state.parts, part],
    }));
  },

  removePart: (id) => {
    console.log("Removendo parte com ID:", id);
    set((state) => ({
      parts: state.parts.filter((p) => p.id !== id),
    }));
  },

  updatePart: (id, updatedPart) => {
    console.log("Atualizando parte com ID:", id, updatedPart);
    set((state) => ({
      parts: state.parts.map((p) =>
        p.id === id ? { ...p, ...updatedPart } : p
      ),
    }));
  },

  getPart: (id) => {
    const part = get().parts.find((p) => p.id === id);
    console.log("Obtendo parte com ID:", id, part);
    return part;
  },
});
