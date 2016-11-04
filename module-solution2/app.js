(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ShoppingListController1.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.items =  ShoppingListCheckOffService.getToBuy();

  toBuy.buy = function(index){
    ShoppingListCheckOffService.buy(index);
  };

};


ShoppingListController1.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;

  alreadyBought.items  =  ShoppingListCheckOffService.getBought();

};


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuy = [{ name: "dutch cookies", quantity: 9 },
  { name: "stroopwafels", quantity: 10 },
  { name: "spritsen", quantity: 3 },
  { name: "mergpijpjes", quantity: 5 },
  { name: "kletskoppen", quantity: 8 },
  { name: "gevulde koeken", quantity: 7 },
  { name: "appelflappen", quantity: 4 },
];
  var bought=[];

  service.buy = function (index){
    var item = toBuy[index];
    toBuy.splice(index, 1);
    bought.push(item);
  };

  service.getToBuy= function () {
    return toBuy;
  };

  service.getBought = function () {
    return bought;
  };
};

})();
