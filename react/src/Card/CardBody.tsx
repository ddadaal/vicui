import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
import "vicui-core/styles/card.pcss";
import pickClass from "../utils/pickClass";

export interface CardBodyProps extends SpaceProps {

}

export const CardBody = pickClass(styled.div<CardBodyProps>`
  flex: 1 1 auto;
  ${space}
`)("card__body");

CardBody.defaultProps = {
  p: 3,
};

export default CardBody;
