/**
 * Created by max on 24.05.16.
 */
module.exports = function (grunt) {
    grunt.initConfig({
        karma: {
            unit: {
                options: {
                    frameworks: ['jasmine'],
                    browsers: ['PhantomJS'],
                    files: [
                        'node_modules/angular/angular.js',
                        'node_modules/angular-mocks/angular-mocks.js',
                        'js/app/*.js',
                        'js/specs/*.js'
                    ],
                    plugins: [
                        "karma-phantomjs-launcher",
                        "karma-jasmine",
                        "karma-junit-reporter",
                        "karma-coverage"
                    ],
                    reporters: ['progress', 'junit', 'coverage'],
                    junitReporter: {
                        outputFile: '../../../../target/reports/junit/TESTS-xunit.xml'
                    },
                    coverageReporter: {
                        type: 'lcov',
                        dir: '../../../target/reports',
                        subdir: 'coverage'
                    },
                    preprocessors: {
                        'js/app/**/*.js': ['coverage']
                    },
                    logLevel: 'LOG_INFO',
                    autoWatch: true,
                    singleRun: true,
                    basePath: ''
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('test', ['karma']);
};