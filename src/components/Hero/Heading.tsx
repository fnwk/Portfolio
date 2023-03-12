import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

interface Props {
  text: string;
  delay?: number;
}

const Banner = ({ text, delay }: Props) => {
  const heading = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 20,

        staggerChildren: 0.1,
      },
    },
  };

  const character = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.h1 variants={heading} initial="initial" animate="animate">
      {text.split("").map((char, index) => {
        return (
          <Character variants={character} key={index}>
            {char}
          </Character>
        );
      })}
    </motion.h1>
  );
};

const Character = styled(motion.span)`
  display: inline-block;
`;

export default Banner;
