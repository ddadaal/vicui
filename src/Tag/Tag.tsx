import styled from "styled-components";
import { SpaceProps, FontSizeProps, fontSize, space } from "styled-system";
import { Theme } from "../themes";

type PresetTagColor = keyof Theme["colors"]["tag"];

export interface TagColor {
  bg: string;
  hoverBg?: string;
  fontColor?: string;
}

interface Props extends SpaceProps, FontSizeProps {
  color?: PresetTagColor | TagColor;
}

function getColor(props: Props & { theme: Theme }): TagColor {
  if (typeof props.color === "string") {
    return props.theme.colors.tag[props.color];
  } else {
    return props.color!!;
  }
}

const Tag = styled.span<Props>`
  display: inline-block;
  
  background-color: ${(props) => getColor(props).bg};
  
  &:hover {
    background-color: ${(props) => getColor(props).hoverBg};
    text-decoration: none;
    cursor: normal;
  }
  
  transition: background-color 0.2s linear;

  color: ${(props) => getColor(props).fontColor};

  ${fontSize}
  ${space}
 
`;

Tag.defaultProps = {
  color: "normal",
  fontSize: "12px",
  p: "4px",
};

export default Tag;
