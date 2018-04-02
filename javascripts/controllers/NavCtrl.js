"use strict";

app.controller("NavCtrl", function($scope, $window, DataService){
  $scope.projects = [];

  $(".nav a").on("click", function(){
     $(".nav").find(".active").removeClass("active");
     $(this).parent().addClass("active");
  });
});

app.directive("scroll", function ($window) {
  return function(scope, element, attrs) {
      angular.element($window).bind("scroll", function() {
           if (this.pageYOffset >= 175) {
             $('.navigation').addClass('navbar-fixed-top');
             $('body').css('paddingTop', '75px');
           } else {
             $('.navigation').removeClass('navbar-fixed-top');
             $('body').css('paddingTop', '0px');
           }
          scope.$apply();
      });
  };
});
