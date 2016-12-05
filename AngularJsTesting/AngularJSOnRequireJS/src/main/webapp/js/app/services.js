/**
 * Created by max on 11/11/16.
 */
define(['angular'], function (angular) {
    return angular.module('app.services', [])
        .service('utilMethods', ['$window', 'modalSvc', function ($window, modalSvc) {
            this.isEmptyObject = function (obj) {
                for (var name in obj) {
                    return false;
                }
                return true;
            };
            this.inArray = function (array, elem) {
                for (var i = 0, length = array.length; i < length; i++) {
                    if (array[i] === elem) {
                        return i;
                    }
                }
                return -1;
            };
            this.showDialog = function (message, title) {
                if (title) {
                    modalSvc.showModalDialog({
                        title: title,
                        message: message
                    });
                } else {
                    $window.alert(message);
                }
            };
        }])
});