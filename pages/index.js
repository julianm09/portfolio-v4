import Scene from "../comps/Scene";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Projects from "../comps/Projects";
import { ContactForm } from "../comps/Contact";
import { Header } from "../comps/Header";
import { Loader } from "../comps/Loader";
import useWindowSize from "../hooks/useWindowSize";
import useScrollTop from "../hooks/useScrollTop";
import Cursor from "../comps/Cursor";

const ContainerUI = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 1000;
`;

const BorderUI = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  transition: 0.5s ease;
  position: relative;
  @media (max-width: 1000px) {
    max-height: none;
    padding: 0 0 100px 0;
  }
`;

const SectionUI = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  position: relative;
  flex-direction: column;

`;

const H1 = styled.div`
  display: flex;
  align-items: center;
  font-size: calc(64px + 4vw);
  color: transparent;
  -webkit-text-stroke: 1px black;
`;

const H2 = styled.div`
  display: flex;
  align-items: center;
  font-size: calc(18px + 1vw);
`;

const H3 = styled.div`
  display: flex;
  align-items: center;
  font-size: calc(24px + 1vw);
  width: calc(50%);
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export default function Home() {
  const size = useWindowSize();
  const scrollTop = useScrollTop();

  const [loading, setLoading] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <ContainerUI>
      <Cursor position={position} setPosition={setPosition} hovering={hovering}/>
      <Loader loading={loading} />
      <Header />

      <BorderUI style={{ top: size.width > 1000 ? -scrollTop / 25 : 0 }}>
        <SectionUI>
          <H1 style={{ margin: "0 0 50px 0" }}>
            Hi, <br />
            I'm Julian
          </H1>
          <H2>I design and develop</H2>
        </SectionUI>
        <SectionUI>
          <H3>I'm a frontend developer and digital design student at BCIT.</H3>
        </SectionUI>
        <SectionUI>
          <H3>
            I'm currently learning React Native to further my development. And
            Blender to sharpen my design.
          </H3>
        </SectionUI>
        <SectionUI>
          <H3>Check out some of my recent projects below.</H3>
        </SectionUI>
        <SectionUI style={{ padding: "250px 0" }}>
          <Projects position={position} setHovering={setHovering}/>
        </SectionUI>

        <SectionUI>
          <H3>Please get in touch if you would like to work together.</H3>
        </SectionUI>
        <SectionUI style={{ padding: "250px 0" }}>
          <ContactForm />
        </SectionUI>
      </BorderUI>
      <Scene scrollTop={scrollTop} />
    </ContainerUI>
  );
}
