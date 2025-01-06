import { StateCreator } from "zustand";
export interface Item {
  id: string;
  name: string;
  type?: string;
  img: string;
  value: number;
  isFavorite?: boolean;
  pockets?: (Item | null)[];
}

export interface Machine {
  id: string;
  name: string;
  storage: (Item | null)[]; 
}

export interface MachinesSlice {
  machines: Machine[];
  addMachine: (machine: Machine) => void;
}

export const createMachinesSlice: StateCreator<MachinesSlice> = (set) => ({
  machines: [],
  addMachine: (machine) =>
    set((state) => ({
      machines: [...state.machines, machine],
    })),
});
