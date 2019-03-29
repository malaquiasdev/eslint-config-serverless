module.exports = {
  collectCoverageFrom: [
    "src/**/*.js",
    "!src/config/index.js",
    "!src/functions/**/index.js",
    "!src/functions/**/handler.js"
  ]
};
