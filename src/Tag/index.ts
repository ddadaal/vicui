import styled from "styled-components";
import {
  SpaceProps, FontSizeProps, fontSize, space, ColorProps,
  color,
  backgroundColor, BackgroundColorProps,
} from "styled-system";
import pickClass from "../utils/pickClass";
import VariantProps from "../utils/variant";
import "./tag.css";
import { BoxProps, Box } from "../primitives";

export interface TagProps extends BoxProps,
  VariantProps<"normal" | "info"> {
}

export const Tag = pickClass<TagProps>(Box)("tag", (props) => props.variant);

Tag.defaultProps = {
  variant: "normal",
  fontSize: 0,
  p: 1,
  as: "span",
};

export default Tag;
