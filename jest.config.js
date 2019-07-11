module.exports = {
  verbose: true,
  clearMocks: true,
  collectCoverage: true,
  setupFilesAfterEnv: [
    "@testing-library/react/cleanup-after-each",
    "<rootDir>/setupTest.js"
  ],
  transform: {
    "^.+\\.js$": "babel-jest"
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js"
  }
};
