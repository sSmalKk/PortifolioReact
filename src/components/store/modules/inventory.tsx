import { StateCreator } from "zustand";

export interface Item {
  id: string;
  name: string;
  img: string;
  value: number;
  pockets?: (Item | null)[];
}


export interface InventorySlice {
  gravityEnabled: boolean;
  hands: { left: Item | null; right: Item | null };
  equipped: { [slot: string]: Item | null };
  inventory: Item[];
  hotbar: (Item | null)[];
  selectedItem: Item | null;

  setGravityEnabled: (value: boolean) => void;
  setHands: (hand: "left" | "right", item: Item | null) => void;
  setEquipped: (slot: string, item: Item | null) => void;
  addToInventory: (item: Item) => void;

  setSelectedItem: (item: Item | null) => void;
  simulateBackendUpdate: (selectedItem: Item, targetSlot: string) => Promise<void>;
}

export const createInventorySlice: StateCreator<InventorySlice> = (set, get) => ({
  gravityEnabled: true,
  hands: { left: null, right: null },
  equipped: { head: null, chest: null, legs: null, feet: null },
  inventory: [],
  hotbar: Array(9).fill(null),
  selectedItem: null,

  setGravityEnabled: (value) => set({ gravityEnabled: value }),
  setHands: (hand, item) =>
    set((state) => ({
      hands: { ...state.hands, [hand]: item },
    })),
  setEquipped: (slot, item) =>
    set((state) => ({
      equipped: { ...state.equipped, [slot]: item },
    })),
  addToInventory: (item) =>
    set((state) => ({
      inventory: [...state.inventory, item],
    })),

  // Adicionado: setSelectedItem
  setSelectedItem: (item) =>
    set(() => ({
      selectedItem: item,
    })),

  // Adicionado: simulateBackendUpdate
  simulateBackendUpdate: async (selectedItem, targetSlot) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const state = get();
        const { equipped, inventory } = state;

        if (selectedItem.id === targetSlot) {
          console.error("Você não pode colocar um item dentro de si mesmo.");
          return resolve();
        }

        if (equipped[targetSlot]) {
          const temp = equipped[targetSlot];
          equipped[targetSlot] = selectedItem;
          inventory.push(temp);
        } else {
          equipped[targetSlot] = selectedItem;
        }

        set({
          equipped,
          inventory: inventory.filter((item) => item.id !== selectedItem.id),
          selectedItem: null,
        });
        resolve();
      }, 500);
    });
  },
});
