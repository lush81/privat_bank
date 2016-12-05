/**
 * Created by max on 12/2/16.
 */

angular.module("myappSimpleProviders", []).provider('hello', function () {
    var hello;
    this.set = function (_hello) {
        hello = _hello;
    };
    this.$get = [function () {
        return hello
    }];
});