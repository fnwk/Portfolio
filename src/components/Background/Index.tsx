import { EffectComposer, Noise } from "@react-three/postprocessing";

import SolidBg from "./SolidBg";
import GradientBg from "./GradientBg/Index";
import NoisySphere from "./NoisySphere/Index";

const Background = () => {
  return (
    <>
      <NoisySphere />
      <GradientBg />
      <SolidBg />
      <EffectComposer>
        <Noise opacity={0.05} />
      </EffectComposer>
    </>
  );
};

export default Background;
