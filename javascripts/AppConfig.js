"use strict";

app.config(function($routeProvider){
  $routeProvider
    .when("/home", {
      templateUrl: 'partials/home.html',
      controller: 'HomeCtrl'
    } )
    .when("/contact", {
      templateUrl: 'partials/contact.html',
      controller: 'ContactCtrl',

    } )
    .when("/about", {
      templateUrl: 'partials/about.html',
      controller: 'AboutCtrl',

    } )
    .when("/blog", {
      templateUrl: 'partials/blog.html',
      controller: 'BlogCtrl',

    } )
    .otherwise('/home');
});
