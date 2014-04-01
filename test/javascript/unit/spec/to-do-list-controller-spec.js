describe('ToDoListController', function() {
    'use strict';

    var $scope;

    beforeEach(module(myApp.name));

    beforeEach(inject(function($rootScope, $controller, $httpBackend) {
        $scope = $rootScope.$new();
        $httpBackend.expectGET('javascript/data.json').respond(givenExistingItems());
        $controller('ToDoListController', {$scope: $scope});
        $httpBackend.flush();
    }));

    afterEach(inject(function($httpBackend) {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    }));

    describe('after initialized', function() {
        it('should expose $scope.items', function() {
            expect($scope.items).toEqual(givenExistingItems());
        });
    });

    describe('addToDoItem()', function() {
        it('should append the newItem to the items list', function() {
            var numberOfItems = $scope.items.length,
                newItemName = 'New Item';
            $scope.newItem = {name: newItemName};

            $scope.addToDoItem();

            expect($scope.items.length).toEqual(numberOfItems + 1);
            var lastItem = $scope.items[numberOfItems];
            expect(lastItem.name).toEqual(newItemName);
            expect(lastItem.finished).toBeFalsy();
        });

        it('should reset status of newItem', function() {
            var newItemName = 'New Item';
            $scope.newItem = {name: newItemName};

            $scope.addToDoItem();

            expect($scope.newItem).toEqual({});
        });
    });

    function givenExistingItems() {
        return [{name: 'data', finished: true}];
    }

});