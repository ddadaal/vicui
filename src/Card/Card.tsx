import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

interface Props extends SpaceProps {

}

const Card = styled.div<Props>`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: ${(props) => props.theme.colors.card.bg};
  background-clip: border-box;
  border: 1px solid ${(props) => props.theme.colors.card.border};

  transition: all ${(props) => props.theme.animations.duration} ease-in-out;

  ${space}

  &:hover {
    box-shadow: ${(props) => props.theme.colors.card.onHoverBoxShadow};

  }
`;

export { Card };

export default Card;
