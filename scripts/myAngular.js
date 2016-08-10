var trialApp = angular.module('mainApp', []);

trialApp.controller('peopleController', function($scope, $http) {
    $http.get('file:///Users/nicolemiller/Documents/dev/projects/pellego_task2_airbnb/database.json')
        .success(function(response){
            $scope.persons = response.records;
        });
});


/*
app.controller('properties', function($scope, $http) {
    $http.get('file:///Users/nicolemiller/Documents/dev/projects/pellego_task2_airbnb/property.json')
        .success(function(response){
            $scope.properties = response.property;
        });
});*/
