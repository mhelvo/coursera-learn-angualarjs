(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItems);

function FoundItems() {
  var ddo = {
    restrict: "E",
    templateUrl: 'foundItems.html',
    scope: {
       foundItems: '<',
       onRemove: '&'
    },
    controller: FoundListDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}


function FoundListDirectiveController() {
  var list = this;

}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService,FoundListDirectiveController) {
  var narrowDown = this;
  narrowDown.searchTerm = "";
  narrowDown.items =[];

  narrowDown.search = function(){
    MenuSearchService.getMenu(narrowDown.searchTerm)
    .then(function (items){
        console.log("items:", items);
        narrowDown.items = items;
        console.log("narrowDown.items:", narrowDown.items);
    });

  };

  narrowDown.remove = function(index){
      narrowDown.items.splice(index, 1);
  };

};

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMenu = function (searchTerm) {
  var foundItems = $http({
    method: "GET",
    url: (ApiBasePath + "/menu_items.json")
  }).then(function (response) {
      console.log("response:", response);
      return response.data.menu_items.filter(function(item){
        return item.description.indexOf(searchTerm) !== -1;
      })})
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });
    return foundItems;
};
}
})();
