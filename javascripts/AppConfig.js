"use strict";

app.config(function($routeProvider){
  $routeProvider
    .when("/login", {
      templateUrl: 'partials/login.html',
      controller: 'Login'
    } )
    .when("/contacts/favorites", {
      templateUrl: 'partials/contacts/favorites.html',
      controller: 'Favorites',

    } )
    .when("/contacts/new", {
      templateUrl: 'partials/contacts/new.html',
      controller: 'NewContact',

    } )
    .when("/contacts/view", {
      templateUrl: 'partials/contacts/view.html',
      controller: 'ViewContact',

    } )
    .when("/contacts/edit/:id", {
      templateUrl: 'partials/contacts/edit.html',
      controller: 'EditContact',

    } )
    .when("/contacts/detail/:id", {
      templateUrl: 'partials/contacts/detail.html',
      controller: 'DetailContact',

    } )
    .otherwise('/login');
});
