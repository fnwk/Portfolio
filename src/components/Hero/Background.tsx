import { ResizeObserver } from "@juggle/resize-observer";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Noise } from "@react-three/postprocessing";

import GradientBg from "./GradientBg/Index";
import NoisySphere from "./NoisySphere/Index";

const Background = () => {
  return (
    <Canvas
      dpr={[1, 2]}
      className="three-canvas"
      data-testid="three-canvas"
      camera={{ fov: 70, position: [0, 16, 0], rotation: [-Math.PI / 2, 0, 0] }}
      resize={{ polyfill: ResizeObserver }}
    >
      <GradientBg />
      <NoisySphere />
      <EffectComposer>
        <Noise opacity={0.05} />
      </EffectComposer>
    </Canvas>
  );
};

export default Background;
