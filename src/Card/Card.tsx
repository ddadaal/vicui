import React from "react";
import styled from "styled-components";

interface Props {

}

const Card = styled.div<Props>`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: ${(props) => props.theme.color.white};
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,.125);

  transition: all .2s ease-in-out;

  &:hover {
    box-shadow: 0rem .2rem .4rem rgba(0,0,0,.3);
    margin-top: 16px;
  }
`;

export default Card;
