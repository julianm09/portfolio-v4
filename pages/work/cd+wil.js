import styled from "styled-components";
import Link from "next/link";
import { projects } from "../../data/projects";
import { motion } from "framer-motion";
import { Hero } from "../../comps/Hero";
import { TextFadeUp } from "../../comps/TextFadeUp";
import { ImageFadeUp } from "../../comps/ImageFadeUp";
import { useRouter } from "next/router";

export default function Home({ size, scrollTop, dark, setHovering }) {
  const project = projects[1];
  const nextProject = projects[2];

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
            "I had the pleasure of building a website for Emily Carr's career development and work-integrated learning office."
          )}

          {ImageFadeUp("/career-pathway.gif", "Homepage", dark)}
        </SectionUI>

        <SectionUI align="center" justify="space-between" wrap="column-reverse">
          {ImageFadeUp("/skill-identifier.gif", "Homepage", dark)}

          {TextFadeUp(
            "We created an educational website with interactive tools to help students discover what they can accomplish with the skills learned at Emily Carr."
          )}
        </SectionUI>

        <SectionUI align="center" justify="center">
          {TextFadeUp(
            "Using React for the frontend, and Sanity as a content managment system, the website is easily updateable by the staff at Emily Carr."
          )}
        </SectionUI>

        <SectionUI align="center" justify="center">
        <Link href={`/work/${nextProject.name}`}>
          <NextProject
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
/*             onKeyDown={(e) => handleKeyDown(e, `${nextProject.name}`)}
            onClick={(e) => handleClick(e, `${nextProject.name}`)} */
            dark={dark}
            tabIndex={0}
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

const NextProject = styled(motion.div)`
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
