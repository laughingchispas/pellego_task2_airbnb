var myApp = angular.module('angularApp', []);

myApp.controller('airbnbController', function($scope, $http) {

    //navigation link content
    $scope.navCards = [
        {page: "Help"},
        {page: "Sign Up"},
        {page: "Log In"}
    ]

    $scope.icons = {
        star: "star",
        starHalf: "star-half"
     };

    $scope.comments = [];
        $http.get('jsonFiles/comments.json')
           .then(function(response){
                   $scope.comments = response.data;
        });

    $scope.currencies = [];
        $http.get('jsonFiles/currency.json')
            .then(function(response){
                    $scope.currencies = response.data;
        });

    $scope.similarHousing = [];
        $http.get('jsonFiles/similarHousing.json')
            .then(function(response){
                    $scope.similarHousing = response.data;
        });

    $scope.similarListings = [];
        $http.get('jsonFiles/similarListings.json')
            .then(function(response){
                    $scope.similarListings = response.data;
        });

    $scope.similarLocation = [],
        $http.get('jsonFiles/similarLocation.json')
            .then(function(response){
                    $scope.similarLocation = response.data;
        });

    //display stars

    $scope.ratings = {};
    $http.get('jsonFiles/ratings.json')
         .then(function(response){
             $scope.ratings = response.data;
         });


    function populateRatings() {
            angular.forEach($scope.property.propertyRatings, function(value,key) {
                 // We know it's out of five, so might as well just do that
                for (var i=1; i<=5; i++) {
                    // If the rating is higher than this, it gets a full star
                    if (value >= i) {
                        // Add a full star for this key
                        $scope.ratings[key].push('star');
                    }
                    // If the rating is less than this by 1/2, then a half star
                    else if ( value + 0.5 === i ) {
                        $scope.ratings[key].push('star-half');
                    }
                }
            });
        }

    $scope.property = [];
        $http.get('jsonFiles/property.json')
            .then(function(response){
                    $scope.property = response.data;
            populateRatings();
        });

});





