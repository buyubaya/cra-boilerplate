const path = require('path');
const CracoLessPlugin = require('craco-less');

module.exports = {
  webpack: {
    alias: {
      '@/components': path.resolve(__dirname, 'src/components'),
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
