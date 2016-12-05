/**
 * Created by max on 12/2/16.
 */
describe("Angular Simple Provider test",function(){

    var hello;

    // load the myappSimpleProviders module
    beforeEach(function () {
        module('myappSimpleProviders');
    });

    // load the provider with module to be able to call its configuration methods
    beforeEach(function () {
        module( function (_helloProvider_) {
            _helloProvider_.set("Hello");
        });
    });

    beforeEach(function () {
        inject( function (_hello_) {
            hello = _hello_;    // to use the instance in other parts
        });
    });

    it('should set the value for hello using the config Provider and get its value using the provider instance',function(){
        expect(hello).toEqual("Hello");
    });

});
