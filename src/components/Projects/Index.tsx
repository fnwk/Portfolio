import {useState} from 'react';
import styled from 'styled-components';

import {useScroll} from '@react-three/drei';
import {useFrame} from '@react-three/fiber';

import Tile from './Tile';
import {motion} from 'framer-motion';

const projectsList = [
  {
    title: 'earth',
    link: 'https://github.com/fnwk/earth',
  },
  {
    title: 'walkwards',
    link: 'https://github.com/fnwk/walkwards.pl',
  },
  {
    title: 'odzywieni',
    link: 'https://github.com/fnwk/odzywieniwiedza.pl',
  },
];

const variants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 2,
      staggerChildren: 0.3,
    },
  },
};

const Projects = () => {
  const scrollData = useScroll();
  const [visible, setVisible] = useState(false);

  useFrame(() => {
    setVisible(scrollData.visible(0.5, 1));
  });

  return (
    <>
      {visible && (
        <Container>
          <motion.div
            className="project-list"
            variants={variants}
            initial="initial"
            animate="animate">
            {projectsList.map(({title, link}, index) => (
              <Tile title={title} link={link} key={index} />
            ))}
          </motion.div>
          <Title>
            SELECTED <span>WORKS</span>
          </Title>
        </Container>
      )}
    </>
  );
};

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-top: 15vh;

  .project-list {
    display: flex;
    flex-direction: column;
    padding-inline: 5vw;
    justify-content: space-around;
    align-items: baseline;

    ${({theme}) => theme.breakpoints.tablet} {
      flex-direction: row;
    }
  }
`;

const Title = styled.h1`
  position: relative;
  margin: 70px auto;
  padding-top: 0;
  font-size: 25px;
  font-weight: 700;
  color: ${({theme}) => theme.colors.darkerBlue};

  ::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(-120%, -40%);
    display: block;
    width: 20vw;
    height: 40px;
    background-image: url('/images/curve2.svg');
    background-repeat: no-repeat;
    background-size: cover;
  }

  ::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0%;
    transform: translate(120%, -40%) rotateY(180deg);
    display: block;
    width: 20vw;
    height: 40px;
    background-image: url('/images/curve2.svg');
    background-repeat: no-repeat;
    background-size: cover;
  }

  span {
    color: transparent;
    -webkit-text-stroke: 1px ${({theme}) => theme.colors.darkerBlue};
  }

  ${({theme}) => theme.breakpoints.tablet} {
    padding-top: 40px;
    font-size: 45px;
  }
`;

export default Projects;
