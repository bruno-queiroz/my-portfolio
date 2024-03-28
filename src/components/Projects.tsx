import { projects } from "../content/projects";
import ProjectCard from "./ProjectCard";
import Subtitle from "./Subtitle";

import { projects_en } from "../content/languages/english/projects";
import { projects_pt } from "../content/languages/portuguese/projects";
import { useLanguage } from "../context/languageContext";

const Projects = () => {
  const [languageIndex] = useLanguage();
  const language = [projects_en, projects_pt];
  return (
    <section className="p-4 max-w-[1350px] mx-auto py-12" id="projects">
      <div>
        <Subtitle>{language[languageIndex].sub_title}</Subtitle>
        <div className="flex gap-20 flex-col">
          {projects.map((project, i) => (
            <ProjectCard {...project} index={i} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
