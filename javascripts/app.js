/* globals app: true */

"use strict";

const app = angular.module("AdamSmith", ["ngAnimate", "ngRoute", "ngSanitize", "ui.bootstrap"]);

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
