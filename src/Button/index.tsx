import styled from "styled-components";
import { space, SpaceProps, variant, maxWidth, MaxWidthProps  } from "styled-system";
import VariantProps from "../utils/variant";

const buttonVariant = variant({
  key: "buttons",
});

interface ButtonProps extends SpaceProps, MaxWidthProps, VariantProps<"buttons"> {

}

export const Button = styled.div<ButtonProps>`

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  ${(props) => props.theme.animations.normalTransition}

  ${space}
  ${buttonVariant}
  ${maxWidth}
`;

Button.defaultProps = {
  variant: "default",
  p: 1,
  maxWidth: "300px",
};

export default Button;
