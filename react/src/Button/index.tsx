import styled from "styled-components";
import { space, SpaceProps, maxWidth, MaxWidthProps  } from "styled-system";
import "../../styles/button.css";

interface ButtonProps extends SpaceProps, MaxWidthProps {
  variant?: "default" | "primary";
}

export const Button = styled.div<ButtonProps>`

  ${space}

  ${space}
  ${maxWidth}
`;

Button.defaultProps = {
  variant: "default",
  p: 2,
  maxWidth: "200px",
};

export default Button;
