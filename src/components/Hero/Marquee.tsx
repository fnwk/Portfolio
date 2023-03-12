import { motion } from "framer-motion";
import styled from "styled-components";

interface Props {
  delay: number;
  children: React.ReactNode;
}

const Marquee = ({ delay, children }: Props) => {
  const marqueeVariants = {
    animate: {
      x: ["15%", "-100%"],
      transition: {
        delay,

        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <Container>
      <motion.div
        className="track"
        variants={marqueeVariants}
        animate="animate"
      >
        {children}
      </motion.div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 100%;
  height: 12vh;

  .track {
    position: absolute;
    top: 0;
    margin: 0;
    white-space: nowrap;
    padding: 0;
  }
`;

export default Marquee;
