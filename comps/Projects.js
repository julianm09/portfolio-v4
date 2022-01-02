import Head from "next/head";
import Image from "next/image";
import Scene from "./Scene";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Project from "./Project";
import { projects } from "../data/projects";

const ContainerUI = styled.div`
  display: grid;
  grid-template-columns: 2fr;
  @media (max-width: 1300px) {
    grid-template-columns: 2fr ;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 2fr;
  }
`;

const GridItemUI = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
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
  justify-content: space-between;
  align-items: flex-start;
  transition: 0.5s ease;
  cursor: pointer;
  padding: 2.5%;
  flex-direction: column;
  &:hover {
    opacity: 100%;
  }
`;

const ImageUI = styled.img``;

const TitleUI = styled.div`
  font-weight: bold;
  font-size: 32px;
`;

const DescriptionUI = styled.div`
  font-size: 20px;
  font-weight: normal;
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
`;

const ProjectNameUI = styled.div`
  -webkit-text-stroke: 1px black;
  font-size: calc(48px + 3vw);
  color: transparent;
`;


export default function Projects({position, setHovering, dark}) {

  return (
    <ContainerUI>
      {projects.map((p) => (
        <Project key={p.name} p={p} dark={dark} position={position} setHovering={setHovering}/>
      ))}
    </ContainerUI>
  );
}
