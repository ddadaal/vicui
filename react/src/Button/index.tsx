import styled from "styled-components";
import { space, SpaceProps, maxWidth, MaxWidthProps } from "styled-system";
import "vicui-core/styles/button.pcss";
import pickClass from "../utils/pickClass";
import VariantProps from "../utils/variant";

export interface ButtonProps extends SpaceProps, MaxWidthProps,
  VariantProps<"default" | "primary"> {
}

export const Button = pickClass(styled.div<ButtonProps>`

  && {
    ${space}
    ${maxWidth}
  }

`)("btn", (props) => {
  return props.variant;
});

Button.defaultProps = {
  variant: "default",
  p: 2,
  maxWidth: "200px",
};

export default Button;
