import { useMemo, useRef } from "react";
import { Color, Mesh, ShaderMaterial } from "three";
import { useFrame } from "@react-three/fiber";
import { fragmentShader, vertexShader } from "../shader";
import { useScroll } from "@react-three/drei";

type CustomShaderMesh = Mesh & { material: ShaderMaterial };

const Wave = () => {
   const scrollData = useScroll();

  const mesh = useRef<CustomShaderMesh>(null);

  const colors = [0xa9d2ff, 0x4694e8, 0x091836, 0x000821];
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColors: { value: colors.map((hexColor) => new Color(hexColor)) },
    }),
    []
  );

  useFrame(() => {
    if (!mesh.current) return 

    mesh.current.material.uniforms.uTime.value += 0.01;
    mesh.current.material.uniforms.uTime.value += 0.01;
    mesh.current.position.y = scrollData.range(0, 1 / 6) * 2.7;
    mesh.current.position.y += scrollData.range(1 / 3, 1 / 2) * 80 - 2;
    mesh.current.position.z = scrollData.offset * -8 + 15;
  });

  return (
    <mesh ref={mesh} rotation={[1, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[67, 67, 80, 80]} />

      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>)
}

export default Wave;
