"use strict";

app.controller("NavCtrl", function($scope, $window, DataService){
  $scope.projects = [];

  $(".nav a").on("click", function(){
     $(".nav").find(".active").removeClass("active");
     $(this).parent().addClass("active");
  });
});
