/**
 * Created by max on 07.07.15.
 */
//var TEST_REGEXP = /(spec|test)\.js$/i;

// Get a list of all the test files to include
var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;
for (var file in window.__karma__.files) {
    if (TEST_REGEXP.test(file)) allTestFiles.push(file);
}
require.config({
    //  псевдонимы и пути используемых библиотек и плагинов
    paths: {
        'angular': '/base/node_modules/angular/angular',
        'angular-mocks': '/base/node_modules/angular-mocks/angular-mocks'
    },
    // время на загрузку модуля infinite(default 7)
    waitSeconds: 0,

    // angular не поддерживает AMD из коробки, поэтому экспортируем перменную angular в глобальную область
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-mocks': ['angular']
    },
    deps: allTestFiles,
    baseUrl: "/base/",
    callback: window.__karma__.start
});