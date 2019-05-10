import styled from "styled-components";
import {
  fontWeight,
  borders,
  borderColor,
  borderRadius,
  FontWeightProps,
  BordersProps,
  BorderColorProps,
  BorderRadiusProps,
} from "styled-system";
import "vicui-core/styles/button.pcss";
import pickClass from "../utils/pickClass";
import VariantProps from "../utils/variant";
import { BoxProps, Box } from "..";

export interface ButtonProps extends BoxProps, FontWeightProps, BordersProps, BorderColorProps, BorderRadiusProps,
  VariantProps<"default" | "primary"> {
}

export const Button = pickClass(styled(Box) <ButtonProps>`

  && {
    ${fontWeight}
    ${borders}
    ${borderColor}
    ${borderRadius}
  }

`)("btn", (props) => {
  return props.variant;
});

Button.defaultProps = {
  as: "button",
  variant: "default",
  p: 2,
};

export default Button;
