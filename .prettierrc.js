module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  endOfLine: 'auto',
  singleQuote: true,
  semi: true,
  trailingComma: 'all',
  arrowParens: 'always',
  importOrder: [
    '^(react/(.*)$)|^(react$)', // Import by "react"
    '^(next/(.*)$)|^(next$)', // Imports by "next"
    '<THIRD_PARTY_MODULES>',
    'next-seo.config',
    '^components/(.*)$',
    '^utils/(.*)$',
    '^assets/(.*)$',
    '^@fontsource/(.*)$',
    '^[./]', // Other imports
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  overrides: [
    {
      files: '*.json',
      options: {
        singleQuote: false,
      },
    },
    {
      files: '.*rc',
      options: {
        singleQuote: false,
        parser: 'json',
      },
    },
    {
      files: '.*rc.js',
      options: {
        singleQuote: false,
        parser: 'json',
      },
    },
  ],
};
