import styled from "styled-components";
import { projects } from "../../data/projects";
import { Hero } from "../../comps/Hero";
import { TextFadeUp } from "../../comps/TextFadeUp";
import { ImageFadeUp } from "../../comps/ImageFadeUp";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home({ size, scrollTop, dark, setHovering }) {
  const project = projects[2];
  const nextProject = projects[2 + 1];

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
            "Lê La Vietnamese is one of Calgary's best vietnamese restaurants. I worked with them in creating a redesign of their logo and website."
          )}

          {ImageFadeUp("/lela.gif", "Homepage", dark)}
        </SectionUI>

        <SectionUI align="center" justify="space-between" wrap="column-reverse">
          {ImageFadeUp("/lela-sanity.gif", "Homepage", dark)}

          {TextFadeUp(
            "We created a system that allows the owner to upload and sell merchandise by integrating Stripe for payments and Sanity as a headless content management system."
          )}
        </SectionUI>

        <SectionUI align="center" justify="center">
          {TextFadeUp(
            "Using optimized keywords, we were able increase the websites google search ranking by 4 to 5 pages in multiple searches."
          )}
        </SectionUI>

        <SectionUI align="center" justify="center">
          <Link href={`/work/${nextProject.name}`} passHref>
            <NextProject
              onClick={() => setHovering(false)}
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
