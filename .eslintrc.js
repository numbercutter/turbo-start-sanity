// This configuration only applies to the package manager root.
/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@typescript-eslint/parser"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
