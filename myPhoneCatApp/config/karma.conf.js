module.exports = function(config){
  config.set({
    basePath : '../',

    files : [
      'app/js/lib/jquery.js',
      'app/js/lib/bootstrap.js',
      'app/js/lib/angular.js',
      'app/js/lib/angular-*.js',
      'app/js/*.js',
      'app/js/**/*.js',
      'test/lib/angular-mocks.js',
      'test/**/*Spec.js',
      // this file only gets watched and is otherwise ignored
      {pattern: 'app/index.html', included: false, served: false}
    ],

    exclude : [
      'app/js/lib/angular-loader.js',
      'app/js/lib/*.min.js',
      'app/js/lib/angular-scenario.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
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
