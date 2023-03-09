import { Scroll } from "@react-three/drei";

import Header from "@/components/Header/Index";
import Hero from "@/components/Hero/Index";
import Slogan from "@/components/Slogan";
import CustomCanvas from "@/components/CustomCanvas";
import Background from "@/components/Background/Index";
import AboutMe from "@/components/AboutMe";

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
