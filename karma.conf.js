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
      // make sure install firefox
      'FirefoxHeadless',
      'WebkitHeadless',
    ],
    files: [{pattern: 'src/**/*.spec.ts', served: false, type: 'module', watched: false}],
    frameworks: ['mocha', 'chai', 'vite'],

    // Make Karma work with pnpm.
    // See: https://github.com/pnpm/pnpm/issues/720#issuecomment-954120387
    plugins: Object.keys(require('./package').devDependencies).flatMap((packageName) => {
      if (!packageName.startsWith('karma-')) {
        return []
      }
      return [require(packageName)]
    }),
    // @see https://npm.io/package/karma-typescript
    // karmaTypescriptConfig: {
    //   bundlerOptions: {
    //     sourceMap: true,
    //     transforms: [require('karma-typescript-es6-transform')()],
    //   },
    //   compilerOptions: {
    //     allowJs: true,
    //     lib: ['esnext', 'dom', 'es2019'],
    //     skipLibCheck: true,
    //     sourceMap: true,
    //   },
    //   coverageOptions: {
    //     instrumentation: false,
    //     sourceMap: true,
    //   },
    // },
    // preprocessors: {
    //   'src/**/*.ts': ['vite', 'coverage'],
    // },

    reporters: ['spec'],
  })
}
