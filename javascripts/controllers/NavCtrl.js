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

});
