import { Scroll } from "@react-three/drei";

import theme from "@/styles/theme";
import { ThemeProvider } from "styled-components";

import Header from "@/components/Header/Index";
import Hero from "@/components/Hero/Index";
import Slogan from "@/components/Slogan";
import AboutMe from "@/components/AboutMe";
import Background from "@/components/Background/Index";
import CustomCanvas from "@/components/CustomCanvas";
import Projects from "@/components/Projects/Index";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <CustomCanvas>
          <Background />
          <Scroll html>
            <ThemeProvider theme={theme}>
              <Hero />
              <Slogan />
              <AboutMe />
              <Projects />
            </ThemeProvider>
          </Scroll>
        </CustomCanvas>
      </main>
    </>
  );
}
