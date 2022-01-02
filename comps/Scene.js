import ReactDOM from "react-dom";
import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Orange from "../public/Orange";
import Star from "../public/Star";
import Rocket from "../public/Rocket";
import useWindowSize from "../hooks/useWindowSize";
import { PerspectiveCamera, Stars } from "@react-three/drei";

export default function Scene({ scrollTop, position, dark }) {
  const windowSize = useWindowSize();

  return (
    <Canvas
      style={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        top: 0,
        zIndex: -100,
        background: dark ? "black" : "white",
      }}
    >
      <Suspense fallback={null}>
        <PerspectiveCamera
          fov={75}
          makeDefault
          rotation={
            windowSize.width > 500
              ? [
                  0.1 + -position.y / windowSize.height / 10,
                  0.25 + -position.x / windowSize.width / 10,
                  0,
                ]
              : [0, 0, 0]
          }
          position={windowSize.width > 500 ? [0, 0, 5] : [0, 0, 10]}
        />
        <ambientLight intensity={1} color={dark ? "blue" : "grey"} />
        <pointLight intensity={1} color={"white"} position={[10, 10, 10]} />
        <pointLight intensity={1} color={dark ? "pink" : "white"} position={[-100, -100, -10]} />

        {dark ? (
          <Stars
            color="black"
            radius={100}
            depth={100}
            count={1000}
            factor={4}
            saturation={0}
          />
        ) : (
          <></>
        )}
        <Star scrollTop={scrollTop} x={15} y={0} z={-15} rx={0} ry={0} rz={0} />
        <Star
          scrollTop={scrollTop}
          x={0}
          y={-20}
          z={-20}
          rx={0}
          ry={0}
          rz={0}
        />
        <Star
          scrollTop={scrollTop}
          x={-15}
          y={-35}
          z={-15}
          rx={0}
          ry={0}
          rz={0}
        />
        <Star
          scrollTop={scrollTop}
          x={10}
          y={-40}
          z={-5}
          rx={0}
          ry={0}
          rz={0}
        />
        <Star
          scrollTop={scrollTop}
          x={5}
          y={-60}
          z={-25}
          rx={0}
          ry={0}
          rz={0}
        />
        <Star
          scrollTop={scrollTop}
          x={5}
          y={-100}
          z={-25}
          rx={0}
          ry={0}
          rz={0}
        />
        <Star
          scrollTop={scrollTop}
          x={-10}
          y={-140}
          z={-20}
          rx={0}
          ry={0}
          rz={0}
        />

        <Star
          scrollTop={scrollTop}
          x={-scrollTop / 8 + 600}
          y={-250}
          z={-50}
          rx={0}
          ry={0}
          rz={0}
        />
        <Rocket
          scrollTop={scrollTop}
          x={0}
          y={-scrollTop / 20}
          z={0}
          rx={0}
          ry={0}
          rz={0}
        />
      </Suspense>
    </Canvas>
  );
}
