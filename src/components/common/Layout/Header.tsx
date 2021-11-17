import { FC } from "react";
import Link from "next/link";
import Container from "../Container";

const Header: FC = () => {
  return (
    <header className="sticky top-0 bg-white">
      <Container>
        <section>
          <a href="#home">
            <h1>Luis Resendiz</h1>
          </a>
          <nav>
            <a href="#projects">Projects</a>
            <a href="#tech">Technologies</a>
            <a href="#about">About me</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact me</a>
          </nav>
        </section>
      </Container>
    </header>
  );
};

export default Header;
