"use strict";

app.controller("NavCtrl", function($scope, $window, DataService){
  $scope.projects = [];

  const getProjects = () => {
    DataService.getProjects().then((results)=>{
      $scope.projects = results;
    }).catch((error)=>{
      console.log("error in getProjects", error);
    });
  };

  getProjects();

  //let topOfDiv = $('.navigation').offset().top(); //gets offset of header
  //let height = $('.navigation').outerHeight; //gets height of header
  $window.scroll(function() {
    if($window.scrollTop() > (12)){
       //$(".jumbotron").slideUp();
       $('.navigation').addClass('navbar-fixed-top');
    }
    else{
       //$(".jumbotron").slideDown();
       $('.navigation').removeClass('navbar-fixed-top');
    }
  });
});
