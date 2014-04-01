describe('ToDoListController', function() {
    'use strict';

    var $scope;

    beforeEach(module(myApp.name));

    beforeEach(inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();
        $controller('ToDoListController', {$scope: $scope});
    }));

    describe('after initialized', function() {
        it('should expose $scope.items', function() {
            expect($scope.items).toEqual([
                {name: 'My Task 1', finished: false},
                {name: 'My Task 2', finished: false},
                {name: 'My Task 3', finished: false},
                {name: 'My Task 4', finished: true},
                {name: 'My Task 5', finished: true}
            ]);
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

});