module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/main/**/*',
    '!<rootDir>/src/presentation/components/router/**/*',
    '**/*d.ts',
    '!<rootDir>/src/**/index.ts',
    '!<rootDir>/src/main/config/**'
  ],
  coverageDirectory: 'coverage',
  testPathIgnorePatterns: [
    '!<rootDir>/node_modules/',
    '!<rootDir>/src/main/test/cypress'
  ],
  testEnvironment: 'jsdom',
  transform: {
    '.+\\.(tsx|ts)$': 'ts-jest'
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '\\.scss$': 'identity-obj-proxy'
  }
}
