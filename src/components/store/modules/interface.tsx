import { StateCreator } from "zustand";

export interface InterfaceSlice {
  interfaceOpen: boolean;
  setInterfaceOpen: (value: boolean) => void;
}

export const createInterfaceSlice: StateCreator<InterfaceSlice> = (set) => ({
  interfaceOpen: false,
  setInterfaceOpen: (value) => set({ interfaceOpen: value }),
});
