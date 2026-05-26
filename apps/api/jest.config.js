{
  "testEnvironment": "node",
  "testMatch": ["**/__tests__/**/*.ts", "**/?(*.)+(spec|test).ts"],
  "collectCoverageFrom": [
    "src/**/*.ts",
    "!src/**/*.d.ts",
    "!src/main.ts",
    "!src/**/index.ts"
  ],
  "coverageDirectory": "coverage",
  "coverageReporters": ["text", "lcov", "html"],
  "preset": "ts-jest",
  "globals": {
    "ts-jest": {
      "tsconfig": "tsconfig.json"
    }
  }
}