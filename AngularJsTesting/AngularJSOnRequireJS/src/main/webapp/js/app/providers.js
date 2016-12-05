/**
 * Created by max on 11/11/16.
 */
define(['angular'], function (angular) {
    return angular.module('app.providers', [])
        .provider('sample', function (appConstants, anotherProvider) {

            this.configureOptions = function (options) {
                if (options.allow) {
                    anotherProvider.register(appConstants.ALLOW);
                } else {
                    anotherProvider.register(appConstants.DENY);
                }
            };

            this.$get = function () {
            };
        });
});