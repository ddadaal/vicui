import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

interface Props extends SpaceProps {

}

const CardBody = styled.div<Props>`
  flex: 1 1 auto;
  padding: 20px;

  ${space}
`;

export default CardBody;
