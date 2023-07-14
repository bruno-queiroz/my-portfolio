import { projects } from "../content/projects";
import ProjectCard from "./ProjectCard";
import Subtitle from "./Subtitle";

const Projects = () => {
  return (
    <section className="p-4 max-w-[1350px] mx-auto py-12" id="projects">
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
