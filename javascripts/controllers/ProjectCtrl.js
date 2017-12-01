"use strict";

app.controller("ProjectCtrl", function($scope, DataService){
  $scope.projects = [];

  const getProjects = () => {
    DataService.getProjects().then((results)=>{
      $scope.projects = results;
    }).catch((error)=>{
      console.log("error in getProjects", error);
    });
  };

  getProjects();
});
