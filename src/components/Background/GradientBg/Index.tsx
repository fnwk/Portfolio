import { useMemo, useRef } from "react";
import { Color, ShaderMaterial } from "three";
import { useFrame } from "@react-three/fiber";
import { useMask } from "@react-three/drei";
import { fragmentShader, vertexShader } from "../shader";

const GradientBg = () => {
  const material = useRef<ShaderMaterial>(null);

  // const colors = [0xd97090, 0xf0c67c, 0xc4d9df, 0xe9453b];
  const colors = [0xa9d2ff, 0x4694e8, 0x091836, 0x000821];
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColors: { value: colors.map((hexColor) => new Color(hexColor)) },
    }),
    []
  );

  useFrame(() => {
    if (material.current) {
      material.current.uniforms.uTime.value += 0.01;
    }
  });

  return (
    <mesh rotation={[-0.4, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[67, 67, 80, 80]} />

      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        ref={material}
      />
    </mesh>
  );
};

export default GradientBg;
