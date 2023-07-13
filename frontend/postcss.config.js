module.exports = {
  plugins: [
    'postcss-preset-env',
    [
      '@fullhuman/postcss-purgecss',
      {
        content: [
          './src/pages/**/*.{js,jsx,ts,tsx}',
          './src/components/**/*.{js,jsx,ts,tsx}',
          './src/containers/**/*.{js,jsx,ts,tsx}',
        ],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],

        safelist: {
          standard: ['html', 'body', 'app', 'light', 'dark'],
          deep: [/initSpinner/, /^rdw/, /light/, /dark/],
        },
      },
    ],
  ],
};
