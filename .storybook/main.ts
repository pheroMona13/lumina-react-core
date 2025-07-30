import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-webpack5-compiler-swc", "@storybook/addon-docs"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async (config) => {
    config.module?.rules?.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: /src/,
    });

    const assetRule = config.module?.rules?.find(
      (rule) =>
        typeof rule !== "string" &&
        rule &&
        rule.test instanceof RegExp &&
        rule.test.test(".svg")
    );

    if (assetRule && typeof assetRule !== "string") {
      assetRule.exclude = /\.svg$/;
    }

    config.module?.rules?.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true,
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: "removeViewBox",
                  active: false,
                },
                {
                  name: "removeAttrs",
                  params: {
                    attrs: "(fill)",
                  },
                },
                // Add other plugins as needed
              ],
            },
          },
        },
      ],
    });

    return config;
  },
};
export default config;
