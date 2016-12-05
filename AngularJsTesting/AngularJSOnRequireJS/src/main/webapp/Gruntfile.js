/**
 * Created by max on 24.05.16.
 */
module.exports = function (grunt) {
    grunt.initConfig({
        karma: {
            unit: {
                options: {
                    frameworks: ['jasmine', 'requirejs'],
                    browsers: ['PhantomJS'],
                    files: [
                        { pattern: 'node_modules/angular/angular.js', included: false, watched: true,  served: true },
                        { pattern: 'node_modules/angular-mocks/angular-mocks.js', included: false,  watched: true,  served: true  },
                        { pattern: 'test-main.js', included: true,  watched: true,  served: true  },
                        { pattern: 'js/**/*.js', included: false,  watched: true,  served: true  }
                    ],
                    plugins: [
                        "karma-phantomjs-launcher",
                        "karma-jasmine",
                        "karma-requirejs",
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