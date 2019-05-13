import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
import "vicui-core/styles/card.pcss";
import pickClass from "../utils/pickClass";
import { Box } from "..";

export interface CardHeaderProps extends SpaceProps {

}

export const CardHeader = pickClass(styled(Box)<CardHeaderProps>`
`)("card__header");

CardHeader.defaultProps = {
  px: 3,
  py: 2,
};

export default CardHeader;
