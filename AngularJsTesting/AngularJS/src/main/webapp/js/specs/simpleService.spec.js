/**
 * Created by max on 11/11/16.
 */
describe('servicesSimple', function () {
    var utilMethods;

    // register module
    beforeEach(module('app.servicesSimple'));

    // service injection
    beforeEach(inject(function (_utilMethods_) {
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

})
