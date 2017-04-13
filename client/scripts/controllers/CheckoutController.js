myApp.controller('CheckoutController', ['DataService', function(DataService){
  checkout = this;
  checkout.confirmPizza = DataService.confirmPizza;
  checkout.removePizza = DataService.removePizza;
  checkout.orderedPizzas =DataService.orderedPizzas;
  checkout.confirmedPizzas = DataService.confirmedPizzas;
  checkout.calculateTotal = DataService.calculateTotal;
  checkout.calculateTotal();
  checkout.totalPrice = DataService.totalPrice;
}]);
