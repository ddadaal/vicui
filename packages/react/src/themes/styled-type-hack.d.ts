import { Theme } from "../themes";

// hack into styled-components and change the DefaultTheme definition
declare module "styled-components" {
  interface DefaultTheme extends Theme {}
}
