const config = {
  '*.{ts,tsx,js,css,json,md}': 'prettier --write',
  '*.{ts,tsx,js}': 'eslint',
  // '*.{ts,tsx}': 'bash -c "tsc --noEmit"',
};

module.exports = config;
