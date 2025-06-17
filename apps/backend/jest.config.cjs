const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('../../tsconfig.json');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: './src',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/../../../',
  }),
  moduleFileExtensions: ['ts', 'js', 'json'],
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },

  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.spec.json',
    },
  },
};
