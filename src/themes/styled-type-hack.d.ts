import { Theme } from ".";

// hack into styled-components and change the DefaultTheme definition
declare module "styled-components" {
  interface DefaultTheme extends Theme {}
}
