"use strict";

app.controller("BlogCtrl", function($scope, DataService){
  $scope.blogs = [];
  $scope.oneBlog = [];

  const getBlogs = () => {
    DataService.getBlogs().then((results)=>{
      $scope.blogs = results;
    }).catch((error)=>{
      console.log("error in getProjects", error);
    });
  };

  getBlogs();

  $scope.mainBlog = (id) => {
    DataService.getSingleBlog(id).then((results)=>{
      $scope.oneBlog = results.data;
      angular.element('#blogWelcome').addClass('hidden');
    }).catch((error)=> {
      console.log("error in get single blog", error);
    });
  };
});
