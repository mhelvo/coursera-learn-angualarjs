(function () {
"use strict";

angular.module('public')
.directive('allowed', function (){
   return {
      require: 'ngModel',
      link: function(scope, elem, attr, ngModel) {
          var allowed = attr.allowed.split(',');

          //For DOM -> model validation
          ngModel.$parsers.unshift(function(value) {
             var valid = allowed.indexOf(value) !== -1;
             ngModel.$setValidity('allowed', valid);
             return valid ? value : undefined;
          });

          //For model -> DOM validation
          ngModel.$formatters.unshift(function(value) {
             ngModel.$setValidity('allowed', allowed.indexOf(value) !== -1);
             return value;
          });
      }
   };
})
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['menuItems', 'PreferenceService'];
function SignUpController(menuItems, PreferenceService) {
  var signupCtrl = this;
  signupCtrl.menuItems = menuItems.menu_items;
  signupCtrl.allowed = menuItems.menu_items.map(function(item){
    return item.short_name;
  }).join(",");

  signupCtrl.submit = function () {

    signupCtrl.user.favoriteDishItem = signupCtrl.menuItems .filter(function(item){
      return item.short_name  === signupCtrl.user.favoriteDish;
    })[0];

    PreferenceService.saveUser(signupCtrl.user);
    signupCtrl.userSaved = true;
  };
}
})();
