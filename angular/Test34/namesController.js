angular.module("customApp", []).controller(
    "namesController",
    function($scope) {
        $scope.names = [
            {name: "Jani", country: "Norway"},
            {name: "Hege", country: "Sweden"},
            {name: "Kai", country: "Denmark"}
        ];
    }
);
