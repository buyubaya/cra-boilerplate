const path = require('path');
const CracoLessPlugin = require('craco-less');

module.exports = {
  webpack: {
    alias: {
      '@/components': path.resolve(__dirname, 'src/components'),
      '@/redux': path.resolve(__dirname, 'src/redux'),
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // modifyVars: { '@primary-color': '#74e99c' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
