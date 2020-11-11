module.exports = {
  projects: [
    {
      displayName: 'test',
      preset: 'ts-jest',
      testEnvironment: 'node',
      testMatch: [
        '<rootDir>/src/**/*.spec.ts',
        '<rootDir>/src/**/*.ispec.ts',
      ],
    },
    {
      runner: 'jest-runner-eslint',
      displayName: 'lint',
      testMatch: ['<rootDir>/src/**/*.ts'],
    },
  ],
};
