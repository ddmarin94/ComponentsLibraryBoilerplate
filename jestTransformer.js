const config = {
  presets: [
      '@babel/preset-env',
      '@babel/preset-react',
  ],
};

module.exports = require('babel-jest').createTransformer(config);