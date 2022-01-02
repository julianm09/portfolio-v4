import styled from "styled-components";
import React, { useState, useRef, useEffect } from "react";
import { useSpring, a } from "react-spring";

const LoadingPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: black;
  z-index: 1000000;
`;

const LoaderUI = styled.div`
margin: 10px 0 0 0;
  width: 0px;
  height: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  z-index: 10000;
  animation: loader 0.9s linear forwards;
`;

export const Loader = ({ loading }) => {
  const transition = "0s cubic-bezier(0, 0.6, 1, 0)";

  const props = useSpring({
    config: { duration: 900 },

    from: { val: 0 },
    to: { val: 100 },
  });

  return (
    <div>
      <LoadingPage
        style={{
          transition: loading ? "0" : "1s cubic-bezier(0, 0.6, 1, 0)",
          left: loading ? "0" : "-100vw",
        }}
      >
        <a.div style={{ color: "white" }}>
          {props.val.to((val) => Math.floor(val))}
        </a.div>

        <LoaderUI></LoaderUI>
      </LoadingPage>
    </div>
  );
};
