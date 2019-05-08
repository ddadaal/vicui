import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
import "vicui-core/styles/input.pcss";
import pickClass from "../utils/pickClass";

interface InputProps extends SpaceProps {

}

export const Input = pickClass(styled.input<InputProps>`
  ${space}
`)("input");

Input.defaultProps = {
  p: 2,
};

export default Input;
