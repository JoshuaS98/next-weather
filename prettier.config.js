/** @type {import("prettier").Config} */
module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
  trailingComma: 'all',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  printWidth: 100,
  proseWrap: 'never',
  overrides: [
    {
      files: ['*.md', '*.mdx'],
      options: {
        printWidth: 80,
        proseWrap: 'always',
      },
    },
    {
      files: ['**/.changeset/*.md'],
      options: {
        proseWrap: 'never',
      },
    },
  ],
}
