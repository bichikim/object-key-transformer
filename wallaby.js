module.exports = () => {
  return {
    env: {
      kind: 'chrome',
    },

    files: [
      //
      'node_modules/chai/chai.js',
      'test-setup/global.ts',
      'src/**/*.ts',
      '!src/**/*.spec.ts',
    ],
    testFramework: 'mocha',
    tests: ['src/**/__tests__/*.spec.ts'],
  }
}
