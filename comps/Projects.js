import Head from "next/head";
import Image from "next/image";
import Scene from "./Scene";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import { useState, useEffect } from "react";

const ContainerUI = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-gap: 100px;
  @media (max-width: 1300px) {
    grid-template-columns: 2fr 2fr;
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

const VisitUI = styled.div`
  font-size: 16px;

  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const projects = [
  {
    name: "fakeplants",
    description:"I had the pleasure of working with nxtsndy on designing and developing their blog. The website was created using sanity as a content managment system.",
    image: "/nxtsndy.png",
    link: "https://www.nxtsndy.com/",
    stack: "next.js, sanity",
  },
  {
    name: "cdwil",
    description:
      "I had the pleasure of working for emily carr's career devlopment and work integrated learning office in developing their website.",
    image: "/cdwil.png",
    link: "https://cacto.ca/",
    stack: "threejs, html, css",
  },
  {
    name: "ecouture",
    description:
      "Ecouture is a interactive web app created to bring awarness to the sustainability of fast fashion.",
    image: "/ecouture.png",
    link: "https://www.ecouture.ca/",
    stack: "threejs, blender, nextjs",
  },
  {
    name: "lela",
    description: 'I had the pleasure of creating a logo, web design and developing a website for lela vietnamese.',
    image: "/lela.png",
    link: 'https://lelavietnamese.com/',
    stack: "nextjs, sanity, stripe",
  },
  {
    name: "fakeplants",
    description:
      "Fakeplants is a collection of 3D rendered plants created myself using Blender. The website was created using react.",
    image: "/fakeplants.png",
    link: "https://fakeplants.io/",
    stack: "react, blender",
  },
  {
    name: "cacto",
    description:
      "Cacto is an exercise in branding and design created for my design class using vanilla js and Three.js",
    image: "/cacto.png",
    link: "https://cacto.ca/",
    stack: "threejs, html, css",
  },
];

export default function Projects({}) {
  return (
    <ContainerUI>
      {projects.map((p) => (
        <GridItemUI key={p.name}>
          <ImageUI style={{ width: "100%" }} src={p.image} />
          <OverlayUI href={p.link} target="_blank">
            <DescriptionUI>{p.description}</DescriptionUI>
            <RowUI>
              <StackUI>technology used: {p.stack}</StackUI>
              <VisitUI>visit</VisitUI>
            </RowUI>
          </OverlayUI>
        </GridItemUI>
      ))}
    </ContainerUI>
  );
}
