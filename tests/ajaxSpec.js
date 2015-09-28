//"use strict";

// mocha tests: 
describe('ajaxController', function () {
  var scope;
  var searchFactory;
  var ctrl;

  beforeEach(module('app'));

  beforeEach(inject(function($rootScope, $controller, _searchFactory_) {
    scope = $rootScope.$new();
    ctrl = $controller('searchController', {$scope: scope});
    searchFactory = _searchFactory_;
  }));

  describe('search function', function () {
    beforeEach(function () {
      var searchResults = {user: 'example artist', track: 'example track'};
      scope.$apply(function () {
        scope.test = 'test search text';
      });
      sinon.stub(searchFactory, 'getSearchResults', function() {
        return searchResults;
      });
    });

    it('should return search results when search() is called', function () {
      scope.search();
      expect(scope.searchResults).to.deep.equal({user: 'example artist', track: 'example track'});
    });
  });

});
