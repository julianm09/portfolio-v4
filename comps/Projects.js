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

export default function Projects({position, setHovering, dark}) {

  return (
    <ContainerUI>
      
      {projects.map((p) => (
        <Project key={p.name} p={p} dark={dark} position={position} setHovering={setHovering}/>
      ))}
    </ContainerUI>
  );
}
