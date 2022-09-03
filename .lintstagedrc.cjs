module.exports = {
  '*.{js,jsx}': 'npm run lint:eslint',
  '*.{ts,tsx}': () => 'npm run lint',
};
