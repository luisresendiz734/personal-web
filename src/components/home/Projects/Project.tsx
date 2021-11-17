import { FC } from "react";
import { ProjectType } from "./types";

type ProjectProps = {
  project: ProjectType;
};

const Project: FC<ProjectProps> = ({ project }) => {
  return (
    <div className="rounded-lg overflow-hidden bg-white mb-8 shadow-lg">
      <div className="p-8">
        <h3 className="text-2xl font-semibold">{project.title}</h3>
        <div className="mt-2">
          <span className="text-sm px-2 py-1 border rounded-full mr-1">
            javascript
          </span>
          <span className="text-sm px-2 py-1 border rounded-full mr-1">
            react
          </span>
          <span className="text-sm px-2 py-1 border rounded-full mr-1">
            firebase
          </span>
        </div>
        <p className="my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          adipisci libero. Esse sed, magnam natus ea enim aspernatur sit in!
        </p>
        <div className="flex">
          <a
            className="flex text-sm font-semibold py-2 px-4 bg-purple-500 text-white rounded hover:bg-purple-600 mr-2"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
            <span>code</span>
          </a>
          <a
            className="flex text-sm font-semibold py-2 px-4 bg-purple-500 text-white rounded hover:bg-purple-600 mr-2"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                clip-rule="evenodd"
              />
            </svg>
            <span>live demo</span>
          </a>
        </div>
      </div>
      <figure>
        <img src={project.img} alt={project.title} />
      </figure>
    </div>
  );
};

export default Project;
