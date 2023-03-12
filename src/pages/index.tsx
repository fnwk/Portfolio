import { Scroll } from "@react-three/drei";

import Header from "@/components/Header/Index";
import Hero from "@/components/Hero/Index";
import Slogan from "@/components/Slogan";
import AboutMe from "@/components/AboutMe";
import Background from "@/components/Background/Index";
import CustomCanvas from "@/components/CustomCanvas";

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
            <AboutMe />
          </Scroll>
        </CustomCanvas>
      </main>
    </>
  );
}
