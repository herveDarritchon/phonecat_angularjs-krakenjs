// Karma configuration
// Generated on Sat Mar 29 2014 07:34:21 GMT+0100 (CET)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',


    // frameworks to use
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
    'app/js/lib/jquery.js',
    'app/js/lib/bootstrap.js',
    'app/js/lib/angular.js',
    'app/js/lib/angular-*.js',
    'app/js/*.js',
    'app/js/**/*.js',
    'test/lib/angular-mocks.js',	  
    'test/unit/*Spec.js',
    // this file only gets watched and is otherwise ignored
    {pattern: 'app/index.html', included: false, served: false}
],

//      'test/unit/**/*Spec.js'

    // list of files to exclude
    exclude: [
    'app/js/lib/angular-loader.js',
    'app/js/lib/*.min.js',
    'app/js/lib/angular-scenario.js'      
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['Firefox'],
	//    browsers: ['Chrome'],
	//    browsers: ['Chrome', 'Firefox', 'Safari'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    plugins : [
    'karma-junit-reporter',
    'karma-chrome-launcher',
    'karma-safari-launcher',
    'karma-firefox-launcher',
    'karma-script-launcher',
    'karma-jasmine'
    ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
