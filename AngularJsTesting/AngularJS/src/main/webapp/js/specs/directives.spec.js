/**
 * Created by max on 11/11/16.
 */
describe('directives', function () {
    var compile, scope;
    beforeEach(function () {
        module('app.directives');

        inject(function ($compile, $rootScope) {
            compile = $compile;
            scope = $rootScope.$new();
        });
    });


    function getCompiledElement(template) {
        var element = angular.element(template);
        var compiledElement = compile(element)(scope);
        scope.$digest();
        return compiledElement;
    }

    it('should not be defined', function () {
        var compiledElem = getCompiledElement("<div sample-span></div>");
        expect(compiledElem).toBeDefined();
    });

    it('should not be equal sample', function () {
        var compiledElem = getCompiledElement("<div sample-span></div>");
        expect(compiledElem.text()).toEqual('sample');
    });

    it('should not be equal ttttttt', function () {
        var compiledElem = getCompiledElement("<div sample-span-scope></div>");
        scope.text = 'ttttttt';
        scope.$digest();
        expect(compiledElem.text()).toEqual('ttttttt');
    });

    it('should fail if ngModel is not specified', function () {
        expect(function () {
            getCompiledElement('<input type="text" require-test/>');
        }).toThrow();
    });

    it('should work if ng-model is specified and not wrapped in form', function () {
        expect(function () {
            getCompiledElement('<div><input type="text" ng-model="name" require-test /></div>');
        }).not.toThrow();
    });

    it('should set form dirty', function () {
        getCompiledElement('<form name="sampleForm"><input type="text" ng-model="name" require-test /></form>');

        expect(scope.sampleForm.$dirty).toEqual(true);
    });
    it('should render something', function() {
        var compiledElem = getCompiledElement('<my-directive something="thing"></my-directive>');
        scope.thing = {name: 'My thing'};
        scope.$digest();
        var h1 = compiledElem.find('h1');
        expect(h1.text()).toBe('My thing');
    });
})
