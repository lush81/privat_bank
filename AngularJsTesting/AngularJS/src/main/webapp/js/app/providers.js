/**
 * Created by max on 11/11/16.
 */
angular.module('app.providers', [])
    .provider('sample', ['appConstants', 'anotherProvider', function(appConstants, anotherProvider){

        this.configureOptions = function(options){
            if(options.allow){
                anotherProvider.register(appConstants.ALLOW);
            } else {
                anotherProvider.register(appConstants.DENY);
            }
        };

        this.$get = function(){};
    }]);