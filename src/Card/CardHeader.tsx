import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
import pickClass, { WrapperComponentProps } from "../utils/pickClass";
import { Box } from "../primitives";

export interface CardHeaderProps extends SpaceProps {

}

export const CardHeader = pickClass<CardHeaderProps>(styled(Box)<CardHeaderProps>`
`)("card__header");

CardHeader.defaultProps = {
  px: 3,
  py: 2,
};

export default CardHeader;
