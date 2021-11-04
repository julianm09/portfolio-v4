import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

var lerp = require("lerp");

export default function Rocket({
  scrollTop,
  x = 0,
  y = 0,
  z = 0,
  rx = 0,
  ry = 0,
  rz = 0,
}) {
  const ref = useRef();

  useFrame(
    (state) => (
      //
      //pos x
      (ref.current.position.x = x),
      //
      //pos y
      (ref.current.position.y = lerp(
        ref.current.position.y,
        y + scrollTop * 0.05,
        0.03
      )),
      //
      //pos z
      (ref.current.position.z = z),
      //
      //rot x
      (ref.current.rotation.x = lerp(
        rx + ref.current.position.y * 0.5,
        5 + scrollTop * 0.05,
        0.006
      )),
      //
      //rot y
      (ref.current.rotation.y += 0.01 + ry),
      //
      //rot z
      (ref.current.rotation.z = 5)
    )
  );

  const group = useRef();
  const { nodes } = useGLTF("/rocket.glb");
  const { materials } = useGLTF("/star.glb");
  return (
    <group ref={group} dispose={null}>
      <mesh
        ref={ref}
        geometry={nodes.Circle003.geometry}
        material={materials["Material.001"]}
    
        position={[-0.03, 0.52, 0.79]}
        rotation={[1.3, -Math.PI / 2, 0]}
        scale={[0.19, 0.46, 0.19]}
      />
    </group>
  );
}

useGLTF.preload("/rocket.glb");
