import styled from "styled-components";
import { projects } from "../../data/projects";
import { motion } from "framer-motion";
import Project from "../../comps/Project";

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

const H1 = styled(motion.a)`
  display: flex;
  align-items: center;
  font-size: calc(64px + 4vw);
  color: transparent;
  text-align: center;
  z-index: 100;
  -webkit-text-stroke: ${(props) => (props.dark ? "1px white" : "1px black")};
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

const H3 = styled(motion.div)`
  display: flex;
  align-items: center;
  font-size: calc(16px + 1vw);
  width: 50%;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const H4 = styled(motion.div)`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 16px;
  z-index: 100;
  color: ${(props) => (props.dark ? "white" : "black")};
`;

const RowUI = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
  width: 50%;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const Img = styled(motion.img)`
  box-shadow: 0 0 20px rgba(193, 193, 193, 0.5);
  width: 50%;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const ButtonUI = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  width: 150px;
  height: 50px;
  border: ${(props) => (props.dark ? "1px solid white" : "1px solid black")};
  color: ${(props) => (props.dark ? "white" : "black")};
  z-index: 100;
  &:hover {
    border: 1px solid white;
    color: ${props => props.dark ? "black" : "white"};
    background: ${props => props.dark ? "white" : "black"};
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }
`;

export default function Home({ size, scrollTop, dark, setHovering }) {
  const project = projects[2];
  const nextProject = projects[2 + 1];

  const TextFadeUp = (text) => {
    return (
      <H3
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          type: "ease",
        }}
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: 50, opacity: 0 },
        }}
      >
        {text}
      </H3>
    );
  };

  const ImageFadeUp = (image, text) => {
    return (
      <>
        <Img
          src={image}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            type: "ease",
          }}
          variants={{
            visible: { y: 0, opacity: 1 },
            hidden: { y: 50, opacity: 0 },
          }}
        />
        <RowUI
          style={{ margin: "20px 0 00px 0" }}
          src={image}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            type: "ease",
          }}
          variants={{
            visible: { x: 0, opacity: 1 },
            hidden: { x: 50, opacity: 0 },
          }}
        >
          <H4>{text}</H4>
        </RowUI>
      </>
    );
  };

  return (
    <ContainerUI style={{ margin: "0 0 0 0" }} dark={dark}>
      <BlockUI
        color={project.color}
        transition={{ delay: 1 }}
        initial={{ x: 0, opacity: 1 }}
        animate={{ x: 0, opacity: 0 }}
      ></BlockUI>
      <BorderUI>
        <SectionUI align="center">
          <H4
            style={{ margin: "0 0 0px 0" }}
            dark={dark}
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            {project.type} • {project.work}
          </H4>
          <H1
            style={{ margin: "0 0 50px 0" }}
            dark={dark}
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {project.name}
          </H1>
          <ButtonUI
            target="_blank"
            href={project.link}
            color={project.color}
            dark={dark}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            visit site
          </ButtonUI>
        </SectionUI>

        <SectionUI align="center">
          {TextFadeUp(
            "NXTSNDY is a creative collective focused on clothing design and music. I had the pleasure of working with them on designing and developing their blog."
          )}
        </SectionUI>

        <SectionUI align="center">
          {ImageFadeUp(project.image, "Homepage")}
        </SectionUI>

        <SectionUI align="center">
          {TextFadeUp(
            "NXTSNDY required an interactive website that would stand out, while showcasing their talents and ideals."
          )}
        </SectionUI>

        <SectionUI align="center">
          {ImageFadeUp("/nxtsndy-sanity.gif", "Content Managment System")}
        </SectionUI>

{/*         <SectionUI align="center">
          {ImageFadeUp("/skill-identifier.gif", "Skill Identifier Tool")}
        </SectionUI> */}

        <SectionUI align="center">
          {TextFadeUp(
            "Using Sanity as a content managment system, the website is easy to update and make new posts."
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
