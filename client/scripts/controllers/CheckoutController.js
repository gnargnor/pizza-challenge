myApp.controller('CheckoutController', ['DataService', function(DataService){
  console.log('HEY! You. You are at the ' + this +  ' Controller');
  checkout = this;
  checkout.confirmPizza = DataService.confirmPizza;
  checkout.removePizza = DataService.removePizza;
  checkout.orderedPizzas =DataService.orderedPizzas;
  checkout.confirmedPizzas = DataService.confirmedPizzas;
}]);
