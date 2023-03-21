import { useState } from "react";
import styled from "styled-components";

import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import Tile from "./Tile";
import { motion } from "framer-motion";

const projectsList = [
  {
    title: "Comptee",
  },
  {
    title: "Earth",
  },
  {
    title: "Walkwards",
  },
  {
    title: "Odzywieni",
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
    if (visible === false || scrollData.visible(0, 1 / 5)) {
      setVisible(scrollData.visible(1 / 3.7, 1));
    }
  });

  return (
    <>
      {visible && (
        <Container>
          <motion.div
            className="project-list"
            variants={variants}
            initial="initial"
            animate="animate"
          >
            {projectsList.map(({ title }, index) => (
              <Tile title={title} index={index} />
            ))}
          </motion.div>
          <Title>
            Selected <span>Works</span>
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
    padding-inline: 5vw;
    justify-content: space-around;
    align-items: baseline;
  }
`;

const Title = styled.h1`
  position: relative;
  margin: 70px auto;
  padding-top: 40px;
  font-size: 45px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.darkerBlue};

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    width: 120px;
    height: 8.4px;
    background-image: url("/images/curve.svg");
    background-repeat: no-repeat;
    background-size: cover;
  }

  span {
    font-family: "Arsenica Medium Italic";
    color: ${({ theme }) => theme.colors.darkBlue};
  }
`;

export default Projects;
