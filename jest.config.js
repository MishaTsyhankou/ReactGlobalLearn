module.exports = {
    roots: ['<rootDir>/src'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    testEnvironment: "jsdom",
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transform: {
      '^.+\\.(js|ts|tsx)$': [
        'babel-jest',
        {
          presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
        },
      ],
      '^.+\\.(scss|sass)$': 'jest-css-modules-transform',
      "^.+\\.svg$": "<rootDir>/svgTransform.js"
    },

  }