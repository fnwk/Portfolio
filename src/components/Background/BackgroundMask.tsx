import { useRef } from "react";
import { Mask, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

const BackgroundMask = () => {
  const mesh = useRef<Mesh>(null!);
  const data = useScroll();

  useFrame(() => {
    const scale = data.range(1 / 5, 1 / 4) * 30;

    mesh.current.scale.x = scale;
    mesh.current.scale.y = scale;
  });

  return (
    <Mask ref={mesh} id={1} position={[0, -5, 12]}>
      <circleGeometry args={[1.5, 40]} />
    </Mask>
  );
};

export default BackgroundMask;
