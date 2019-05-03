import styled from "styled-components";
import { 
  space, width, fontSize, color, flex, order, alignSelf, 
  SpaceProps, WidthProps, FontSizeProps, ColorProps, FlexProps, OrderProps, AlignSelfProps,
} from "styled-system";

export interface BoxProps 
extends SpaceProps, WidthProps, FontSizeProps, ColorProps, FlexProps, OrderProps, AlignSelfProps { }

export const Box = styled.div<BoxProps>({
  boxSizing: "border-box",
},
  space,
  width,
  fontSize,
  color,
  flex,
  order,
  alignSelf,
);
