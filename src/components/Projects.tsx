import { projects } from "../content/projects";
import ProjectCard from "./ProjectCard";
import Subtitle from "./Subtitle";

const Projects = () => {
  return (
    <section className="p-4">
      <div>
        <Subtitle>Projects</Subtitle>
        <div className="flex gap-20 flex-col">
          {projects.map((project, i) => (
            <ProjectCard {...project} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
