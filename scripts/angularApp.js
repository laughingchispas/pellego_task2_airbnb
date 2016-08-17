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

    $scope.property = [];
        $http.get('jsonFiles/property.json')
            .then(function(response){
                    $scope.property = response.data;
        });

    //display stars
    $scope.ratings = { accuracy: [], communication: [], cleanliness: [], location: [], checkin: [], value: [], total: [], reviews: [] };


    $scope.property.ratings = { accuracy: 4.5, communication: 5, cleanliness: 4.5, location: 4.5, checkin: 5, value: 4.5, total: 5, reviews: 4.5 };

    function populateRatings() {
            angular.forEach($scope.property.ratings, function(value,key) {
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

    // Immediately call the function
    populateRatings();

});





