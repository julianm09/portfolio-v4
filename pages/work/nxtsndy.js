import styled from "styled-components";
import { projects } from "../../data/projects";
import { motion } from "framer-motion";
import { Hero } from "../../comps/Hero";
import { TextFadeUp } from "../../comps/TextFadeUp";
import { ImageFadeUp } from "../../comps/ImageFadeUp";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home({ dark, setHovering }) {
  const project = projects[3];
  const nextProject = projects[3 + 1];

  const router = useRouter();

  const handleClick = (e, href) => {
    e.preventDefault();
    setHovering(false);
    router.push(href);
  };

  const handleKeyDown = (e, href) => {
    if (e.key === "Enter") {
      e.preventDefault();
      router.push(href);
    }
  };

  return (
    <ContainerUI style={{ margin: "0 0 0 0" }} dark={dark}>
      <BorderUI>
        <Hero project={project} dark={dark} />

        <SectionUI align="center" justify="space-between" wrap="column">
          {TextFadeUp(
            "NXTSNDY is a creative collective focused on clothing design and music. I had the pleasure of working with them on designing and developing their blog."
          )}

          {ImageFadeUp("/nxtsndy.gif", "Homepage", dark)}
        </SectionUI>

        <SectionUI align="center" justify="space-between" wrap="column-reverse">
          {ImageFadeUp("/nxtsndy-sanity.gif", "Homepage", dark)}

          {TextFadeUp(
            "NXTSNDY required an interactive website that would stand out, while showcasing their talents and ideals."
          )}
        </SectionUI>

        <SectionUI align="center" justify="center">
          {TextFadeUp(
            "Using Sanity as a content managment system, the website is easy to update and make new posts."
          )}
        </SectionUI>

        <SectionUI align="center" justify="center">
          <Link href={`/work/${nextProject.name}`} passHref>
            <NextProject
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              /*             onKeyDown={(e) => handleKeyDown(e, `${nextProject.name}`)}
            onClick={(e) => handleClick(e, `${nextProject.name}`)} */
              dark={dark}
              style={{ margin: "0 0 20px 0" }}
              exit={{ opacity: 0 }}
              color={nextProject.color}
            >
              next project
            </NextProject>
          </Link>
        </SectionUI>
      </BorderUI>
    </ContainerUI>
  );
}

const breakPoint = "1200px";

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
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: 0.5s ease;
  position: relative;

  @media (max-width: 1000px) {
    max-height: none;
  }
`;

const MoveCont = styled(motion.div)`
  position: relative;
`;

const SectionUI = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 220px;
  text-align: ${(props) => props.justify};
  justify-content: ${(props) => props.justify};
  padding: 0 5%;
  align-items: ${(props) => props.align};
  position: relative;
  flex-direction: row;
  @media (max-width: ${breakPoint}) {
    flex-direction: ${(props) => props.wrap};
    justify-content: ${(props) => props.align};
  }
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
