import { HiOutlineExternalLink as VisitIcon } from "react-icons/hi";
import { BsGithub as GithubIcon } from "react-icons/bs";
import { IoMdAlert as AlertIcon } from "react-icons/io";
import { Project } from "../content/projects";
import Carousel from "./Carousel";
import TechMiniCard from "./TechMiniCard";

const ProjectCard = ({
  description,
  github,
  host,
  imgs,
  name,
  technologies,
  alert,
  Icon,
  iconColor,
}: Project) => {
  return (
    <article className="grid grid-cols-1 laptop-md:grid-cols-2 gap-6 py-8">
      <Carousel imgs={imgs} name={name} />
      <div className="flex flex-col gap-4 w-full mx-auto laptop-md:mx-0 ">
        <h3 className="flex items-center gap-1 font-semibold text-xl">
          <Icon style={{ color: iconColor }} /> {name}
        </h3>

        <p>{description}</p>

        <div className="flex gap-1 flex-wrap">
          {technologies.map((tech, i) => (
            <TechMiniCard {...tech} key={i} />
          ))}
        </div>

        {alert && (
          <div className="flex gap-1 items-center">
            <AlertIcon className="text-primary text-xl min-w-[20px]" />
            <p>{alert}</p>
          </div>
        )}

        <div className="flex gap-4">
          <a
            href={github}
            target="_blank"
            className="flex gap-1 items-center py-2 px-4 rounded bg-black/70 text-white font-semibold"
          >
            <GithubIcon />
            Github Code
          </a>
          <a
            href={host}
            target="_blank"
            className="flex gap-1 items-center py-2 px-4 rounded bg-black/70 text-white font-semibold"
          >
            <VisitIcon />
            Visitar
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
