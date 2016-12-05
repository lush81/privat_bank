/**
 * Created by max on 11/11/16.
 */
define(['angular'], function (angular) {
    return angular.module('app.controllers', [])
        .controller('FirstController', ['$scope', 'dataSvc', function ($scope, dataSvc) {
            $scope.saveData = function () {
                dataSvc.save($scope.bookDetails).then(function (result) {
                    $scope.bookDetails = {};
                    $scope.bookForm.$setPristine();
                });
            };

            $scope.numberPattern = /^\d*$/;
        }])
        .controller('SecondController', function (dataSvc) {
            var vm = this;

            vm.saveData = function () {
                dataSvc.save(vm.bookDetails).then(function (result) {
                    vm.bookDetails = {};
                    vm.bookForm.$setPristine();
                });
            };

            vm.numberPattern = /^\d*$/;
        });
});
