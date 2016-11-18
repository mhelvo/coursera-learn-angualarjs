(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesListController', CategoriesListController);


CategoriesListController.$inject = ['categoriesResponse'];
function CategoriesListController(categoriesResponse) {
  var categoriesList = this;
  categoriesList.categories = categoriesResponse.data;
}

})();
