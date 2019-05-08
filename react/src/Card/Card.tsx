import styled from "styled-components";
import { space, SpaceProps, maxWidth, MaxWidthProps } from "styled-system";
import "vicui-core/styles/card.pcss";
import pickClass from "../utils/pickClass";

export interface CardProps extends SpaceProps, MaxWidthProps {

}

export const Card = pickClass(styled.div<CardProps>`
  ${space}
  ${maxWidth}
`)("card");

export default Card;
