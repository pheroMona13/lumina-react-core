import React from "react";
import type { Preview } from "@storybook/react-webpack5";

import "../src/styles/general.scss";
import "../src/styles/colors.scss";
import "../src/styles/fonts.scss";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <div style={{ direction: "rtl" }}>
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
