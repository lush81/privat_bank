/**
 * Created by max on 11/11/16.
 */
angular.module('app.services', ['secondModule'])
    .service('utilMethods', ['$window', 'modalSvc', '$http', '$q', '$timeout', 'secondModuleService',function ($window, modalSvc, $http, $q, $timeout, secondModuleService) {
        var self = this;
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
        this.showDialogAsync = function(){
            self.getDialogMessageAsync().then(function(response){
                modalSvc.showModalDialog({title: response.title, message: response.message});
            }, function(){
                window.alert(message);
            })
        };
        this.getDialogMessageAsync = function(){
            var defer = $q.defer();
            $timeout(function(){
               defer.resolve({message:'newMes', title:'newTitle'});
            });
            return defer.promise;
        };
        this.getDialogHttpMessage = function(){
            $http.get('http://localhost/TestApp/getMsg').success(function(response){
                modalSvc.showModalDialog({title: response.title, message: response.message});
            });
        };
        this.callSecondModule = function () {
            return secondModuleService.getMsg();
        }
    }]);