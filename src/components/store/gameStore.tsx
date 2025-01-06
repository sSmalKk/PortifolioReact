import create from "zustand";
import { createInventorySlice, InventorySlice } from "./modules/inventory";
import { createEntitiesSlice, EntitiesSlice } from "./modules/entities";
import { createTerrainSlice, TerrainSlice } from "./modules/terrain";
import { createTexturesSlice, TexturesSlice } from "./modules/textures";
import { createInterfaceSlice, InterfaceSlice } from "./modules/interface";
import { createMaterialsSlice, MaterialsSlice } from "./modules/materials";
import { createPartsSlice, PartSlice } from "./modules/part";  // Importa a função de partes

// Define o GameStore, incluindo todos os slices necessários
export interface GameStore
  extends InventorySlice,
  EntitiesSlice,
  TerrainSlice,
  TexturesSlice,
  InterfaceSlice,
  MaterialsSlice,
  PartSlice { // Inclui as funções e propriedades de PartSlice
  clickedBlock: {
    globalPosition: [number, number, number];
    face: number;
    id: string;
    material: string;
    model: string;
  } | null;
  setClickedBlock: (blockInfo: GameStore["clickedBlock"]) => void;
}

export const useGameStore = create<GameStore>((set, get, api) => ({
  ...createPartsSlice(set, get), // Certifique-se de que o slice está incluído
  ...createInventorySlice(set, get, api),
  ...createEntitiesSlice(set, get, api),
  ...createTerrainSlice(set, get, api),
  ...createTexturesSlice(set, get, api),
  ...createInterfaceSlice(set, get, api),
  ...createMaterialsSlice(set, get, api),
  clickedBlock: null,
  setClickedBlock: (blockInfo) =>
    set(() => ({
      clickedBlock: blockInfo,
    })),
}));

// Função de inicialização dos dados
export const seedStorage = () => {
  const { setHands, setEquipped, addToInventory } = useGameStore.getState();

  // Configura as mãos
  setHands("left", { id: "hand_item1", name: "Martelo", img: "/images/hammer.png", value: 150 });
  setHands("right", { id: "hand_item2", name: "Picareta", img: "/images/pickaxe.png", value: 120 });

  // Configura os itens equipados
  setEquipped("head", {
    id: "helmet1",
    name: "Capacete de Ferro",
    img: "/images/iron_helmet.png",
    value: 200,
    pockets: Array(5).fill(null), // Capacete com 5 slots vazios
  });

  // Adiciona itens ao inventário
  addToInventory({
    id: "item1",
    name: "Espada",
    img: "/images/sword.png",
    value: 100,
    pockets: Array(5).fill(null),
  });
  addToInventory({
    id: "item2",
    name: "Escudo",
    img: "/images/shield.png",
    value: 150,
    pockets: Array(3).fill(null),
  });
  addToInventory({
    id: "item3",
    name: "Poção de Vida",
    img: "/images/health_potion.png",
    value: 50,
  });
};

seedStorage();
