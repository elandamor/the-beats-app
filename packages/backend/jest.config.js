module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/generated/*.{js,jsx,ts,tsx}"
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "json", "node"],
  roots: ["<rootDir>/src"]
};
