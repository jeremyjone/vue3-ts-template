module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  testMatch: ['**/test/unit/**/?(*.)+(unit|test|spec).[jt]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.vue?$': 'vue-jest',
    '^.+\\.tsx$': 'ts-jest'
  },
  moduleNameMapper: {
    // 支持源代码中相同的 `@` -> `src` 别名
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx,vue}', '!**/node_modules/**']
  // coverageReporters: ["text", "text-summary", "html"],
};
