import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

interface InputProps extends SpaceProps {

}

export const Input = styled.input<InputProps>`
  ${(props) => props.theme.inputs.input}

  ${space}
`;

Input.defaultProps = {
  p: 2,
};

export default Input;
