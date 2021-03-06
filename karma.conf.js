// Karma configuration
var args = process.argv.splice(2),
    ciMode = args.indexOf('--ci') !== -1,
    devMode = args.indexOf('--dev') !== -1;

module.exports = function(karma) {
    karma.set({

        // base path, that will be used to resolve files and exclude
        basePath: '',


        // frameworks to use
        frameworks: ['mocha', 'requirejs'],


        // list of files / patterns to load in the browser
        files: [
            'src/js/specs/karma.js',

            {pattern: 'node_modules/mocha/mocha.css', included: false},
            {pattern: 'src/**/*.js', included: false},
            {pattern: 'src/**/*.hbs', included: false}
        ],


        // list of files to exclude
        exclude: [
        ],


        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ciMode ? ['progress', 'junit'] : ['progress', 'growl'],


        junitReporter: {
            outputFile: 'reports/karma/junit-results.xml',
            suite: 'karma'
        },


        // web server port
        port: 7777,


        // cli runner port
        runnerPort: 9999,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: karma.LOG_DISABLE || karma.LOG_ERROR || karma.LOG_WARN || karma.LOG_INFO || karma.LOG_DEBUG
        logLevel: karma.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: (ciMode ?
            [
             'PhantomJS'
            ] : [
             'PhantomJS'
            ]),


        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,


        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: !devMode,

        preprocessors: {
        }
    });
};
