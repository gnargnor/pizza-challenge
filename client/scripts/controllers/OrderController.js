myApp.controller('OrderController', ['DataService', function(DataService){
  order = this;
  order.orderedPizza = DataService.orderedPizza;
  order.orderPizza = DataService.orderPizza;

  order.toppings = [
    'Cheese',
    'Pepperoni',
    'Canadian Bacon',
    'Sausage',
    'Hawaiin',
    'Supreme',
  ];

  order.orderedPizza = {
    toppings : []
  };

  order.clearForm = function(){
    order.orderedPizza.size = '';
    order.toppings.length = 0;
};


}]);
