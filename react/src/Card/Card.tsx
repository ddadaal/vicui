import styled from "styled-components";
import { space, SpaceProps, maxWidth, MaxWidthProps } from "styled-system";
import "vicui-core/styles/card.pcss";
import pickClass from "../utils/pickClass";
import { Box } from "../primitives";

export interface CardProps extends SpaceProps, MaxWidthProps {

}

export const Card = pickClass(styled(Box)<CardProps>`

`)("card");

export default Card;
