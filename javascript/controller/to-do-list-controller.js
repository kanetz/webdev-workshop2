(function(myApp) {
    myApp.controller('ToDoListController', function($scope, $http) {
        $http.get('javascript/data.json').success(function populateToDoList(items) {
            $scope.items = items;
        });

        $scope.addToDoItem = function() {
            $scope.items.push($scope.newItem);
            $scope.newItem = {};
        };
    });

})(window.myApp);