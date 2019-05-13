import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
import "./input.css";
import pickClass from "../utils/pickClass";
import { Box } from "../primitives";

interface InputProps extends SpaceProps {

}

export const Input = pickClass<InputProps>(Box)("input");

Input.defaultProps = {
  as: "input",
  p: 2,
};

export default Input;
