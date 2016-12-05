/**
 * Created by max on 11/11/16.
 */
define(['angular'], function (angular) {
    return angular.module('app.directives', [])
        .directive('sampleSpan', function () {
            return {
                link: function (scope, elem) {
                    elem.append('<span>sample</span>');
                }
            }
        })
        .directive('sampleSpanScope', function () {
            return {
                link: function (scope, elem) {
                    var spanElement = angular.element('<span>' + scope.text + '</span>');
                    elem.append(spanElement);

                    scope.$watch('text', function (newVal, oldVal) {
                        spanElement.text(newVal);
                    });
                }
            }
        })
        .directive('requireTest', function () {
            return {
                require: ['ngModel', '^?form'],
                link: function (scope, elem, attrs, ctrls) {
                    if (ctrls[1]) {
                        ctrls[1].$setDirty();
                    }
                }
            };
        });
});