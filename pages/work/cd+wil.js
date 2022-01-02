import styled from "styled-components";
import { projects } from "../../data/projects";
import { motion } from "framer-motion";
import { Hero } from "../../comps/Hero";
import { TextFadeUp } from "../../comps/TextFadeUp";
import { ImageFadeUp } from "../../comps/ImageFadeUp";

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
  const project = projects[0];
  const nextProject = projects[0 + 1];

  return (
    <ContainerUI style={{ margin: "0 0 0 0" }} dark={dark}>
      <BorderUI>
        <Hero project={project} dark={dark} />

        <SectionUI align="center">
          {TextFadeUp(
            "I had the pleasure of building a website for Emily Carr's career development and work-integrated learning office."
          )}
        </SectionUI>

        <SectionUI align="center">
          {ImageFadeUp(project.image, "Homepage")}
        </SectionUI>

        <SectionUI align="center">
          {TextFadeUp(
            "We created an educational website with interactive tools to assist students discover what they can accomplish with the skills they gained at Emily Carr."
          )}
        </SectionUI>

        <SectionUI align="center">
          {ImageFadeUp("/career-pathway.gif", "Career Pathways Tool")}
        </SectionUI>

        <SectionUI align="center">
          {ImageFadeUp("/skill-identifier.gif", "Skill Identifier Tool")}
        </SectionUI>

        <SectionUI align="center">
          {TextFadeUp(
            "Using React for the frontend, and Sanity as a content managment system, the website is easily updateable by the staff at Emily Carr."
          )}
        </SectionUI>

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
