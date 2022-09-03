module.exports = {
  '*.{js,jsx}': 'yarn lint:eslint',
  '*.{ts,tsx}': () => 'yarn lint',
};
