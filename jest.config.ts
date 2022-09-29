const tsPreset = require("ts-jest/jest-preset");

export default {
  ...tsPreset,
  rootDir: '.',
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/src/$1",
    "^~config$": "<rootDir>/config",
  },
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
};
