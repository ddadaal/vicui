import styled from "styled-components";
import { space, SpaceProps, maxWidth, MaxWidthProps } from "styled-system";
import pickClass, { WrapperComponentProps } from "../utils/pickClass";
import { Box } from "../primitives";
import React from "react";

export interface CardProps extends SpaceProps, MaxWidthProps {

}

export const Card = pickClass<CardProps>(Box)("card");

export default Card;
