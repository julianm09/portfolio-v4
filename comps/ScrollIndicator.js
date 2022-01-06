import styled from "styled-components";
import React, { useState, useRef, useEffect } from "react";
import {
  GitHub,
  Linkedin,
  Sun,
  Moon,
  Menu,
  X,
  ArrowDown,
  ArrowDownCircle,
  ChevronsDown,
} from "react-feather";
import Link from "next/link";
import useWindowSize from "../hooks/useWindowSize";
import useScrollTop from "../hooks/useScrollTop";

const HeaderUI = styled.div`
  padding: 0 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 0;
`;

const ScrollIndicatorUI = styled.div`
  animation: scrollindicator 2s ease infinite;
  color: ${props => props.dark ? 'white' : 'black'}
`;

export const ScrollIndicator = ({ dark, setDark }) => {
  const [showMenu, setShowMenu] = useState(false);
  const scrollTop = useScrollTop();

  return (
    <>
      {scrollTop < 100 ? (
        <HeaderUI>
          <ScrollIndicatorUI dark={dark}>
            <ChevronsDown />
          </ScrollIndicatorUI>
        </HeaderUI>
      ) : (
        <></>
      )}
    </>
  );
};
