import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export interface CardHeaderProps extends SpaceProps {

}

export const CardHeader = styled.div<CardHeaderProps>`
  margin-bottom: 0;
  background-color: ${(props) => props.theme.colors.card.header.bg};
  border-bottom: 1px solid ${(props) => props.theme.colors.card.header.bg};

  ${space}

`;

CardHeader.defaultProps = {
  px: 3,
  py: 2,
};

export default CardHeader;
