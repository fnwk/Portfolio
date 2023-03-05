import { Canvas } from "@react-three/fiber";
import { ResizeObserver } from "@juggle/resize-observer";
import {
  ScrollControls,
  ScrollControlsProps,
  ScrollControlsState,
} from "@react-three/drei";
import { forwardRef, useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
}

const CustomCanvas = ({ children }: Props) => {
  return (
    <Canvas
      dpr={[1, 2]}
      className="three-canvas"
      data-testid="three-canvas"
      camera={{
        fov: 70,
        position: [0, 16, 0],
        rotation: [-Math.PI / 2, 0, 0],
      }}
      resize={{ polyfill: ResizeObserver }}
    >
      <ScrollControls pages={3} damping={0.3}>
        {children}
      </ScrollControls>
    </Canvas>
  );
};

export default CustomCanvas;
