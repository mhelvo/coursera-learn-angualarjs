(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemListController', ItemListController);


ItemListController.$inject = ['itemsResponse'];
function ItemListController(itemsResponse) {
  var itemList = this;
  itemList.items = itemsResponse.data.menu_items;
}

})();
