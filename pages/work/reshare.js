import styled from "styled-components";
import { projects } from "../../data/projects";
import { motion } from "framer-motion";
import { Hero } from "../../comps/Hero";
import { TextFadeUp } from "../../comps/TextFadeUp";
import { MobileGIF } from "../../comps/MobileGif";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home({ size, scrollTop, dark, setHovering }) {
  const project = projects[0];
  const nextProject = projects[1];

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

        <SectionUI align="center" justify="center" padding={"5%"}>
          {TextFadeUp(
            "Reshare is a grocery app that lets grocery stores sell excess inventory at a discounted price, while helping lower-income individuals have access to quality ingredients."
          )}
        </SectionUI>

        <SectionUI
          align="center"
          justify="space-between"
          wrap="column"
          padding={"20%"}
        >
          {TextFadeUp(
            "The App features a customer side, where users are able to quickly browse and purchase quality ingredients at a discounted price. The items will be held at in-store for the cutsomer to pick up at a scheduled time."
          )}

          {MobileGIF("/reshare.gif", "Homepage", dark)}
        </SectionUI>

        <SectionUI
          align="center"
          justify="space-between"
          wrap="column-reverse"
          padding={"20%"}
        >
          {MobileGIF("/reshare-store.gif", "Homepage", dark)}
          {TextFadeUp(
            "The store side features a convenient way for store owners to upload excess inventory and keep track of the stores orders."
          )}
        </SectionUI>

        <SectionUI align="center" justify="center" padding={"5%"}>
          {TextFadeUp(
            "Using firebase for our backend and authentication system, users get realtime updates when an item is posted."
          )}
        </SectionUI>

        <SectionUI align="center" justify="center" padding={"5%"}>
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
  padding: 0 ${(props) => props.padding};
  align-items: ${(props) => props.align};
  position: relative;

  @media (max-width: ${breakPoint}) {
    flex-direction: ${(props) => props.wrap};
    justify-content: ${(props) => props.align};
    padding: 0 5%;
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
