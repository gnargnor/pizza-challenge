myApp.controller('OrderController', ['DataService', '$timeout', function(DataService, $timeout){
  order = this;

  //displays confirmation message
  order.displayPizzaConfirmation = false;
  order.pizzaConfirmation = function(){
    order.displayPizzaConfirmation = true;
    console.log(order.displayPizzaConfirmation);
    $timeout(function(){order.displayPizzaConfirmation = false;}, 3000);
  };// end display confirmation

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
