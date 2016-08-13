var myApp = angular.module('angularApp', []);

myApp.controller('airbnbController', function($scope, $http) {

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

    $scope.host = [];
        $http.get('jsonFiles/host.json')
            .then(function(response){
                    $scope.host = response.data;
        });

    $scope.hostPropertyPhotos = [];
        $http.get('jsonFiles/hostPropertyPhotos.json')
            .then(function(response){
                    $scope.hostPropertyPhotos = response.data;
        });

    $scope.icons = [];
        $http.get('jsonFiles/icons.json')
           .then(function(response){
                   $scope.icons = response.data;
        });

    $scope.keyWords = [];
       $http.get('jsonFiles/keyWords.json')
           .then(function(response){
                   $scope.keyWords = response.data;
       });

    $scope.likes = [];
         $http.get('jsonFiles/likes.json')
           .then(function(response){
                   $scope.likes = response.data;
         });

//navigation link content
    $scope.navCards = [];
         $http.get('jsonFiles/navCards.json')
           .then(function(response){
                   $scope.navCards = response.data;
         });

    $scope.prices = [];
          $http.get('jsonFiles/prices.json')
             .then(function(response){
                     $scope.prices = response.data;
          });

    $scope.rules = [];
        $http.get('jsonFiles/rules.json')
           .then(function(response){
                  $scope.rules = response.data;
        });

    $scope.safetyFeatures = [];
        $http.get('jsonFiles/safetyFeatures.json')
            .then(function(response){
                    $scope.safetyFeatures = response.data;
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


    $scope.imageUrl = [];
        $http.get('jsonFiles/imageUrl.json')
            .then(function(response){
                    $scope.imageUrl = response.data;
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
    $scope.ratings = [];
         $http.get('jsonFiles/ratings.json')
            .then(function(response){
                    $scope.ratings = response.data;
          });


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





