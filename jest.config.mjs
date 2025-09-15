export default {
    testEnvironment: "jsdom",
    roots: ["<rootDir>/src"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
    transform: { "^.+\\.(t|j)sx?$": "babel-jest" },
    moduleNameMapper: {
      "\\.(css|less|sass|scss)$": "identity-obj-proxy",
      "\\.(png|jpg|jpeg|gif|svg)$": "<rootDir>/test/__mocks__/fileMock.js",
      "^@/(.*)$": "<rootDir>/src/$1"
    },
    setupFilesAfterEnv: ["<rootDir>/test/setupTests.ts"],
    testMatch: ["**/__tests__/**/*.(test|spec).{ts,tsx}", "**/*.(test|spec).{ts,tsx}"]
};
  