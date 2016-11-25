(function () {
"use strict";

angular.module('common')
.service('PreferenceService', PreferenceService);


PreferenceService.$inject = ['$http', 'ApiPath'];
function PreferenceService($http, ApiPath) {
  var service = this;
  service.user={};


  service.saveUser = function (user) {
    console.log("save user", user);
      console.log("save user", user);
    service.user = user;
  };

  service.getUser = function () {
    console.log("get user", service.user);
    return service.user;
  };

}
})();
