import React from "react";

const VU_PREFIX = "vu-";

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
          className={[
            prefixedClassName,
            getModifier(props),
            props.className,
          ].filter((x) => x).join(" ")}
        />
      );
    };

    return NewComponent;
  };
}
