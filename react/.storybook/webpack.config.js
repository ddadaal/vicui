module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          presets: [require.resolve("babel-preset-react-app")]
        }
      },
      require.resolve("react-docgen-typescript-loader")
    ]
  }, {
      test: /\.pcss$/,
      use: [
        'style-loader',
        { loader: 'css-loader', options: { importLoaders: 1 } },
        {
          loader: 'postcss-loader', options: {
            plugins: [
              require("postcss-nested"),
              require("postcss-import"),
            ]
          }
        }
      ]
    });

  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
