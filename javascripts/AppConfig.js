"use strict";

app.config(function( $locationProvider, $routeProvider ){

  $routeProvider
    .when("/", {
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
    .when("/projects", {
      templateUrl: 'partials/project.html',
      controller: 'ProjectCtrl',

    } )
    .otherwise('/');
});
