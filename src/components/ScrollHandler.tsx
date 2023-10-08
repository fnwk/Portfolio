import useScrollStore from '@/stores/store';
import {useScroll} from '@react-three/drei';
import {useFrame} from '@react-three/fiber';

const ScrollHandler = () => {
  const scrollData = useScroll();
  const setScroll = useScrollStore((state) => state.setScroll);

  useFrame(() => {
    setScroll(scrollData.range(0, 1));
  });

  return <></>;
};

export default ScrollHandler;
