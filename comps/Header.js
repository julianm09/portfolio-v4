import styled from "styled-components";
import React, { useState, useRef, useEffect } from "react";
import { GitHub, Linkedin } from "react-feather";

const HeaderUI = styled.div`
  padding: 50px 0 0 0;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  width: 90%;
  top: 0;
  z-index: 1000;
`;

const LinkUI = styled.a`
  margin: 0 0 0 50px;
  cursor: pointer;
`;

export const Header = () => {
  return (
    <HeaderUI>
      <LinkUI target="_blank" href="https://github.com/julianmayes">
        <GitHub />
      </LinkUI>
      <LinkUI target="_blank" href="https://www.linkedin.com/in/julian-taigo-mayes-b27898134/">
        <Linkedin />
      </LinkUI>
    </HeaderUI>
  );
};
