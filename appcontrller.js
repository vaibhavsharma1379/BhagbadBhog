'use strict';
var app = angular.module("app", ['ngRoute']);
app.config(function ($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "main.html"
  }).when("/products",{
    templateUrl:"products.html"
  })
});

app.controller("productcontroller",["$scope","getProducts",function($scope,getProducts){
  $scope.name;
  $scope.weight;
  $scope.price;
  $scope.img="./images/kali mirch.png";
  $scope.data;
  getProducts.getProducts(function(prodData){
    $scope.data=prodData;
    console.log($scope.data);
  });
  

}])


app.controller("slidectrl", ['$scope', '$document', function($scope, $document) {
  // Set of Photos
  $scope.photos = [
    { src: './images/amchur.png', desc: 'Image 01' },
    { src: './images/biryani.png', desc: 'Image 02' },
    { src: './images/chat.png', desc: 'Image 03' },
    { src: './images/haldi.png', desc: 'Image 04' },
    { src: './images/jeera.png', desc: 'Image 05' },
    { src: './images/pani puri.png', desc: 'Image 06' },
    { src: './images/lal mirch.png', desc: 'Image 07' },
    { src: './images/pav bhaji.png', desc: 'Image 8' }
  ];

  // initial image index
  $scope._Index = 0;

  // if a current image is the same as the requested image
  $scope.isActive = function(index) {
    return $scope._Index === index;
  };

  // show prev image
  $scope.showPrev = function() {
    $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
  };

  // show next image
  $scope.showNext = function() {
    $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
  };
  // show a certain image on thumbnail click
  $scope.showPhoto = function(index) {
    $scope._Index = index;
  };
  // Keyboard navigation support
  $document.on('keydown', function(event) {
    $scope.$apply(function() {
      switch (event.keyCode) {
        case 37: // Left arrow key
          $scope.showPrev();
          break;
        case 39: // Right arrow key
          $scope.showNext();
          break;
        default:
          return; // Exit function if other keys are pressed
      }
    });
  });
}]);

app.controller('MasalaController',["$scope","rgtrPodService", function(p,rgtrPodService){
  p.regtrProduct=function(){
    var productData={
      category:p.category,
      name: p.name,
      description: p.description,
      ingredients:p.ingredients.split(','),
      weight: p.weight,
      price:p.price
    }
    rgtrPodService.rgtrProduct(productData);
  }
}])
 
// app.controller('MasalaListController', function ($scope, $http) {
//   // initialize the scope variable
//   $scope.masalas = [];


//   // define the get function
//   $scope.getMasalas = function () {
//     // send a GET request to the API
//     $http.get('/masalas').then(
//       function (response) {
//         // handle success
//         console.log(response.data);
//         $scope.masalas = response.data;
//       },
//       function (error) {
//         // handle error
//         console.error(error);
//         alert('Something went wrong');
//       }
//     );
//   };

//   // call the get function when the controller is loaded
//   $scope.getMasalas();
// });
