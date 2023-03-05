import { Scroll } from "@react-three/drei";

import Header from "@/components/Header/Index";
import Hero from "@/components/Hero/Index";
import Slogan from "@/components/Slogan/Index";
import CustomCanvas from "@/components/CustomCanvas";
import Background from "@/components/Background/Index";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <CustomCanvas>
          <Background />
          <Scroll html>
            <Hero />
            <Slogan />
          </Scroll>
        </CustomCanvas>
      </main>
    </>
  );
}
