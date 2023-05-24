import styled from 'styled-components';

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
  height: 60vh;
  width: 100vw;

  display: flex;
  align-items: center;
  font-weight: 200;

  ${({ theme }) => theme.breakpoints.tablet} {
    margin-top: 30vh;
  }
`;

const Heading = styled.h1`
  font-size: 9vw;
  font-weight: 200;
  font-style: italic;
  z-index: 100;
  width: 90%;
  text-align: center;
  margin-inline: auto;

  span {
    font-family: 'Arsenica Italic', serif;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    width: 50%;
    font-size: 4vw;
  }
`;

export default Slogan;
