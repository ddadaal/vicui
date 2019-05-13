import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
import pickClass, { WrapperComponentProps } from "../utils/pickClass";
import { Box } from "../primitives";

export interface CardBodyProps extends SpaceProps {

}

export const CardBody = pickClass<CardBodyProps>(Box)("card__body");

CardBody.defaultProps = {
  p: 3,
};

export default CardBody;
