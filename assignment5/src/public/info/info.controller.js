(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = [ 'PreferenceService','ApiPath'];
function InfoController( PreferenceService,ApiPath) {
  var infoCtrl = this;
  infoCtrl.user = PreferenceService.getUser();
  infoCtrl.basePath = ApiPath;

}
})();
