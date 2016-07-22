var myApp = angular.module('angularApp', []);

myApp.controller('airbnbController', function($scope) {


//navigation link content
    $scope.navCards = [
      {page: 'Help'},
      {page: 'Sign Up'},
      {page: 'Log In'},
    ];


    $scope.users = [
      {image: 'image', name: 'Yann', bedrooms: 'search'}
    ];


    $scope.properties = [
          {description: 'Private flat, with parking and yard', city: 'San Francisco', state: 'CA', country: 'USA', type: 'Entire home/apt', guests:'4', bedrooms: '1', beds:'2', reviews:'74'},
        ];


    $scope.likes = [
        'cozy', 'residential', 'close to public transport', 'quiet', 'walkable'
        ]

});