import React from "react";

const VU_PREFIX = "vu-";

export function addClasses(baseClassName: string, modifier?: string, other?: string) {
  return [baseClassName, modifier, other].filter((x) => x).join(" ");
}

export interface HasClassname {
  className?: string;
}

export default function pickClass<Props extends { className?: string }>(
  WrapperComponent: React.ComponentType<Props> | string,
) {
  return (
    baseClassName: string,
    getModifier: (props: Props) => string | undefined = () => undefined,
  ) => {
    const prefixedClassName = VU_PREFIX + baseClassName;

    const NewComponent: typeof WrapperComponent = (props: Props) => {

      return (
        <WrapperComponent
          {...props}
          className={addClasses(
            prefixedClassName,
            getModifier(props),
            props.className,
          )}
        />
      );
    };

    return NewComponent;
  };
}
