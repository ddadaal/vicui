import styled from "styled-components";
import {
  space, width, fontSize, color, flex, order, alignSelf,
  SpaceProps, WidthProps, FontSizeProps, ColorProps, FlexProps, OrderProps, AlignSelfProps,
  display, DisplayProps, maxWidth, MaxWidthProps
} from "styled-system";

export interface BoxProps
  extends DisplayProps, SpaceProps, WidthProps, FontSizeProps,
  ColorProps, FlexProps, OrderProps, AlignSelfProps, MaxWidthProps { }

export const Box = styled.div<BoxProps>({
  boxSizing: "border-box",
},
  display,
  space,
  width,
  fontSize,
  color,
  flex,
  order,
  alignSelf,
  maxWidth,
);
