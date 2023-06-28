import tierList2 from "../../public/create-tier-list.png";
import tierList3 from "../../public/tier-list-usage.gif";
import tierList1 from "../../public/tier-list-home-resized.png";
import bomb1 from "../../public/bomb-home-page.png";
import bomb2 from "../../public/bomb-game-mode-page.png";
import bomb3 from "../../public/bomb-play-page.png";
import bomb4 from "../../public/bomb-gameplay.gif";

export const projects = [
  {
    name: "Flash Memo",
    imgs: [],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, odit iusto. Explicabo eaque exercitationem quo odio eum, itaque sint totam veniam incidunt? Culpa, id perferendis! Voluptas repellat dolor quam delectus!",
    technologies: [
      "Typescript",
      "React",
      "Prisma",
      "React Query",
      "PostrgeSQL",
      "Express",
      "JWT",
      "TailwindCSS",
      "Zustand",
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
      "React",
      "TailwindCSS",
      "Zustand",
      "Typescript",
      "MongoDB",
      "Express",
      "Mongoose",
    ],
    github: "https://github.com/bruno-queiroz/tier-list",
    host: "https://tier-list-rho.vercel.app/",
  },
  {
    name: "Bomb",
    imgs: [bomb1, bomb2, bomb3, bomb4],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, odit iusto. Explicabo eaque exercitationem quo odio eum, itaque sint totam veniam incidunt? Culpa, id perferendis! Voluptas repellat dolor quam delectus!",
    technologies: ["React", "TailwindCSS", "Zustand", "Typescript"],
    github: "https://github.com/bruno-queiroz/bomb",
    host: "https://bomb-gamma.vercel.app/",
  },
];

export type Project = (typeof projects)[0];
