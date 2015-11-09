module.exports = function(config) {
  config.set({

    basePath: '',
    frameworks: ['browserify', 'mocha'],

    files: [
      'test/**/*Spec.js'
    ],

    exclude: [
    ],

    preprocessors: {
      'test/**/*.js': [ 'browserify' ]
    },

    browserify: {
      debug: true,
      transform: []
    },

    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
