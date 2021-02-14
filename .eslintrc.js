module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["prettier", "eslint:recommended"],
  parser: "babel-eslint",
  plugins: ["prettier"],
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "windows"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },
};
