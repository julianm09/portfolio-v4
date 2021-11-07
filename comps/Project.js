import Head from "next/head";
import Image from "next/image";
import Scene from "./Scene";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import { useState, useEffect } from "react";
import useWindowSize from "../hooks/useWindowSize";

const ContainerUI = styled.div`
  display: grid;
  grid-template-columns: 2fr;
  grid-gap: 100px;
  @media (max-width: 1300px) {
    grid-template-columns: 2fr;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 2fr;
  }
`;

const ProjectNameUI = styled.div`
  -webkit-text-stroke: 1px black;
  font-size: calc(48px + 3vw);
  color: transparent;
  z-index: 100;
  transition: 0.5s ease;
  position: relative;
  left: 0;
`;

const ImageContainerUI = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;


  @media (max-width: 1000px) {
    display: flex;
    position: relative;
    margin: 25px 0 200px 0;
  }
`;

const ImageUI = styled.img`
  width: 50vw;
  transition: 0.1s ease;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  margin: 0 0 25px 0;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const GridItemUI = styled.a`
  display: flex;
  flex-direction: column;
  height: 250px;
  box-sizing: border-box;
  position: relative;
  z-index: 10000;
  cursor: none;
  width: 35%;

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

const OverlayUI = styled.a`
  display: flex;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  z-index: 1000;
  color: white;
  opacity: 0%;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease;
  cursor: pointer;
  padding: 2.5%;
  flex-direction: column;
  &:hover {
    opacity: 100%;
  }
`;

const TitleUI = styled.div`
  font-weight: bold;
  font-size: 32px;
`;

const DescriptionUI = styled.div`
  font-size: 20px;
  font-weight: normal;
  width: 25vw;

  @media (max-width: 1000px) {
    width: 100%;
    margin: 0 0 50px 0;
  }
`;

const StackUI = styled.div`
  font-size: 16px;
`;

const RowUI = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export default function Project({ p, position, setHovering }) {
  const [hover, setHover] = useState(false);

  const size = useWindowSize();

  const handleMouseEnter = () => {
    setHover(true);
    setHovering(true);
  };

  const handleMouseOut = () => {
    setHover(false);
    setHovering(false);
  };

  return (
    <>
      <GridItemUI
        target="_blank"
        href={p.link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseOut}
      >
        <ProjectNameUI key={p.name}>{p.name}</ProjectNameUI>

        <ImageContainerUI
      
        >
          <ImageUI src={p.image} />

          <RowUI>
            <DescriptionUI>{p.description}</DescriptionUI>
            <StackUI>{p.stack}</StackUI>
          </RowUI>
        </ImageContainerUI>
      </GridItemUI>

      {hover && size.width > 1000 ? (
        <ImageContainerUI
          style={{ left: `${position.x + 50}px`, top: `${position.y / 15}vh` }}
        >
          <ImageUI src={p.image} />

          <RowUI>
            <DescriptionUI>{p.description}</DescriptionUI>
            <StackUI>{p.stack}</StackUI>
          </RowUI>
        </ImageContainerUI>
      ) : (
        <></>
      )}
    </>
  );
}
/*         <GridItemUI key={p.name}>
          <ImageUI style={{ width: "100%" }} src={p.image} />
          <OverlayUI href={p.link} target="_blank">
            <DescriptionUI>{p.description}</DescriptionUI>
            <RowUI>
              <StackUI>Tech: {p.stack}</StackUI>
              <VisitUI>visit</VisitUI>
            </RowUI>
          </OverlayUI>
        </GridItemUI> */
