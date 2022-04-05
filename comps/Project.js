import styled from "styled-components";
import { useState, useEffect } from "react";
import useWindowSize from "../hooks/useWindowSize";
import Link from "next/link";
import { motion, motionValue, transform } from "framer-motion";
import { useRouter } from "next/router";

export default function Project({ p, position, setHovering, dark }) {
  const [hover, setHover] = useState(false);

  const router = useRouter();

  const size = useWindowSize();

  const handleMouseEnter = () => {
    setHover(true);
    setHovering(true);
  };

  const handleMouseOut = () => {
    setHover(false);
    setHovering(false);
  };

  const handleClick = (e, href) => {
    e.preventDefault();
    router.push(href);
  };

  const handleKeyDown = (e, href) => {
    if (e.key === "Enter") {
      e.preventDefault();
      router.push(href);
    }
  };

  return (
    <ProjectUI>
      <Link href={`/work/${p.name}`} passHref>
        <GridItemUI
          onClick={handleMouseOut}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseOut}
        >
          <ProjectNameUI key={p.name} dark={dark}>
            {p.name}
          </ProjectNameUI>
          <ImageContainerUI>
            <ImageUI src={p.image} />
          </ImageContainerUI>
        </GridItemUI>
      </Link>

      {hover && size.width > 1000 ? (
        <ImageContainerUI
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          style={{ left: `${position.x + 50}px`, top: `${position.y / 15}vh` }}
        >
          <ImageUI src={p.image} />
        </ImageContainerUI>
      ) : (
        <></>
      )}
    </ProjectUI>
  );
}

const ProjectUI = styled(motion.div)`
  margin: 100px 0;
`;

const ProjectNameUI = styled.div`
  font-size: calc(48px + 3vw);
  color: transparent;
  z-index: 100;
  transition: 0.5s ease;
  position: relative;
  left: 0;
  -webkit-text-stroke: ${(props) => (props.dark ? "1px white" : "1px black")};
`;

const ImageContainerUI = styled(motion.div)`
  position: fixed;
  display: flex;
  flex-direction: column;
  transition: 0.2s ease-out;

  @media (max-width: 1000px) {
    display: flex;
    position: relative;
    margin: 25px 0 200px 0;
  }
`;

const ImageUI = styled.img`
  width: 50vw;
  transition: 0.1s ease;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const GridItemUI = styled.a`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  z-index: 10000;
  cursor: none;
  width: 50%;

  @media (max-width: 1000px) {
    width: 100%;
  }

  @media (max-width: 1000px) {
    height: auto;
  }

  &:hover {
    ${ProjectNameUI} {
      color: black;
      left: 50px;
    }
  }
`;
