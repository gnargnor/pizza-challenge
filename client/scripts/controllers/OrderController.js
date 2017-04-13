myApp.controller('OrderController', ['DataService', function(DataService){
  order = this;
  order.orderedPizza = DataService.orderedPizza;
  order.orderPizza = DataService.orderPizza;

  order.clearForm = function(){
    order.orderedPizza.size = '';
    order.orderedPizza.toppings = [
      'Cheese',
      'Pepperoni',
      'Canadian Bacon',
      'Sausage',
      'Hawaiin',
      'Supreme',
    ];
};
  order.orderedPizza.toppings = [
    'cheese',
    'pepperoni',
    'Canadian Bacon',
    'Sausage',
    'Hawaiin',
    'Supreme',
  ];

    order.uncheckAll = function() {

 };

}]);
