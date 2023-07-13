module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/cypress/', '/dist/'],
  setupFilesAfterEnv: ['./scripts/jest-setup'],
  moduleNameMapper: {
    '\\.(scss|css)$': 'identity-obj-proxy', //Amplify UI import css file
  },
};
