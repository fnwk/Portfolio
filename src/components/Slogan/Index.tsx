import styled from "styled-components";

const Slogan = () => {
  return (
    <Container>
      <Heading>
        Transforming <span>visions</span> into <span>digital</span> reality
      </Heading>
    </Container>
  );
};

const Container = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  font-weight: 200;
`;

const Heading = styled.h1`
  font-size: 4vw;
  font-weight: 200;
  font-style: italic;
  z-index: 100;
  color: white;
  width: 50%;
  text-align: center;
  margin-inline: auto;

  span {
    font-family: "Arsenica Italic", serif;
  }
`;

export default Slogan;
