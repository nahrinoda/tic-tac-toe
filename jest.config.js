const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  preset: 'ts-jest',
  coverageReporters: ['text', 'lcov', 'cobertura'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^lodash-es(.*)$': 'lodash$1',
  },
  testPathIgnorePatterns: ['/node_modules/', '/.netlify/'],
  coveragePathIgnorePatterns: ['/node_modules/', '/src/gql/'],
};

module.exports = createJestConfig(customJestConfig);
