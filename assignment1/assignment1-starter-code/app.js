(function () {
'use strict';

angular.module('LunchCheckApp', [])
.controller('CheckController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.lunch="";
  $scope.message="";

  $scope.checkLunch = function () {
    if ($scope.lunch == ""){
      $scope.message = "Please enter data first";
    } else {
    if( $scope.lunch.split(",").length > 3) {
      $scope.message = "Too much!";
    } else{
      $scope.message = "Enjoy!";
    }
  }
  };
}

})();
