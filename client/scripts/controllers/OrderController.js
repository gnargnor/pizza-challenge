myApp.controller('OrderController', ['DataService', function(DataService){
  order = this;
  order.orderedPizza = DataService.orderedPizza;
  order.orderPizza = DataService.orderPizza;

  order.clearForm = function(){
    console.log("clear form clicked");
    order.orderedPizza.size = '';
    order.orderedPizza.toppings = '';
  };
}]);
