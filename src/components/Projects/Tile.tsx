import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";

interface Props {
  title: string;
  index: number;
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

const Tile = ({ title, index }: Props) => {
  const [RectSize, setRectSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (index === 0 || index === 3) {
      setRectSize({ width: 16, height: 19.52 });
    } else {
      setRectSize({ width: 19, height: 23.18 });
    }
  }, [index]);

  return (
    <Link href="" legacyBehavior>
      <TileStyled
        variants={variants}
        width={RectSize.width}
        height={RectSize.height}
      >
        <Image src={`/images/projects/${title}.webp`} alt="" fill />
      </TileStyled>
    </Link>
  );
};

interface StyledLinkProps {
  width: number;
  height: number;
}

const TileStyled = styled(motion.a)<StyledLinkProps>`
  position: relative;
  width: ${({ width }) => width}vw;
  height: ${({ height }) => height}vw;
  border-radius: 30px;
  overflow: hidden;
`;

export default Tile;
