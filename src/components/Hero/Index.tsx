import { Scroll } from "@react-three/drei";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import React from "react";
import styled from "styled-components";

import GradientBg from "./GradientBg/Index";
import NoisySphere from "./NoisySphere/Index";

const Hero = () => {
  return (
    <>
      <Scroll html>
        <Container>
          <Text>
            <h2>website</h2>
            <h1>DEVELOPER & DESIGNER</h1>
            <h3>Creating and designing innovative web applications</h3>
          </Text>
        </Container>
      </Scroll>

      <NoisySphere />
      <GradientBg />
      <EffectComposer>
        <Noise opacity={0.05} />
      </EffectComposer>
    </>
  );
};

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  z-index: 100;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  text-align: center;
  left: 50%;
  top: 40vh;
  transform: translate(-50%, -50%);
  z-index: 100;
  color: white;

  @media (min-width: 768px) {
    width: max-content;
  }

  h1 {
    font-family: "Arsenica Italic", serif;
    font-size: 10vw;
    letter-spacing: 0.18em;
    margin-bottom: 20px;

    @media (min-width: 768px) {
      font-size: 5vw;
    }

    ::before {
      content: "";
      display: block;
      width: 35%;
      margin-bottom: 2%;
      border-bottom: 1px solid white;
    }

    ::after {
      content: "";
      display: block;
      width: 35%;
      margin-left: auto;
      margin-top: 2%;
      border-bottom: 1px solid white;
    }
  }

  h2 {
    font-size: 4vw;
    font-weight: 200;
    font-style: italic;
    margin-right: auto;

    @media (min-width: 768px) {
      font-size: 2vw;
    }
  }

  h3 {
    font-weight: 200;
    font-style: italic;
    z-index: 100;
    font-size: 4vw;
    letter-spacing: 0.18em;

    @media (min-width: 768px) {
      font-size: 1.7vw;
    }
  }
`;

export default Hero;
