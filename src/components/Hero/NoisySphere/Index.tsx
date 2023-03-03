import noise from "@/common/noise";
import { Environment, Lightformer, Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useCallback, useRef } from "react";
import { Color } from "three";
import { MeshPhysicalMaterial, ShaderMaterial } from "three";

const NoisySphere = () => {
  const material = useRef<MeshPhysicalMaterial>(null!);

  useFrame(() => {
    if (material.current) {
      material.current.userData.uTime.value += 0.01;
      console.log(material.current.userData.uTime);
    }
  });

  const onBeforeCompile = useCallback((shader: any) => {
    shader.uniforms.uTime = material.current.userData.uTime;

    const base =
      `
      ${noise}    
      uniform float uTime;
    ` + shader.vertexShader;

    const vertexShader = `
      float noise = snoise(vec3(normal.xy * 2., uTime)) * 0.3;
      vec3 pos = position + (normal * noise);

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    `;

    shader.vertexShader = base.replace(
      `#include <worldpos_vertex>`,
      vertexShader
    );
  }, []);

  return (
    <>
      <mesh rotation={[-Math.PI / 2 + 0.2, 0, 0]} position={[0, 13, 2]}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshPhysicalMaterial
          ref={material}
          metalness={1}
          roughness={0.7}
          onBeforeCompile={onBeforeCompile}
          userData={{ uTime: { value: 0 } }}
        />
      </mesh>
      <Environment>
        <Lightformer
          position={[-5, -3, -1]}
          scale={[20, 2.5, 1]}
          intensity={4.5}
          color={new Color(0x4694e8)}
        />
      </Environment>
    </>
  );
};

export default NoisySphere;
