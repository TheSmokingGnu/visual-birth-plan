var webpackConfig = require('./config/webpack.config.test');

module.exports = function(config) {

  var browser =  process.env.TRAVIS ? 'Chrome_travis_ci': 'Chrome';
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon'],
    files: [
      'node_modules/es6-promise/dist/es6-promise.auto.js',
      'src/test.ts'
    ],
    preprocessors: {
      'src/test.ts': ['webpack']
    },
    webpack: webpackConfig,
    webpackServer: { noInfo: true },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: [browser],
    mime: {
      'text/x-typescript': ['ts']
    },
    singleRun: true,
    customLaunchers: {
      Chrome_travis_ci: {
          base: 'Chrome',
          flags: ['--no-sandbox']
      }
    }
  });
};
