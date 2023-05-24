import styled from 'styled-components';
import { motion } from 'framer-motion';

import Marquee from './Marquee';
import Heading from './Heading';

const Hero = () => {
  const textVariants = {
    initial: {
      opacity: 0,
      x: -20,
    },
    animate: {
      x: 0,
      opacity: 1,

      transition: {
        delay: 0.5,
      },
    },
  };

  return (
    <Container>
      <TopRow>
        <motion.p variants={textVariants} initial="initial" animate="animate">
          Creative
        </motion.p>
        <Heading text="DEVELOPER" />
      </TopRow>
      <BottomRow>
        <p>
          Creating unique and innovative websites that stand out from the crowd.
        </p>
        <Marquee delay={1.5}>
          <Heading text="DESIGNER" delay={2.5} />
          <h1>DESIGNER</h1>
          <h1>DESIGNER</h1>
          <h1>DESIGNER</h1>
          <h1>DESIGNER</h1>
          <h1>DESIGNER</h1>
          <h1>DESIGNER</h1>
          <h1>DESIGNER</h1>
        </Marquee>
      </BottomRow>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  padding-top: 15vh;

  div {
    display: flex;
    width: 100%;
    padding-inline: 5vw;
    padding-block: 20px;
    letter-spacing: 0.09em;
    justify-content: space-between;

    h1 {
      font-weight: 700;
      font-size: 8vh;
    }

    p {
      font-weight: 200;
      font-size: 3vh;
    }

    ${({ theme }) => theme.breakpoints.tablet} {
      h1 {
        font-size: 12vh;
      }

      p {
        font-size: 3.5vh;
      }
    }
  }
`;

const TopRow = styled.div`
  flex-direction: column;

  h1 {
    margin-inline: auto;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    h1 {
      margin-inline: 0;
    }
  }
`;

const BottomRow = styled.div`
  display: flex;
  flex-direction: column-reverse;
  border-top: 1px solid rgba(255, 255, 255, 0.13);

  h1 {
    color: transparent;
    margin-inline: 5vw;
    -webkit-text-stroke: 2px white;
  }

  p {
    margin: auto;
    text-align: center;
    width: 95%;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    flex-direction: row;

    p {
      width: 50%;
      margin-inline: 0;
      text-align: left;
    }
  }
`;

export default Hero;
