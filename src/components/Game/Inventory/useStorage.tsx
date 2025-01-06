import create from "zustand";

 export interface Item {
  id: string;
  name: string;
  type?: string;
  img: string;
  value: number;
  isFavorite?: boolean;
  pockets?: (Item | null)[]; // Itens associados ao bolso (agora inclui espaços vazios)
}


export interface Machine {
  id: string;
  name: string;
  storage: (Item | null)[]; // Armazena itens ou espaços vazios
}

interface InventoryState {
  hands: { left: Item | null; right: Item | null };
  equipped: { [slot: string]: Item | null }; // Equipamentos com itens e espaços vazios
  inventory: Item[];
  hotbar: (Item | null)[];
  machines: Machine[]; // Máquinas com espaços vazios
  selectedItem: Item | null;
  mousePosition: { x: number; y: number } | null; // Para renderizar o item seguindo o mouse
  setSelectedItem: (item: Item | null) => void;
  setMousePosition: (x: number, y: number) => void; // Atualiza a posição do mouse
  updateInventory: (newData: Partial<InventoryState>) => void; // Atualiza o inventário com resposta do servidor
  simulateBackendUpdate: (selectedItem: Item, targetSlot: string) => Promise<void>;
  setHands: (hand: "left" | "right", item: Item | null) => void;
  setEquipped: (slot: string, item: Item | null) => void;
  addToInventory: (item: Item) => void;
  addMachine: (machine: Machine) => void; // Adiciona máquinas ao estado
}

export const useStorage = create<InventoryState>((set) => ({
  hands: { left: null, right: null },
  equipped: {
    head: null,
    chest: null,
    legs: null,
    feet: null,
  },
  hotbar: Array(9).fill(null),
  inventory: [],
  machines: [],
  selectedItem: null,
  mousePosition: null,
  setSelectedItem: (item) => set(() => ({ selectedItem: item })),
  setMousePosition: (x, y) => set(() => ({ mousePosition: { x, y } })),
  updateInventory: (newData) => set((state) => ({ ...state, ...newData })),
  simulateBackendUpdate: async (selectedItem, targetSlot) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const state = useStorage.getState();
        const { equipped, inventory } = state;

        // Validações de backend simuladas
        if (selectedItem.id === targetSlot) {
          console.error("Você não pode colocar um item dentro de si mesmo.");
          return resolve();
        }

        // Atualiza o inventário baseado na lógica do servidor
        if (equipped[targetSlot]) {
          // Troca o item se já houver um item no slot alvo
          const temp = equipped[targetSlot];
          equipped[targetSlot] = selectedItem;
          inventory.push(temp);
        } else {
          // Move diretamente para o slot alvo
          equipped[targetSlot] = selectedItem;
        }

        set({
          equipped,
          inventory: inventory.filter((item) => item.id !== selectedItem.id),
          selectedItem: null,
        });
        resolve();
      }, 500); // Simula latência de servidor
    });
  },
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
  addMachine: (machine) =>
    set((state) => ({
      machines: [...state.machines, machine],
    })),
}));

// Seed para popular o estado inicial
export const seedStorage = () => {
  const { setHands, setEquipped, addToInventory } = useStorage.getState();

  // Configura as mãos
  setHands("left", { id: "hand_item1", name: "Martelo", img: "/images/hammer.png", value: 150 });
  setHands("right", { id: "hand_item2", name: "Picareta", img: "/images/pickaxe.png", value: 120 });

  // Configura itens equipados com espaços vazios
  setEquipped("head", {
    id: "helmet1",
    name: "Capacete de Ferro",
    img: "/images/iron_helmet.png",
    value: 200,
    pockets: Array(5).fill(null), // Capacete com 5 slots vazios
  });
  setEquipped("chest", {
    id: "chestplate1",
    name: "Mochila",
    img: "/images/backpack.png",
    value: 300,
    pockets: Array(80) // Mochila com 80 slots vazios
      .fill(null)
      .map((_, i) =>
        i < 10
          ? {
            id: `pocket_item_${i + 1}`,
            name: `Item ${i + 1}`,
            img: "/images/item.png",
            value: 50,
          }
          : null
      ),
  });
  setEquipped("legs", {
    id: "leggings1",
    name: "Calças de Couro",
    img: "/images/leather_pants.png",
    value: 250,
    pockets: Array(12).fill(null), // Calças com 12 slots vazios
  });
  setEquipped("feet", {
    id: "boots1",
    name: "Botas de Ferro",
    img: "/images/iron_boots.png",
    value: 100,
    pockets: Array(8).fill(null), // Botas com 8 slots vazios
  });

  // Adiciona itens ao inventário com espaços vazios
  addToInventory({
    id: "item1",
    name: "Espada",
    img: "/images/sword.png",
    value: 100,
    pockets: Array(5).fill(null), // Espada com 5 slots vazios para teste
  });
  addToInventory({
    id: "item2",
    name: "Escudo",
    img: "/images/shield.png",
    value: 150,
    pockets: Array(3).fill(null), // Escudo com 3 slots vazios para teste
  });
  addToInventory({
    id: "item3",
    name: "Poção de Vida",
    img: "/images/health_potion.png",
    value: 50,
  });

  // Adiciona máquinas com espaços vazios
  const machines = [
    {
      id: "machine1",
      name: "Forja",
      storage: Array(20).fill(null), // Forja com 20 slots vazios
    },
    {
      id: "machine2",
      name: "Banco de Trabalho",
      storage: Array(10).fill(null), // Banco de trabalho com 10 slots vazios
    },
  ];

  // Atualiza o Zustand com as máquinas
  useStorage.setState((state) => ({
    machines: [...state.machines, ...machines],
  }));
};

seedStorage();
