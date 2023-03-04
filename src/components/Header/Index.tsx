import { useEffect, useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";

const Header = () => {
  const [isOnTop, setIsOnTop] = useState(true);

  const scrollHandler = () => {
    setIsOnTop(window.scrollY <= 0);
  };

  useEffect(() => {
    addEventListener("scroll", scrollHandler);

    return () => removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <StyledHeader isOnTop={isOnTop} data-testid="header">
      <Logo />
    </StyledHeader>
  );
};

interface StyledHeaderProps {
  isOnTop: boolean;
}

const StyledHeader = styled.header<StyledHeaderProps>`
  position: fixed;
  display: flex;
  width: 100%;
  z-index: 1000;

  background: ${({ isOnTop }) =>
    isOnTop ? "transparent" : "rgba(0, 8, 33, 0.1)"};
  backdrop-filter: blur(${({ isOnTop }) => (isOnTop ? 0 : 8)}px);
  padding-block: ${({ isOnTop }) => (isOnTop ? 4 : 1)}vh;
  transition: all 0.3s ease-in-out;
`;

export default Header;
