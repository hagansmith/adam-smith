"use strict";

app.config(function( $locationProvider, $routeProvider ){

  $routeProvider
    .when("/", {
      templateUrl: 'partials/home.html',

    } )
    .when("/contact", {
      templateUrl: 'partials/contact.html',

    } )
    .when("/about", {
      templateUrl: 'partials/about.html',

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
