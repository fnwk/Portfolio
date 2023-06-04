import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  link: string;
}

const variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const Tile = ({ title, link }: Props) => {
  return (
    <Link href={link} legacyBehavior>
      <TileStyled variants={variants}>
        <Image src={`/images/mockups/mockup_${title}.webp`} alt="" fill />
      </TileStyled>
    </Link>
  );
};

const TileStyled = styled(motion.a)`
  position: relative;
  width: 70vw;
  height: 70vw;
  border-radius: 10px;
  overflow: hidden;
  margin-inline: auto;

  img {
    object-fit: contain;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    width: 25vw;
    height: 20vw;
  }
`;

export default Tile;
