import { Canvas } from '@react-three/fiber';
import { ResizeObserver } from '@juggle/resize-observer';
import { ScrollControls, OrbitControls } from '@react-three/drei';

interface Props {
  children: React.ReactNode;
}

const CustomCanvas = ({ children }: Props) => {
  return (
    <Canvas
      flat
      dpr={[1, 2]}
      className="three-canvas"
      data-testid="three-canvas"
      camera={{
        fov: 70,
        position: [0, 0, 18],
      }}
      resize={{ polyfill: ResizeObserver }}>
      <ScrollControls eps={0.00000000000001} pages={3.7} damping={0.3}>
        {children}
      </ScrollControls>
    </Canvas>
  );
};

export default CustomCanvas;
