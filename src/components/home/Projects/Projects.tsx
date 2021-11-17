import { FC } from "react";
import Container from "../../common/Container";
import SectionTitle from "../../common/SectionTitle";
import Project from "./Project";
import { ProjectType } from "./types";

type ProjectsProps = {
  projects: Array<ProjectType>;
};

const Projects: FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projects" className="bg-purple-200">
      <Container>
        <div className="py-12">
          <SectionTitle text="Projects" />
          <div>
            {projects &&
              projects.map((project) => (
                <Project key={project.id} project={project} />
              ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
