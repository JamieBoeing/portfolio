const path = require('path');
const NodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env) => {
  return {
    entry: {
      server: './src/server.js', // Replace with your actual server entry point
    },
    output: {
      path: path.resolve(__dirname, 'dist'), // Output directory for server code
      filename: 'server.js',
    },
    target: 'node',
    node: {
      __dirname: false,
    },
    externals: [NodeExternals()],
    module: {
      rules: [
        // Include any necessary server-specific rules
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      // Include any necessary server-specific plugins
    ],
  };
};
