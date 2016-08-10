var myApp = angular.module('angularApp', []);

myApp.controller('airbnbController', function($scope) {

    $scope.comments = [
        {name: 'Richard', image: '14', date: 'June 2016',
                comment: 'Wow. Immaculately Clean. Great bed. Fridge stocked with soda and beer (complimentary). Assorted teas. And did I mention the bed? OMG. It was amazing. Thanks, Yann.'},
        {name: 'Fache', image:'13', date: 'June 2016',
                comment: 'Great stay. Yann was very helpful and accommodating, and parking was very easy, which is a big plus in SF. The neighborhood is very quiet, and there are some lovely coffee shops on the high street just two blocks away.'},
        {name: 'Fanne', image: '12', date: 'June 2016',
                comment:'We had an overall nice experience staying with Yann who was kind and responsive when we had questions and requests. We booked it for 4 people and I would say it is too small, It is better for 2. You will have to order food most likely as the place is too small to do basic cooking. As'}
    ];

    $scope.currencies = {
          USD: '$',
          name: '€'
    };

    $scope.host = {
        image: '15',
        name: 'Yann',
        responseTime: '1 hour',
        responseRate: '100%',
        memberSince: 'March 2014',
        ratings: '157',
        reference: '1',
        reviewsOtherProps: '68',
        tagLine: 'Hi! Bonjour! Oi! Konichiwa!',
        presentationText: 'I am originally from Montreal Canada (quebecois) and been living in this beautiful city SF for the last few years. I lived in 6 different countries and visited numerous (sorry stopped counting). I like meeting people from all over the world. '
    };

    $scope.hostPropertyPhotos = [
        '03',
        '06',
        '16',
        '02',
        '03'
    ];

    $scope.icons = {
        star: 'star',
        starHalf: 'star-half'
    };

    $scope.keyWords = [
        'Beautiful 1 bedroom, 1 bathroom private apartment. Private entrance on side. Free off-street parking.',
        'Brand new remodeled bathroom',
        '1 block from subway and lots restaurants/bar walking distance'
    ];

    $scope.likes = [
        'cozy', 'residential', 'close to public transport', 'quiet', 'walkable'
    ];

//navigation link content
    $scope.navCards = [
        {page: 'Help'},
        {page: 'Sign Up'},
        {page: 'Log In'}
    ];

    $scope.prices = {
          cleaningFee: '30',
          name: 'Yann',
          bedrooms: 'search',
          extraPeople: '20',
          extraPeopleAfter: '3',
          weeklyDiscount: '0%',
          monthlyDiscount: '0%',
          cancellation: 'Flexible',
    };

    $scope.properties = {
      description: 'Private flat, with parking and yard',
      city: 'San Francisco',
      state: 'CA',
      country: 'USA',
      countryFull: 'United States',
      type: 'Entire home/apt',
      guests:'4',
      bedrooms: '1',
      beds:'2',
      reviews:'74',
      price: '$139',
      baths:'1',
      saves: '634',
      roomType: 'Entire home/apt',
      propertyType: 'Apartment',
      minStay: '1 night',
      from: 'Aug 21, 2016 - Aug 05 2017',
      minimum:'3 nights'
    };

    $scope.rules = [
        'Please respect quiet hours from 11PM to 7AM',
        'Also, please avoid making noise in the hallway or side of the house. The neighbors can hear that noise and are very picky about noise. Sorry about this and thanks for your understanding.'
     ];

    $scope.safetyFeatures = [
        'Smoke Detector',
        'Carbon Monoxide Detector',
        'First Aid Kit',
        'Safety Card',
        'Fire Extinguisher'
    ];

    $scope.similarHousing = [
        'Houses',
        'Bed and Breakfasts',
        'Lofts',
        'Villas',
        'Condominiums'
    ];

    $scope.similarListings = [
        {propertyName: 'Ingleside Hideaway', image: '04', propertyType: 'June 2016', hostImage:'10', price: '$169', description:'Entire Home/Apt', distanceAway:'2.0 mi'},
        {propertyName: 'Newly Renovated, Modern B...', image:'05', propertyType: 'June 2016', hostImage:'09', price: '$158', description:'Entire Home/Apt', distanceAway:'3.3 mi'},
        {propertyName: 'Cozy 2bd/1ba, outer Missio...', image: '08', propertyType: 'June 2016', hostImage:'11', price: '$143', description:'Entire Home/Apt', distanceAway:'2.4 mi'}
    ];

    $scope.similarLocation = [
        'Sonoma Vaction Rentals',
        'Petaluma Veaction Rentals',
        'Berkeley Vacation Rentals',
        'Santa Cruz Vacation Rentals',
        'San Francisco',
        'San Jose',
        'Carmel',
        'Sunnyvale',
        'Oakland',
        'Menlo Park',
        'San Mateo'
    ];

    //display stars
    $scope.ratings = { accuracy: [], communication: [], cleanliness: [], location: [], checkin: [], value: [], total: [], reviews: [] };


    $scope.properties.ratings = { accuracy: 4.5, communication: 5, cleanliness: 4.5, location: 4.5, checkin: 5, value: 4.5, total: 5, reviews: 4.5 };

    function populateRatings() {
            angular.forEach($scope.properties.ratings, function(value,key) {
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


    $scope.imageUrl = [
        'assets/03.jpg',
        'assets/06.jpg',
        'assets/16.png',
        'assets/02.jpg',
        'assets/03.jpg'
        ];

});

