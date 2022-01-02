import styled from "styled-components";
import { projects } from "../../data/projects";
import { motion } from "framer-motion";
import Hero from "./comps/Hero";
import { ImageFadeUp } from "./comps/ImageFadeUp";
import { TextFadeUp } from "./comps/TextFadeUp";

const ContainerUI = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 1000;
  color: ${(props) => (props.dark ? "white" : "black")};
  background: ${(props) => (props.dark ? "black" : "white")};
  overflow: hidden;
`;

const BorderUI = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  transition: 0.5s ease;
  position: relative;

  @media (max-width: 1000px) {
    max-height: none;
  }
`;

const BlockUI = styled(motion.div)`
  background: ${(props) => props.color};
  background: transparent;
  width: 100vw;
  height: calc(100vh - 50px);
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SectionUI = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: ${(props) => props.align};
  position: relative;
  flex-direction: column;
`;

const NextProject = styled(motion.a)`
  display: flex;
  align-items: center;
  font-size: calc(64px + 4vw);
  color: transparent;
  text-align: center;
  z-index: 100;
  -webkit-text-stroke: ${(props) => (props.dark ? "1px white" : "1px black")};

  &:hover {
    color: ${(props) => props.color};
    -webkit-text-stroke: 0;
  }
`;

export default function Home({ size, scrollTop, dark, setHovering }) {
  const project = projects[5];
  const nextProject = projects[0];

  return (
    <ContainerUI style={{ margin: "0 0 0 0" }} dark={dark}>
      <BorderUI>
        <Hero project={project} dark={dark} />

        <SectionUI align="center">
          {TextFadeUp(
            "Cacto is an exercise in branding and design created as a final project for my first semesters design class."
          )}
        </SectionUI>

        <SectionUI align="center">
          {ImageFadeUp(project.image, "Homepage")}
        </SectionUI>

        <SectionUI align="center">
          {TextFadeUp(
            "Using CSS animations and Three.js we created a fun and interactive online storefront for our brand."
          )}
        </SectionUI>

        <SectionUI align="center">{ImageFadeUp("/cacto.gif", "")}</SectionUI>

        {/*         <SectionUI align="center">
          {ImageFadeUp("/skill-identifier.gif", "Skill Identifier Tool")}
        </SectionUI>

        <SectionUI align="center">
          {TextFadeUp(
            "Using React for the frontend, and Sanity as a content managment system, the website is easily updateable by the staff at Emily Carr."
          )}
        </SectionUI> */}

        <SectionUI align="center">
          <NextProject
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            href={`/work/${nextProject.name}`}
            dark={dark}
            style={{ margin: "0 0 20px 0" }}
            exit={{ opacity: 0 }}
            color={nextProject.color}
          >
            next project
          </NextProject>

          <BlockUI color={nextProject.color}></BlockUI>
        </SectionUI>
      </BorderUI>
    </ContainerUI>
  );
}
