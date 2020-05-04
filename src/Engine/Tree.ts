import ChapterOne from "./Chapters/Chapter1";

export type Option = {
  id: number;
  text: string;
};

export type GameIdsObject = {
  [key: string]: number;
};

export type GameNode = {
  description?: string;
  question: string;
  options?: Option[];
  id: number;
  children: GameNode[];
  health?: number;
};

export const unexpectedGameEnd: GameNode = {
  description: "De repente todo se nubla, no tienes mas control sobre tu cuerpo.",
  question: "",
  id: -1,
  options: [],
  children: [],
};

export const GameTree: GameNode[] = ChapterOne;

const searchTree = (node: GameNode, id: number): GameNode | null => {
  if (node.id === id) {
    return node;
  } else if (node.children !== null) {
    var i;
    var result = null;
    for (i = 0; result === null && i < node.children.length; i++) {
      result = searchTree(node.children[i], id);
    }
    return result;
  }
  return unexpectedGameEnd;
};

export const GameApi = {
  getInitialNode: (GameTree: GameNode[]) => GameTree[0],
  getChildById: (node: GameNode, option: Option) =>
    node.children.find((child) => child.id === option.id) || unexpectedGameEnd,
  searchTree: searchTree,
};
