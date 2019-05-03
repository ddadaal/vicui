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
  background-color: ${(props) => props.theme.colors.card.bg};
  background-clip: border-box;
  border: 1px solid ${(props) => props.theme.colors.card.border};

  transition: all ${(props) => props.theme.animations.durations.fast} ease-in-out;

  ${space}
  ${maxWidth}

  &:hover {
    box-shadow: ${(props) => props.theme.colors.card.onHoverBoxShadow};

  }
`;

export default Card;
