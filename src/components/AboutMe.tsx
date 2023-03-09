import styled from "styled-components";

const AboutMe = () => {
  return (
    <Container>
      <Heading>
        Hello, my name is <span>Filip</span>
      </Heading>
      <Description>
        I'm a frontend developer with a passion for creating unique and visually
        stunning websites. My focus is on creating websites that are not only
        functional, but also engaging and memorable. I specialize in adding
        unusual effects and 3D elements to my designs, to create a truly
        immersive user experience. My goal is to create websites that stand out
        from the crowd and leave a lasting impression on visitors. Whether
        you're looking for a simple brochure site or a more complex e-commerce
        platform, I can help bring your vision to life.
      </Description>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-inline: 10vw 20vw;
  padding-left: 3vw;
  padding-block: 5vh;
  font-weight: 200;

  border-left: 1px solid white;
`;

const Heading = styled.h1`
  font-size: 8vh;
  font-weight: 200;
  margin-bottom: 40px;

  span {
    font-family: "Arsenica Medium Italic", serif;
  }
`;

const Description = styled.p`
  font-size: 3.5vh;
`;

export default AboutMe;
