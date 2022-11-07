// Note: Playwright is used here solely to obtain the webkit executable path
// @see https://github.com/zenOSmosis/karma-webkit-launcher#headless-webkit-with-playwright
const playwright = require('playwright')
const webkitExe = playwright.webkit.executablePath()
process.env.WEBKIT_BIN = webkitExe
process.env.WEBKIT_HEADLESS_BIN = webkitExe

/**
 * exports error
 * 테스트가 최소 1개의 import 가 없을 경우 발생
 */

module.exports = (config) => {
  config.set({
    browsers: [
      //
      'ChromeHeadless',
      // "FirefoxHeadless",
      'WebkitHeadless',
    ],
    files: [{pattern: 'src/**/*.ts'}],

    frameworks: ['mocha', 'chai', 'karma-typescript'],
    // @see https://npm.io/package/karma-typescript
    karmaTypescriptConfig: {
      bundlerOptions: {
        sourceMap: true,
        transforms: [require('karma-typescript-es6-transform')()],
      },
      compilerOptions: {
        allowJs: true,
        lib: ['esnext', 'dom', 'es2019'],
        skipLibCheck: true,
        sourceMap: true,
      },
      coverageOptions: {
        instrumentation: false,
        sourceMap: true,
      },
    },
    preprocessors: {
      'src/**/*.ts': ['karma-typescript', 'coverage'],
    },

    reporters: ['coverage', 'karma-typescript'],
  })
}
