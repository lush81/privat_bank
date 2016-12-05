/**
 * Created by max on 11/11/16.
 */
define(['angular', 'angular-mocks', 'js/app/services'], function () {
    describe('services', function () {
        var mockWindow, mockModalSvc, utilMethods;

        beforeEach(function () {
            module(function ($provide) {
                $provide.service('$window', function () {
                    this.alert = jasmine.createSpy('alert');
                });
                $provide.service('modalSvc', function () {
                    this.showModalDialog = jasmine.createSpy('showModalDialog');
                });
            });

            module('app.services');
        });
        beforeEach(inject(function ($window, modalSvc, _utilMethods_) {
            mockWindow = $window;
            mockModalSvc = modalSvc;
            utilMethods = _utilMethods_;
        }));


        it("should be in array", function () {
            expect(utilMethods.inArray(["a", "b", "c"], "c")).toBeGreaterThan(0);
        });

        it("should be an empty object", function () {
            expect(utilMethods.isEmptyObject({})).toBe(true);
        });

        it("should not be an empty object", function () {
            expect(utilMethods.isEmptyObject({a: ""})).toBe(false);
        });

        it('should show alert when title is not passed into showDialog', function () {
            var message = "Some message";
            utilMethods.showDialog(message);

            expect(mockWindow.alert).toHaveBeenCalledWith(message);
            expect(mockModalSvc.showModalDialog).not.toHaveBeenCalled();
        });

        it('should show modal when title is passed into showDialog', function () {
            var message = "Some message";
            var title = "Some title";
            utilMethods.showDialog(message, title);

            expect(mockModalSvc.showModalDialog).toHaveBeenCalledWith({
                message: message,
                title: title
            });
            expect(mockWindow.alert).not.toHaveBeenCalled();
        });

    })
})
