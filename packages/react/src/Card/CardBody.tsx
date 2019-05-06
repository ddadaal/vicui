import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export interface CardBodyProps extends SpaceProps {

}

export const CardBody = styled.div<CardBodyProps>`
  flex: 1 1 auto;
  ${space}
`;

CardBody.defaultProps = {
  p: 3,
};

export default CardBody;
