import styled from "styled-components";
import {
  SpaceProps, FontSizeProps, fontSize, space, ColorProps,
  color,
  backgroundColor, BackgroundColorProps,
} from "styled-system";
import pickClass from "../utils/pickClass";
import VariantProps from "../utils/variant";
import "vicui-core/styles/tag.pcss";

export interface TagProps extends SpaceProps, FontSizeProps, ColorProps, BackgroundColorProps,
  VariantProps<"normal" | "info"> {
}

export const Tag = pickClass(styled.span<TagProps>`
  && {
    ${fontSize}
    ${space}
    ${color}
    ${backgroundColor}
  }

`)("tag", (props) => props.variant);

Tag.defaultProps = {
  variant: "normal",
  fontSize: 0,
  p: 1,
};

export default Tag;
