import styled, { css } from "styled-components";

import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/shopping-bag.svg";

const flexStyle = css`
  display: flex;
  align-items: center;
`;

const HeaderStyled = styled.div`
  justify-content: space-between;
  padding: 2rem 1rem;
  ${flexStyle}
`;

const OptionStyled = styled.li`
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  ${flexStyle}
`;

const LogoStyled = styled(Logo)`
  height: 100%;
  width: 100%;
`;

const LinkStyled = styled(Link)`
  height: 4rem;
  width: 4rem;
`;

const OptionsStyled = styled.ul`
  display: flex;
  position: relative;
`;



export { HeaderStyled, LogoStyled, LinkStyled, OptionsStyled, OptionStyled };
