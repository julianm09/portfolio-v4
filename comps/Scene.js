import ReactDOM from "react-dom";
import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Orange from "../public/Orange";
import Star from "../public/Star";
import Rocket from "../public/Rocket";

export default function Scene({ scrollTop }) {
  return (
    <Canvas
      style={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        top: 0,
        zIndex: -100,
        background: "#fffff",
      }}
    >
      <Suspense fallback={null}>
        <ambientLight />
        <pointLight position={[-10, -10, 10]} />
        <Star scrollTop={scrollTop} x={15} y={0} z={-15} rx={0} ry={0} rz={0} />
        <Star scrollTop={scrollTop} x={0} y={-20} z={-20} rx={0} ry={0} rz={0} />
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
