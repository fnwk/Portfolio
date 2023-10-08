import {useEffect, useState} from 'react';
import styled from 'styled-components';
import useScrollStore from '@/stores/store';
import LogoSvg from '@/asstets/svg/Logo.svg';
import {useTheme} from 'styled-components';

const Header = () => {
  const styledTheme = useTheme() as any;
  const scroll = useScrollStore((state) => state.scroll);

  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    console.log(scroll);

    if (scroll < 1 / 3 + 0.05) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [scroll]);

  return (
    <StyledHeader theme={theme} data-testid="header">
      <LogoSvg
        className="logo"
        fill={theme == 'light' ? styledTheme.colors.darkBlue : 'white'}
      />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  width: 100%;
  z-index: 1000;
  padding-block: 20px;
  align-items: center;

  .logo {
    margin-inline: auto;
  }
`;

export default Header;
