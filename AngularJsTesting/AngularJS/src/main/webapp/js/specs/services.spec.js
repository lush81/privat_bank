/**
 * Created by max on 11/11/16.
 */
describe('services', function () {
    var mockWindow, mockModalSvc, utilMethods, $qq, deffered, $httpBackend, $rootScope, getDialogHttpMessageRequestHandler;

    beforeEach(function () {

        angular.module('secondModule', []);

        module(function ($provide) {

            $provide.service('$window', function () {
                this.alert = jasmine.createSpy('alert');
            });
            $provide.service('modalSvc', function () {
                this.showModalDialog = jasmine.createSpy('showModalDialog');
            });
            $provide.service('secondModuleService', function(){
                this.getMsg=jasmine.createSpy('getMsg').and.returnValue('HO-HO')
            })
        });


        module('app.services');
    });
    beforeEach(inject(function ($window, modalSvc, _utilMethods_, _$q_, _$httpBackend_, _$rootScope_) {
        $qq = _$q_;
        mockWindow = $window;
        mockModalSvc = modalSvc;
        utilMethods = _utilMethods_;
        deffered = $qq.defer();
        $httpBackend = _$httpBackend_;
        $rootScope = _$rootScope_;
        spyOn(utilMethods, 'getDialogMessageAsync').and.callFake(function () {
            return deffered.promise;
        });

    }));

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


    it('should show modal with title and message after async call', function () {
        var message = "Some message", title = "Some title";
        utilMethods.showDialogAsync();
        deffered.resolve({title: title, message: message});
        // запускаем digest
        $rootScope.$digest();
        expect(mockModalSvc.showModalDialog).toHaveBeenCalledWith({
            message: message,
            title: title
        });
    });

    it('should show modal with title and message after http request', function () {
        var message = "Some message", title = "Some title";
        utilMethods.getDialogHttpMessage();
        $httpBackend.expectGET('http://localhost/TestApp/getMsg');
        $httpBackend.whenGET('http://localhost/TestApp/getMsg').respond({
                message:message,
                title:title
        });
        $httpBackend.flush();
        expect(mockModalSvc.showModalDialog).toHaveBeenCalledWith({
            message: message,
            title: title
        });
    });
    it('should return msg', function(){
        var msg = utilMethods.callSecondModule();
        expect(msg).toMatch('HO-HO')
    })
})
