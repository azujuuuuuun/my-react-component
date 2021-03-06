module.exports = {
  addons: [
    "@storybook/addon-actions/register",
    "@storybook/addon-a11y/register",
    "@storybook/addon-docs",
  ],
  stories: ["../src/**/*.stories.[tj]sx"],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("ts-loader"),
          options: {
            compilerOptions: {
              declaration: false,
            },
          },
        },
        {
          loader: require.resolve("react-docgen-typescript-loader"),
        },
      ],
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
};
