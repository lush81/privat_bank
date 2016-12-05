/**
 * Created by max on 11/11/16.
 */
describe('filters', function () {
    var orderByFieldFilter;

    beforeEach(function () {
        module('app.filters');

        inject(function($filter) {
            orderByFieldFilter = $filter('orderByField');
        });
    });

    it('should be defined', function() {
        expect(orderByFieldFilter).toBeDefined();
    });

    it("should order By order field", function() {
        var items = [{"id":"REISSUE_1","order":0},{"id":"REISSUE_3","order":3},{"id":"REISSUE_2","order":2}];
        var expected = [{"id":"REISSUE_1","order":0},{"id":"REISSUE_2","order":2}, {"id":"REISSUE_3","order":3}];
        var result = orderByFieldFilter(items, "order");
        expect(result).toEqual(expected);
    });
});