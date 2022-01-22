import styled from "styled-components";
import { motion } from "framer-motion";

export const Hero = ({ project, dark }) => {
  return (
    <SectionUI align="flex-start">
      <Row wrap="column">
        <ColumnUI justify="space-between" wrap=" row">
          <H1
            dark={dark}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            mb="40px"
          >
            {project.name}
          </H1>

          <Details mb="60px">
            <Detail
              mb="20px"
              dark={dark}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Bold>Work:</Bold> {project.type}
            </Detail>
            <Detail
              mb="20px"
              dark={dark}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Bold>Role:</Bold> {project.work}
            </Detail>
            <Detail
              dark={dark}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Bold>Technology:</Bold> {project.stack}
            </Detail>
          </Details>
        </ColumnUI>

        <ColumnUI align="flex-end" justify="flex-end" width="100%">
          <ImageCont
            target="_blank"
            href={project.link}
            color={project.color}
            mb="40px"
          >
            <ImageUI src={project.image} />
            <ButtonUI
              target="_blank"
              href={project.link}
              color={project.color}
              dark={dark}
            >
              visit site
            </ButtonUI>
          </ImageCont>
          <MobileButtonUI
            target="_blank"
            href={project.link}
            color={project.color}
            dark={dark}
          >
            visit site
          </MobileButtonUI>
        </ColumnUI>
      </Row>
    </SectionUI>
  );
};

const breakPoint = "1200px";

const SectionUI = styled.div`
  width: 100%;
  padding: 20vh 5% 0 5%;
  margin-bottom: 220px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${breakPoint}) {
  }
`;

const H1 = styled(motion.div)`
  display: flex;
  align-items: center;
  font-size: 64px;
  position: relative;
  top: 0px;
  color: transparent;
  text-align: center;
  z-index: 100;
  -webkit-text-stroke: ${(props) => (props.dark ? "1px white" : "1px black")};
  margin-bottom: ${(props) => props.mb};
`;

const Bold = styled(motion.div)`
  font-weight: 700;
  margin: 0 5px 0 0;
`;

const ColumnUI = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justify};
  position: relative;
  align-items: ${(props) => props.align};
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  @media (max-width: ${breakPoint}) {
    align-items: ${(props) => props.align};
    margin-bottom: ${(props) => props.mb};
  }
`;

const Row = styled(motion.div)`
  display: flex;

  margin-bottom: ${(props) => props.mb};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  padding: ${(props) => props.padding};
  background: ${(props) => props.background};
  width: ${(props) => props.width};

  @media (max-width: ${breakPoint}) {
    flex-direction: ${(props) => props.wrap};
    align-items: ${(props) => props.align};
    margin-bottom: 100px;
    width: 100%;
    padding: 0;
  }
`;

const ButtonUI = styled(motion.div)`
  display: none;
  align-items: center;
  justify-content: center;
  position: absolute;
  font-size: 16px;
  width: 150px;
  height: 50px;
  border: ${(props) => (props.dark ? "1px solid white" : "1px solid black")};
  color: ${(props) => (props.dark ? "white" : "black")};
  background: ${(props) => props.color};
  border: 1px solid white;
  color: white;
  background: ${(props) => props.color};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  z-index: 100;
`;

const MobileButtonUI = styled(motion.div)`
  display: none;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  width: 150px;
  height: 50px;
  border: ${(props) => (props.dark ? "1px solid white" : "1px solid black")};
  color: ${(props) => (props.dark ? "white" : "black")};
  background: ${(props) => props.color};
  border: 1px solid white;
  color: white;
  background: ${(props) => props.color};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  z-index: 100;

  @media (max-width: ${breakPoint}) {
    display: flex;
  }
`;

const ImageUI = styled(motion.img)`
  width: 100%;
  border-radius: 10px;
  transition: 0.5s ease;
`;

const ImageCont = styled(motion.a)`
  width: 80%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  object-fit: cover;
  overflow: hidden;
  align-items: center;
  box-shadow: 0px 0px 40px rgba(200, 200, 200, 0.25);

  transition: 0.5s ease;

  @media (min-width: ${breakPoint}) {
    &:hover ${ButtonUI} {
      display: flex;
    }

    &:hover ${ImageUI} {
      opacity: 25%;
      transform: scale(125%);
    }
  }

  @media (max-width: ${breakPoint}) {
    width: 100%;
    margin-bottom: ${(props) => props.mb};
  }
`;

const Detail = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  text-align: center;
  flex-direction: column;
  font-size: 16px;
  z-index: 100;
  text-align: left;
  color: ${(props) => (props.dark ? "white" : "black")};
  margin-bottom: ${(props) => props.mb};
`;

const Details = styled(motion.div)`
  line-height: 150%;
  font-size: 16px;

  @media (max-width: ${breakPoint}) {
    margin-bottom: ${(props) => props.mb};
  }
`;
