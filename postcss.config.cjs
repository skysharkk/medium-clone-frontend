// eslint-disable-next-line import/no-extraneous-dependencies, @typescript-eslint/no-var-requires
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
    plugins: [postcssPresetEnv(
      {
        features: {
          'nesting-rules': true,
        }
      }
    )],
};
