import React from "react";
import styled from "styled-components";

interface Props {

}

const CardHeader = styled.div<Props>`
  padding: .75rem 1.25rem;
  margin-bottom: 0;
  background-color: rgba(0,0,0,.03);
  border-bottom: 1px solid rgba(0,0,0,.125);
`;

export default CardHeader;
