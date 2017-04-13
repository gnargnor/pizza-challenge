myApp.controller('OrderController', ['DataService', function(DataService){
  order = this;
  order.orderedPizza = DataService.orderedPizza;
  order.orderPizza = DataService.orderPizza;

  order.orderedPizza.toppings = [
    'Cheese',
    'Pepperoni',
    'Canadian Bacon',
    'Sausage',
    'Hawaiian',
    'Supreme',
  ];

  order.clearForm = function(){
    order.orderedPizza.size = '';
  };

  order.calculatePrice = DataService.calculatePrice;

}]);
