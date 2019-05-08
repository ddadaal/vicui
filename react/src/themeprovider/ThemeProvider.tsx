import "vicui-core/styles/theme/default.pcss";
import "vicui-core/styles/theme/dark.pcss";
import pickClass from "../utils/pickClass";

interface Props {
  dark?: boolean;
}

export const ThemeProvider = pickClass("div")("theme", (props: Props) => {
  return props.dark ? "dark" : undefined;
});

ThemeProvider.defaultProps = {
  dark: false,
};

export default ThemeProvider;
