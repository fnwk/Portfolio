import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      darkBlue: string;
      darkerBlue: string;
    };
  }
}
