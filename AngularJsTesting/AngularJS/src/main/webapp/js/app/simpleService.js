angular.module('app.servicesSimple', [])
    .service('utilMethods', [function () {
        var self = this;
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
    }]);