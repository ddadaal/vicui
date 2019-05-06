import React from "react";
import "../../core/theme/light.css";
import { RenderFunction } from "@storybook/react";

export default (story: RenderFunction) => (context) => (props) => {
  return (
    <div className="theme-provider">
      {story()}
    </div>
  );
};
