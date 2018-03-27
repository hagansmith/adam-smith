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

  let topOfDiv = $(".jumbo").offset().top; //gets offset of header
  $window.scroll(function(){
    if($window.scrollTop() > topOfDiv){
      $window.alert("Im here");
       $('.navigation').addClassList('navbar-fixed-top');
    }
    else{
       $('.navigation').removeClassList('navbar-fixed-top');
    }
  });
});
