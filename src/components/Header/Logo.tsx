import Image from "next/image";
import styled from "styled-components";

const Logo = () => {
  return (
    <LogoStyled
      src="/images/logo.svg"
      alt="Logo"
      width={150}
      height={50}
      layout="fixed"
    />
  );
};

const LogoStyled = styled(Image)`
  margin-inline: auto;
`;

export default Logo;
