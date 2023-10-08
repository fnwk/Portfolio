import { useRef } from 'react';

import { Mesh } from 'three';
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const SolidBg = () => {
  const mesh = useRef<Mesh>(null!);
  const data = useScroll();

  useFrame(() => {
    const scale = data.range(1 / 3, 1 / 3) * 30;

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
