import { GetStaticProps, NextPage } from "next";
import { Home, HomeProps } from "../src/components/home";
import { ProjectType } from "../src/components/home/Projects/types";

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const projects: Array<ProjectType> = [
    {
      id: 1,
      title: "Levenshtein Distance",
      img: "https://i.pinimg.com/564x/8e/4d/b2/8e4db28278930ecc0872625db9033fdb.jpg",
    },
    {
      id: 2,
      title: "Papermin",
      img: "https://i.pinimg.com/564x/8e/4d/b2/8e4db28278930ecc0872625db9033fdb.jpg",
    },
    {
      id: 3,
      title: "Levenshtein Distance",
      img: "https://i.pinimg.com/564x/8e/4d/b2/8e4db28278930ecc0872625db9033fdb.jpg",
    },
    {
      id: 4,
      title: "Papermin",
      img: "https://i.pinimg.com/564x/8e/4d/b2/8e4db28278930ecc0872625db9033fdb.jpg",
    },
  ];

  return {
    props: {
      projects,
    },
  };
};

const App: NextPage<HomeProps> = (props) => {
  return (
    <>
      <Home {...props} />
    </>
  );
};

export default App;
