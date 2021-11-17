import { FC } from "react";

type SectionTitleType = {
  text: string;
};

const SectionTitle: FC<SectionTitleType> = ({ text }) => {
  return <h2 className="text-4xl font-semibold text-center mb-12">{text}</h2>;
};

export default SectionTitle;
