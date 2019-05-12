import React from "react";
import "../../core/theme/light.css";
import { RenderFunction } from "@storybook/react";

export default (Story) => (context) => (props) => {
  return (
    <div className="theme-provider">
      <Story />
    </div>
  );
};
