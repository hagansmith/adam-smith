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

  return {getProjects};
});
