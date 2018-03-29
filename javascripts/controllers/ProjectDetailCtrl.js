"use strict";

app.controller("ProjectDetailCtrl", function($scope, $window, DataService){
  $scope.projects = [];

  $scope.getProjectsById = () => {
    DataService.getProjects().then((results)=>{
      $scope.projects = results;
    }).catch((error)=>{
      console.log("error in getProjects", error);
    });
  };
});
