(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/menuapp/templates/categories-list.template.html',
  bindings: {
    categories: '<',
  }
});


})();
