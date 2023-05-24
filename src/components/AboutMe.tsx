import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useState } from 'react';
import styled from 'styled-components';

const AboutMe = () => {
  const scrollData = useScroll();
  const [visible, setVisible] = useState(false);

  useFrame(() => {
    setVisible(scrollData.visible(1 / 5, 1));
  });

  return (
    <>
      {visible && (
        <Container>
          <Intro>HELLO</Intro>
          <Title>
            My name is <span>Filip</span>
          </Title>
          <Description>
            I&apos;m a frontend developer who specializes in creating visually
            stunning, immersive websites that leave a lasting impression.
            Whether you need a simple site or a complex e-commerce platform, I
            can bring your vision.
          </Description>
        </Container>
      )}
    </>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 8vh;
  margin-inline: 10vw;
  padding-block: 5vh;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.darkerBlue};
  text-align: center;
`;

const Intro = styled.p`
  border-bottom: 1px;
`;

const Title = styled.h1`
  position: relative;
  font-size: 25px;
  font-weight: 400;
  padding-top: 30px;
  margin-bottom: 45px;
  margin-inline: auto;

  span {
    font-family: 'Arsenica Medium Italic', serif;
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  ::after {
    content: '';
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    width: 60px;
    height: 4.2px;
    background-image: url('/images/curve.svg');
    background-repeat: no-repeat;
    background-size: cover;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    font-size: 50px;
  }
`;

const Description = styled.p`
  position: relative;
  width: 95%;
  margin: auto;
  padding-bottom: 40px;
  font-size: 13px;

  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) rotateX(180deg);
    display: block;
    width: 60px;
    height: 4.2px;
    background-image: url('/images/curve.svg');
    background-repeat: no-repeat;
    background-size: cover;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    font-size: 30px;
  }

  ${({ theme }) => theme.breakpoints.desktop} {
    width: 70%;
  }
`;

export default AboutMe;
