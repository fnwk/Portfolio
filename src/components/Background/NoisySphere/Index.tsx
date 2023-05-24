import { Environment, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import { Color } from 'three';
import { ShaderMaterial } from 'three';
import { Mesh } from 'three/src/Three';
import { fragmentShader, sphereVertexShader } from '../shader';

type CustomShaderMesh = Mesh & { material: ShaderMaterial };

const NoisySphere = () => {
  const scrollData = useScroll();
  const mesh = useRef<CustomShaderMesh>(null!);

  const colors = [0xa9d2ff, 0x4694e8, 0x091836, 0x000821];
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColors: { value: colors.map((hexColor) => new Color(hexColor)) },
    }),
    []
  );

  useFrame(() => {
    mesh.current.material.uniforms.uTime.value += 0.01;
    mesh.current.position.y = scrollData.range(0, 1 / 6) * 2.7;
    mesh.current.position.y += scrollData.range(1 / 3, 1 / 2) * 80 - 2;
    mesh.current.position.z = scrollData.offset * -8 + 15;
  });

  return (
    <>
      <mesh ref={mesh} rotation={[0, 0, 0.5]} position={[0, -1, 15]}>
        <sphereGeometry args={[1.8, 60, 60]} />
        <shaderMaterial
          vertexShader={sphereVertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
        />
      </mesh>
    </>
  );
};

export default NoisySphere;
