import styled, { StyledComponent } from "styled-components";

const AboutMe = () => {
  return (
    <Container>
      <Intro>HELLO</Intro>
      <Heading>
        My name is <span>Filip</span>
      </Heading>
      <Description>
        I'm a frontend developer who specializes in creating visually stunning,
        immersive websites that leave a lasting impression. Whether you need a
        simple site or a complex e-commerce platform, I can bring your vision.
      </Description>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 30vh;
  margin-inline: 10vw;
  padding-block: 5vh;
  font-weight: 400;
  color: #1a3747;
  text-align: center;
`;

const Intro = styled.p`
  border-bottom: 1px;
`;

const Heading = styled.h1`
  font-size: 8vh;
  font-weight: 400;
  margin-bottom: 40px;
  margin-inline: auto;

  span {
    font-family: "Arsenica Medium Italic", serif;
  }
`;

const Description = styled.p`
  font-size: 3.5vh;
  width: 60%;
  margin: auto;
`;

export default AboutMe;
