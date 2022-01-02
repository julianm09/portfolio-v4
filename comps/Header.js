import styled from "styled-components";
import React, { useState, useRef, useEffect } from "react";
import { GitHub, Linkedin } from "react-feather";
import Link from "next/link";

const HeaderUI = styled.div`
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 100000;
`;

const LogoUI = styled.div`
  cursor: pointer;
  font-size: 16px;
  color: ${(props) => (props.dark ? "white" : "black")};
`;

const NavUI = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DarkUI = styled.div`
  height: 25px;
  background: ${(props) => (props.dark ? "white" : "black")};
  width: 50px;
  margin: 0 0 0 50px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease;
`;
const DarkSwitchUI = styled.div`
  height: 23px;
  background: ${(props) => (props.dark ? "black" : "white")};
  width: 23px;
  position: absolute;
  left: ${(props) => (props.dark ? "26px" : "1px")};
  transition: 0.3s ease;
`;

const DarkSwitchEmojiUI = styled.div`
  height: 23px;
  background: ${(props) => (props.dark ? "white" : "black")};
  width: 23px;
  position: absolute;
  left: ${(props) => (props.dark ? "1px" : "26px")};
  transition: 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const LinkUI = styled.a`
  margin: 0 0 0 50px;
  cursor: pointer;

  color: ${(props) => (props.dark ? "white" : "black")};
`;

export const Header = ({ dark, setDark }) => {
  return (
    <HeaderUI>
      <Link href="/">
        <LogoUI dark={dark}>Julian Mayes</LogoUI>
      </Link>

      <NavUI>
        <LinkUI
          dark={dark}
          target="_blank"
          href="https://github.com/julianmayes"
        >
          <GitHub size={16} />
        </LinkUI>
        <LinkUI
          dark={dark}
          target="_blank"
          href="https://www.linkedin.com/in/julian-taigo-mayes-b27898134/"
        >
          <Linkedin size={16} />
        </LinkUI>

        <DarkUI dark={dark} onClick={() => setDark(!dark)}>
          <DarkSwitchUI dark={dark}></DarkSwitchUI>
          <DarkSwitchEmojiUI dark={dark}>
            {dark ? "☀️" : "🌑"}
          </DarkSwitchEmojiUI>
        </DarkUI>
      </NavUI>
    </HeaderUI>
  );
};
