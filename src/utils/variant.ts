import { Theme } from "..";

export default interface VariantProps<ThemeObjectKey extends PropertyKey> {
  // @ts-ignore
  variant?: keyof Theme[ThemeObjectKey];
}
