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
  };

  order.calculatePrice = DataService.calculatePrice;

}]);
