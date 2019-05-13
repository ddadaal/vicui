import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
import "vicui-core/styles/card.pcss";
import pickClass from "../utils/pickClass";
import { Box } from "..";

export interface CardBodyProps extends SpaceProps {

}

export const CardBody = pickClass(styled(Box)<CardBodyProps>`
  flex: 1 1 auto;
`)("card__body");

CardBody.defaultProps = {
  p: 3,
};

export default CardBody;
