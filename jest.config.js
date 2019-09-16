module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'js'],
  testMatch: ['**/src/**/*.test.(ts|js)'],
  testEnvironment: 'node'
};
