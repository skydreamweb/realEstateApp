const myApp = angular.module('myApp',['ngRoute']);


myApp.config(function ($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('')
    $routeProvider

  .when('/', {
    templateUrl: 'pages/login.html',
    controller: 'mainController'
  })
  .when('/bathroom', {
    templateUrl: 'pages/bathroom.html',
    controller: 'validationCtrl'
  })
  .when('/kitchen', {
    templateUrl: 'pages/kitchen.html',
    controller: 'kitchenCtrl'
  })
  .when('/bedroom', {
    templateUrl: 'pages/bedroom.html',
    controller: 'balconyCtrl'
  })
  .when('/construction', {
    templateUrl: 'pages/construction.html',
    controller: 'constructionCtrl'
  })
  .when('/dinning', {
    templateUrl: 'pages/dinning.html',
    controller: 'dinningCtrl'
  })
  .when('/entrance', {
    templateUrl: 'pages/entrance.html',
    controller: 'entranceCtrl'
  })
  .when('/hallway', {
    templateUrl: 'pages/hallway.html',
    controller: 'hallwayCtrl'
  })
  .when('/balcony', {
    templateUrl: 'pages/balcony.html',
    controller: 'balconyCtrl'
  })
  .when('/laundry', {
    templateUrl: 'pages/laundry.html',
    controller: 'laundryCtrl'
  })
  .when('/living', {
    templateUrl: 'pages/living.html',
    controller: 'livingCtrl'
  })
  .when('/other', {
    templateUrl: 'pages/other.html',
    controller: 'otherCtrl'
  })
  .when('/patio', {
    templateUrl: 'pages/patio.html',
    controller: 'patioCtrl'
  })

});
