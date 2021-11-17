import { FC } from "react";
import { Projects } from "./Projects";
import { HomeProps } from "./types";

const Home: FC<HomeProps> = ({ projects }) => {
  return (
    <>
      <Projects projects={projects} />
    </>
  );
};

export default Home;
