import styled from "styled-components";
import Link from "next/link";
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
  width: 90%;
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
    color: ${(props) => (props.dark ? "white" : "black")};
    -webkit-text-stroke: 0;
  }
`;

export default function Home({ size, scrollTop, dark, setHovering }) {
  const project = projects[1];
  const nextProject = projects[1 + 1];

  return (
    <ContainerUI style={{ margin: "0 0 0 0" }} dark={dark}>
      <BorderUI>
        <Hero project={project} dark={dark} />
        <SectionUI align="center">
          {TextFadeUp(
            "Lê La Vietnamese is one of Calgary's best vietnamese restaurants. I worked with them in creating a redesign of their logo and website."
          )}
        </SectionUI>

        <SectionUI align="center">
          {ImageFadeUp(project.image, "Homepage", dark)}
        </SectionUI>

        <SectionUI align="center">
          {TextFadeUp(
            "We created a system that allows the owner to upload and sell merchandise by integrating Stripe for payments and Sanity as a headless content management system."
          )}
        </SectionUI>

        <SectionUI align="center">{ImageFadeUp("/lela.gif", "")}</SectionUI>

        {/*         <SectionUI align="center">
          {ImageFadeUp("/skill-identifier.gif", "Skill Identifier Tool")}
        </SectionUI> */}

        <SectionUI align="center">
          {TextFadeUp(
            "Using optimized keywords, we were able increase the websites google search ranking by 4 to 5 pages in multiple searches."
          )}
        </SectionUI>

        <SectionUI align="center">
          <Link href={`/work/${nextProject.name}`}>
            <NextProject
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              onClick={() => setHovering(false)}
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
