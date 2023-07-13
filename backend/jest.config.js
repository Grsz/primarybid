module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/'],
  testRegex: '.test.ts$',
  testTimeout: 30 * 1000,
  setupFilesAfterEnv: ['./test/jest-setup'],
  coverageReporters: ['text-summary', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 65,
      functions: 62,
      lines: 71,
      statements: 71,
    },
  },
};
