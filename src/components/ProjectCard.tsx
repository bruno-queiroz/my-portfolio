import { HiOutlineExternalLink as VisitIcon } from "react-icons/hi";
import { BsGithub as Githubicon } from "react-icons/bs";
import { Project } from "../content/projects";
import Carousel from "./Carousel";

const ProjectCard = ({
  description,
  github,
  host,
  imgs,
  name,
  technologies,
}: Project) => {
  return (
    <article className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Carousel imgs={imgs} />
      <div className="flex flex-col gap-4 w-full mx-auto md:mx-0 ">
        <h3 className="font-semibold text-lg">{name}</h3>

        <p>{description}</p>

        <div className="flex gap-2 flex-wrap">
          {technologies.map((tech, i) => (
            <span className="p-2 bg-black/70 rounded" key={i}>
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={github}
            target="_blank"
            className="flex gap-1 items-center py-2 px-4 rounded bg-cyan-400 text-black font-semibold"
          >
            <Githubicon />
            Github Code
          </a>
          <a
            href={host}
            target="_blank"
            className="flex gap-1 items-center py-2 px-4 rounded bg-cyan-400 text-black font-semibold"
          >
            <VisitIcon />
            Visit
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;