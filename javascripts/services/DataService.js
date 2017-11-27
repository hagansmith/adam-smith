"use strict";

app.service("DataService", function ($http, $rootScope, $q, FIREBASE_CONFIG){
  // const postNewContact = (newContact) => {
  //   newContact.uid = $rootScope.uid;
  //   return $http.post(`${FIREBASE_CONFIG.databaseURL}/contacts.json`, JSON.stringify(newContact));
  // };
  //
  const getProjects = () => {
    let projects = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/projects.json`).then((results) => {
        let fbProjects = results.data;
          Object.keys(fbProjects).forEach((key) => {
            fbProjects[key].id = key;
            projects.push(fbProjects[key]);
            resolve(projects);
          });
      }).catch((error) => {
        reject(error);
      });
    });
  };

  const getBlogs = () => {
    let blogs = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/blogs.json`).then((results) => {
        let fbBlogs = results.data;
          Object.keys(fbBlogs).forEach((key) => {
            fbBlogs[key].id = key;
            blogs.push(fbBlogs[key]);
            resolve(blogs);
          });
      }).catch((error) => {
        reject(error);
      });
    });
  };

  const getSingleBlog = (blogId) => {
  return $http.get(`${FIREBASE_CONFIG.databaseURL}/blogs/${blogId}.json`);
};


  return {getProjects, getBlogs, getSingleBlog};
});
