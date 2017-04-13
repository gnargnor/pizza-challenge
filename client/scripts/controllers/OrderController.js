myApp.controller('OrderController', ['DataService', function(DataService){
  order = this;
  order.orderedPizza = DataService.orderedPizza;
  order.orderPizza = DataService.orderPizza;

  order.orderedPizza.toppings = [
    'Cheese',
    'Pepperoni',
    'Canadian Bacon',
    'Sausage',
    'Hawaiin',
    'Supreme',
  ];

  order.clearForm = function(){
    order.orderedPizza.size = '';
    order.orderedPizza = [
    ];
};


}]);
