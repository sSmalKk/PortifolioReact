import { StateCreator } from "zustand";

export interface Entity {
  id: string;
  position: [number, number, number];
  rotation: [number, number, number, number];
}

export interface EntitiesSlice {
  entities: Entity[];
  setEntities: (entities: Entity[]) => void;
  addEntity: (
    id: string,
    position: [number, number, number],
    rotation: [number, number, number, number]
  ) => void;
}

export const createEntitiesSlice: StateCreator<EntitiesSlice> = (set) => ({
  entities: [],
  setEntities: (entities) => set({ entities }),
  addEntity: (id, position, rotation) =>
    set((state) => ({
      entities: [
        ...state.entities,
        { id, position, rotation },
      ],
    })),
});
