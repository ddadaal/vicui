import styled from "styled-components";
import { space, SpaceProps, variant, maxWidth, MaxWidthProps  } from "styled-system";
import VariantProps from "../utils/variant";

const buttonVariant = variant({
  key: "buttons",
});

interface ButtonProps extends SpaceProps, MaxWidthProps, VariantProps<"buttons"> {

}

export const Button = styled.div<ButtonProps>`

  ${(props) => props.theme.buttons.common}

  user-select: none;

  transition: all 60ms ease-in-out;

  ${space}
  ${buttonVariant}
  ${maxWidth}
`;

Button.defaultProps = {
  variant: "default",
  p: 2,
  maxWidth: "200px",
};

export default Button;
