(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://mvh-coursera-angular2.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
