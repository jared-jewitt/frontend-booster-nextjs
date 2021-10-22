require("chai").use(require("chai-as-promised"));

module.exports = {
  spec: ["tests/unit/**/*.spec.ts"],
  timeout: 10000,
  recursive: true,
  color: true,
  diff: true,
  parallel: true,
};
