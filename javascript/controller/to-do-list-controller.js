(function(myApp) {
    myApp.controller('ToDoListController', function($scope) {
        $scope.items = [
            {"name": "My Task 1", "finished": false},
            {"name": "My Task 2", "finished": false},
            {"name": "My Task 3", "finished": false},
            {"name": "My Task 4", "finished": true},
            {"name": "My Task 5", "finished": true}
        ];

        $scope.addToDoItem = function() {
            $scope.items.push($scope.newItem);
            $scope.newItem = {};
        };
    });

})(window.myApp);