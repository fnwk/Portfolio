import { useRef } from "react";
import { Mask, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Color, Mesh } from "three";

const SolidBg = () => {
  const mesh = useRef<Mesh>(null!);
  const data = useScroll();

  useFrame(() => {
    const scale = data.range(1 / 5, 1 / 4) * 20;

    mesh.current.scale.x = scale;
    mesh.current.scale.y = scale;
  });

  return (
    <mesh ref={mesh} position={[0, -5, 16]}>
      <circleGeometry args={[1.5, 100]} />
      <meshBasicMaterial color={0xffffff} />
    </mesh>
  );
};

export default SolidBg;
