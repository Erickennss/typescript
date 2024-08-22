// module.exports = {
//   preset: "ts-jest",
//   testEnvironment: "node",
//   moduleFileExtensions: ["ts", "js"],
//   testMatch: ["**/*.test.(ts|js)"],
// };
module.exports = {
  roots: ["<rootDir>/src"],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
