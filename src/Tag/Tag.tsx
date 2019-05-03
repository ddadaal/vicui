import styled from "styled-components";
import { SpaceProps, FontSizeProps, fontSize, space } from "styled-system";
import { Theme } from "../themes";

type PresetTagColor = keyof Theme["colors"]["tag"];

export interface TagColor {
  bg: string;
  hoverBg?: string;
  fontColor?: string;
}

export interface TagProps extends SpaceProps, FontSizeProps {
  color?: PresetTagColor | TagColor;
}

function getColor(props: TagProps & { theme: Theme }): TagColor {
  if (typeof props.color === "string") {
    return props.theme.colors.tag[props.color];
  } else {
    return props.color!!;
  }
}

export const Tag = styled.span<TagProps>`
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
  fontSize: 0,
  p: "4px",
};

export default Tag;
