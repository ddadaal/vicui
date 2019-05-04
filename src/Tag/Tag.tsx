import styled from "styled-components";
import {
  SpaceProps, FontSizeProps, fontSize, space, ColorProps,
  color, variant,
  backgroundColor, BackgroundColorProps,
 } from "styled-system";
import VariantProps from "../utils/variant";

const tagVariant = variant({
  key: "tags",
});

export interface TagProps extends SpaceProps, FontSizeProps, ColorProps, BackgroundColorProps, VariantProps<"tags"> {
}

export const Tag = styled.span<TagProps>`
  display: inline-block;

  &:hover {
    opacity: 0.8;
    text-decoration: none;
    cursor: normal;
  }

  ${(props) => props.theme.animations.normalTransition}

  ${tagVariant}

  ${fontSize}
  ${space}
  ${color}
  ${backgroundColor}


`;

Tag.defaultProps = {
  variant: "normal",
  fontSize: 0,
  p: 1,
};

export default Tag;
