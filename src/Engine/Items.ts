export type Item = {
  KEY: string;
  NAME: string;
  DESCRIPTION: string;
  DAMAGE?: number;
  BULLETS?: number;
  HEAL?: number;
};

export type GameItems = {
  [key: string]: Item;
};

export const GAME_ITEMS: GameItems = {
  AGENT_PISTOL: {
    KEY: "AGENT_PISTOL",
    NAME: "Pistola de Agente",
    DESCRIPTION: "Viene con 7 balas e inflige 50 de daño",
    BULLETS: 7,
    DAMAGE: 50,
  },
  PISTOL: {
    KEY: "PISTOL",
    NAME: "Pistola",
    DESCRIPTION: "Viene con 5 balas e inflige 30 de daño",
    BULLETS: 5,
    DAMAGE: 30,
  },
  SNACK: {
    KEY: "SNACK",
    NAME: "Snack",
    DESCRIPTION: "Recuperas 15 de vida",
    DAMAGE: 0,
    HEAL: 15,
  },
  DINNER: {
    KEY: "DINNER",
    NAME: "Dinner",
    DESCRIPTION: "Recuperas 35 de vida",
    DAMAGE: 0,
    HEAL: 35,
  },
  HEALTH_KIT: {
    KEY: "HEALTH_KIT",
    NAME: "Health Kit",
    DESCRIPTION: "Recuperas 60 de vida",
    DAMAGE: 0,
    HEAL: 60,
  },
};

export type ApiItem = Item & {
  uniqueID: number;
};

const ItemsApi = () => {
  const generateUniqueID = () => Math.floor(Math.random() * 9999);
  let items: ApiItem[] = [
    { ...GAME_ITEMS.PISTOL, uniqueID: generateUniqueID() },
    { ...GAME_ITEMS.SNACK, uniqueID: generateUniqueID() },
  ];

  const getUserItems = () => items;
  const addItem = (item: Item) => {
    items.push({ ...item, uniqueID: generateUniqueID() });
    return items;
  };
  const removeItem = (item: ApiItem) => {
    let itemIndex = items.findIndex((i) => i.uniqueID === item.uniqueID);
    if (itemIndex >= 0) {
      items = items.filter((it) => it.uniqueID !== item.uniqueID);
    }
    return items;
  };

  return {
    getUserItems,
    addItem,
    removeItem,
  };
};

export default ItemsApi();
