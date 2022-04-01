import styled from "styled-components";
import React, { useState, useRef, useEffect } from "react";
import { GitHub, Linkedin, Sun, Moon, Menu, X } from "react-feather";
import Link from "next/link";
import useWindowSize from "../hooks/useWindowSize";     `           `
import { useRouter } from "next/router";

export const Header = ({ dark, setDark }) => {
  const [showMenu, setShowMenu] = useState(false);
  const window = useWindowSize();

  const router = useRouter();

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
    <>
      <HeaderUI>
        <LogoUI
          onKeyDown={(e) => handleKeyDown(e, `/#`)}
          onClick={(e) => handleClick(e, `/#`)}
          tabIndex={0}
          dark={dark}
        >
          Julian Mayes
        </LogoUI>

        <NavUI>
          <DesktopUI>
            <LinkUI
              onKeyDown={(e) => handleKeyDown(e, `/#work`)}
              onClick={(e) => handleClick(e, `/#work`)}
              tabIndex={0}
              dark={dark}
            >
              work
            </LinkUI>

            <LinkUI
              onKeyDown={(e) => handleKeyDown(e, `/#contact`)}
              onClick={(e) => handleClick(e, `/#contact`)}
              tabIndex={0}
              dark={dark}
            >
              contact
            </LinkUI>

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
              href="https://www.linkedin.com/in/julian-mayes-b27898134/"
            >
              <Linkedin size={16} />
            </LinkUI>
          </DesktopUI>

          <MobileUI dark={dark} onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? <X size={16} /> : <Menu size={16} />}
          </MobileUI>

          <DarkUI dark={dark} onClick={() => setDark(!dark)}>
            <DarkSwitchUI dark={dark}></DarkSwitchUI>
            <DarkSwitchEmojiUI dark={dark}>
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </DarkSwitchEmojiUI>
          </DarkUI>
        </NavUI>
      </HeaderUI>
      {showMenu ? (
        <MobileMenuUI dark={dark}>
          <Link href="/#work">
            <MobileLinkUI dark={dark} onClick={() => setShowMenu(false)}>
              work
            </MobileLinkUI>
          </Link>

          <Link href="/#contact">
            <MobileLinkUI dark={dark} onClick={() => setShowMenu(false)}>
              contact
            </MobileLinkUI>
          </Link>

          <MobileLinkUI
            dark={dark}
            target="_blank"
            href="https://github.com/julianmayes"
            onClick={() => setShowMenu(false)}
          >
            <GitHub size={16} />
          </MobileLinkUI>
          <MobileLinkUI
            dark={dark}
            target="_blank"
            href="https://www.linkedin.com/in/julian-mayes-b27898134/"
            onClick={() => setShowMenu(false)}
          >
            <Linkedin size={16} />
          </MobileLinkUI>
        </MobileMenuUI>
      ) : (
        <></>
      )}
    </>
  );
};

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
  z-index: 1000000;
`;

const LogoUI = styled.a`
  cursor: pointer;
  font-size: 16px;
  color: ${(props) => (props.dark ? "white" : "black")};
`;

const NavUI = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DarkUI = styled.button`
  border: 0;
  height: 25px;
  background: ${(props) => (props.dark ? "white" : "black")};
  width: 50px;
  margin: 0 0 0 50px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease;
  cursor: pointer;
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
  color: ${(props) => (props.dark ? "black" : "white")};
  width: 23px;
  position: absolute;
  left: ${(props) => (props.dark ? "1px" : "26px")};
  transition: 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinkUI = styled.a`
  margin: 0 0 0 50px;
  cursor: pointer;
  display: flex;
  color: ${(props) => (props.dark ? "white" : "black")};
`;

const DesktopUI = styled.div`
  display: flex;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const MobileUI = styled.div`
  display: none;
  cursor: pointer;
  color: ${(props) => (props.dark ? "white" : "black")};
  @media (max-width: 1000px) {
    display: flex;
  }
`;

const MobileMenuUI = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100000;
  width: 100vw;
  height: 100vh;
  background: ${(props) => (props.dark ? "black" : "white")};
  @media (max-width: 1000px) {
    display: flex;
    padding: 0px 5% 0 5%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const MobileLinkUI = styled.a`
  cursor: pointer;
  margin: 50px 0;

  color: ${(props) => (props.dark ? "white" : "black")};
`;
