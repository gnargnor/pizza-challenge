myApp.controller('OrderController', ['DataService', function(DataService){
  order = this;
  order.orderedPizza = DataService.orderedPizza;
  order.orderPizza = DataService.orderPizza;

  order.toppings = [
    'Cheese',
    'Pepperoni',
    'Canadian Bacon',
    'Sausage',
    'Hawaiian',
    'Supreme',
  ];


  order.addedToppings = [];

  order.addToPizzaToppings = function (topping) {
    order.addedToppings.push(topping);
    console.log(topping);
  };

  order.clearForm = function(){
    order.orderedPizza.size = '';
    order.addedToppings = [];
    order.orderedPizza.toppings.cheese = false;
    order.orderedPizza.toppings.pepperoni = false;
    order.orderedPizza.toppings.canadianBacon = false;
    order.orderedPizza.toppings.sausage = false;
    order.orderedPizza.toppings.hawaiian = false;
    order.orderedPizza.toppings.supreme = false;

  };

  order.calculatePrice = DataService.calculatePrice;

}]);
