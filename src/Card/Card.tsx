import styled from "styled-components";
import { space, SpaceProps, maxWidth, MaxWidthProps } from "styled-system";

export interface CardProps extends SpaceProps, MaxWidthProps {

}

export const Card = styled.div<CardProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;

  ${(props) => props.theme.cards.card};

  ${space}
  ${maxWidth}



`;

export default Card;
