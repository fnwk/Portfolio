import { EffectComposer, Noise } from "@react-three/postprocessing";
import BackgroundMask from "./BackgroundMask";

import GradientBg from "./GradientBg/Index";
import NoisySphere from "./NoisySphere/Index";

const Background = () => {
  return (
    <>
      <NoisySphere />
      <GradientBg />
      <BackgroundMask />
      <EffectComposer stencilBuffer>
        <Noise opacity={0.05} />
      </EffectComposer>
    </>
  );
};

export default Background;
