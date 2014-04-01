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

});