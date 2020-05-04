import { GameNode, GameIdsObject } from "../Tree";

const ChapterOneIDS: GameIdsObject = {
  START: 1,
  PRETEND_NOBODY_IS_HOME: 2,
};

const ChapterOne: GameNode[] = [
  {
    description: "aca va el texto que cuenta la situacion",
    question: "aca la pregunta a realizar si fuera necesario",
    id: ChapterOneIDS.START,
    options: [
      {
        id: ChapterOneIDS.PRETEND_NOBODY_IS_HOME,
        text: "y las opciones",
      },
      {
        id: ChapterOneIDS.PRETEND_NOBODY_IS_HOME,
        text: "posibles",
      },
      {
        id: ChapterOneIDS.PRETEND_NOBODY_IS_HOME,
        text: "para elegir",
      },
      {
        id: ChapterOneIDS.PRETEND_NOBODY_IS_HOME,
        text: "Algunas pueden hacerte daño",
      },
    ],
    children: [
      {
        description: "probando si la salud afecta",
        question: "...",
        id: ChapterOneIDS.PRETEND_NOBODY_IS_HOME,
        health: -30,
        options: [],
        children: [],
      },
    ],
  },
];

export default ChapterOne;
