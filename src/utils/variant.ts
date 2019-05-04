import { Theme } from "..";

export default interface VariantProps<ThemeObjectKey extends keyof Theme> {
  variant?: keyof Theme[ThemeObjectKey];
}
