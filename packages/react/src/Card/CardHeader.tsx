import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export interface CardHeaderProps extends SpaceProps {

}

export const CardHeader = styled.div<CardHeaderProps>`
  margin-bottom: 0;
  ${(props) => props.theme.cards.header}

  ${space}

`;

CardHeader.defaultProps = {
  px: 3,
  py: 2,
};

export default CardHeader;
