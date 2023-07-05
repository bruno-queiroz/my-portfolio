import flash1 from "../../public/flash-memo-home.png";
import flash2 from "../../public/flash-memo-decks.png";
import flash3 from "../../public/flash-memo-add.png";
import flash4 from "../../public/flash-memo-usage.gif";
import tierList2 from "../../public/create-tier-list.png";
import tierList3 from "../../public/tier-list-usage.gif";
import tierList1 from "../../public/tier-list-home-resized.png";
import bomb1 from "../../public/bomb-home-page.png";
import bomb2 from "../../public/bomb-game-mode-page.png";
import bomb3 from "../../public/bomb-play-page.png";
import bomb4 from "../../public/bomb-gameplay.gif";

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
import { GiTwirlyFlower as ReactQueryLogo } from "react-icons/gi";
// @ts-ignore
import { ReactComponent as JwtLogo } from "../../public/jwt.svg";
// @ts-ignore
import { ReactComponent as PostgresLogo } from "../../public/postgresql.svg";

export const projects = [
  {
    name: "Flash Memo",
    imgs: [flash1, flash2, flash3, flash4],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, odit iusto. Explicabo eaque exercitationem quo odio eum, itaque sint totam veniam incidunt? Culpa, id perferendis! Voluptas repellat dolor quam delectus!",
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
    host: "#",
  },
  {
    name: "TierList Creator",
    imgs: [tierList1, tierList2, tierList3],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, odit iusto. Explicabo eaque exercitationem quo odio eum, itaque sint totam veniam incidunt? Culpa, id perferendis! Voluptas repellat dolor quam delectus!",
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
    host: "https://tier-list-rho.vercel.app/",
  },
  {
    name: "Bomb",
    imgs: [bomb1, bomb2, bomb3, bomb4],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, odit iusto. Explicabo eaque exercitationem quo odio eum, itaque sint totam veniam incidunt? Culpa, id perferendis! Voluptas repellat dolor quam delectus!",
    technologies: [
      { name: "Typescript", color: "#007acc", Icon: TypescriptLogo },
      { name: "React", color: "#88dded", Icon: ReactLogo },
      { name: "TailwindCSS", color: "#38BDF8", Icon: TailwindLogo },
      { name: "Zustand", color: "#5F4926", Icon: ZustandLogo },
    ],
    github: "https://github.com/bruno-queiroz/bomb",
    host: "https://bomb-gamma.vercel.app/",
  },
];

export type Project = (typeof projects)[0];
