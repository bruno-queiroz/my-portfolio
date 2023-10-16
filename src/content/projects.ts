import flash1 from "../../public/flash-memo-home.png";
import flash2 from "../../public/flash-memo-decks.png";
import flash3 from "../../public/flash-memo-add.png";
import flash4 from "../../public/flash-memo-search.png";
import flash5 from "../../public/flash-memo-usage.gif";
import tierList1 from "../../public/tier-list-creator-home.png";
import tierList2 from "../../public/tier-list-creator-create.png";
import tierList3 from "../../public/tier-list-creator-usage.gif";
import bomb1 from "../../public/bomb-home.png";
import bomb2 from "../../public/bomb-game-mode.png";
import bomb3 from "../../public/bomb-usage.gif";

import { BiBrain as FlashMemoIcon } from "react-icons/bi";
import { IoIosPodium as TierListCreatorIcon } from "react-icons/io";

import {
  SiTypescript as TypescriptLogo,
  SiTailwindcss as TailwindLogo,
  SiMongodb as MongoLogo,
} from "react-icons/si";
import { FaReact as ReactLogo } from "react-icons/fa";
import {
  SiPrisma as PrismaLogo,
  SiExpress as ExpressLogo,
} from "react-icons/si";
import { TbLetterM as MongooseLogo } from "react-icons/tb";
import { RiBearSmileFill as ZustandLogo } from "react-icons/ri";
import {
  GiTwirlyFlower as ReactQueryLogo,
  GiRollingBomb as BombIcon,
} from "react-icons/gi";
// @ts-ignore
import { ReactComponent as JwtLogo } from "../../public/jwt.svg";
// @ts-ignore
import { ReactComponent as PostgresLogo } from "../../public/postgresql.svg";
import { SiJest as JestLogo } from "react-icons/si";
// @ts-ignore
import { TbBrandCypress as CypressLogo } from "react-icons/tb";

export const projects = [
  {
    name: "Flash Memo",
    imgs: [flash1, flash2, flash3, flash4, flash5],
    description:
      "Esse projeto foi inspirado no Anki. Os maiores desafios fazendo esse projeto foram lidar com um banco de dados relacional pela primeira vez e criar um algoritmo para determinar o tempo de revisão de cada carta.",
    technologies: [
      { name: "Typescript", color: "#007acc", Icon: TypescriptLogo },
      { name: "React", color: "#88dded", Icon: ReactLogo },
      { name: "Prisma", color: "#71E8D4", Icon: PrismaLogo },
      { name: "ReactQuery", color: "#EF4444", Icon: ReactQueryLogo },
      { name: "PostrgeSQL", color: "#0064a5", Icon: PostgresLogo },
      { name: "Express", color: "#ffffff", Icon: ExpressLogo },
      { name: "JWT", color: "#D63AFF", Icon: JwtLogo },
      { name: "TailwindCSS", color: "#38BDF8", Icon: TailwindLogo },
      { name: "Zustand", color: "#5F4926", Icon: ZustandLogo },
    ],
    github: "https://github.com/bruno-queiroz/flash-memo",
    host: "https://flash-memo.vercel.app",
    Icon: FlashMemoIcon,
    iconColor: "white",
    alert:
      "A primeira chamada a aplicação leva mais de 1 min devido ao uso de free host.",
  },
  {
    name: "TierList Creator",
    imgs: [tierList1, tierList2, tierList3],
    description:
      "Esse projeto foi inspirado no TierMaker. Os maiores desafios nesse projeto foram criar toda a interatividade de Drag and Drop de cada item e como fazer o hosting das imagens gratuitamente.",
    technologies: [
      { name: "Typescript", color: "#007acc", Icon: TypescriptLogo },
      { name: "React", color: "#88dded", Icon: ReactLogo },
      { name: "Express", color: "#ffffff", Icon: ExpressLogo },
      { name: "MongoDB", color: "#4DB33D", Icon: MongoLogo },
      { name: "TailwindCSS", color: "#38BDF8", Icon: TailwindLogo },
      { name: "Zustand", color: "#5F4926", Icon: ZustandLogo },
      { name: "Mongoose", color: "#990000", Icon: MongooseLogo },
    ],
    github: "https://github.com/bruno-queiroz/tier-list",
    host: "https://tier-list-creator-bruno-queiroz.vercel.app/",
    Icon: TierListCreatorIcon,
    iconColor: "#BFFF7F",
  },
  {
    name: "Bomb",
    imgs: [bomb1, bomb2, bomb3],
    description:
      "Esse projeto é um simples jogo em que pensei. Os maiores desafios nesse projeto foram para criar um algoritmo que gerasse 3 ou 5 bombas aleatoriamente e uma animação quando o jogador ganha a partida.",
    technologies: [
      { name: "Typescript", color: "#007acc", Icon: TypescriptLogo },
      { name: "React", color: "#88dded", Icon: ReactLogo },
      { name: "TailwindCSS", color: "#38BDF8", Icon: TailwindLogo },
      { name: "Zustand", color: "#5F4926", Icon: ZustandLogo },
      { name: "Jest", color: "#C21325", Icon: JestLogo },
      { name: "Cypress", color: "#A3E7CB", Icon: CypressLogo },
    ],
    github: "https://github.com/bruno-queiroz/bomb",
    host: "https://bomb-gamma.vercel.app/",
    Icon: BombIcon,
    iconColor: "#DC2626",
  },
];

export type Project = (typeof projects)[0];
