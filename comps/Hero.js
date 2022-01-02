import styled from "styled-components";
import { motion } from "framer-motion";

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

const H4 = styled(motion.div)`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 16px;
  z-index: 100;
  color: ${(props) => (props.dark ? "white" : "black")};
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
    color: white;
    background: ${(props) => props.color};
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }
`;

export const Hero = ({ project, dark }) => {
  return (
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
        style={{ margin: "20px 0 70px 0" }}
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
        transition={{ delay: 0.6 }}
      >
        visit site
      </ButtonUI>
    </SectionUI>
  );
}
