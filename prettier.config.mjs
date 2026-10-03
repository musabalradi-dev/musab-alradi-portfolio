const config = {
  semi: true,

  singleQuote: false,

  trailingComma: "all",

  printWidth: 80,

  tabWidth: 2,

  useTabs: false,

  endOfLine: "lf",

  bracketSpacing: true,

  bracketSameLine: false,

  arrowParens: "always",

  quoteProps: "as-needed",

  jsxSingleQuote: false,

  plugins: ["prettier-plugin-tailwindcss"],

  tailwindFunctions: ["cn", "clsx", "cva"],
};

export default config;
