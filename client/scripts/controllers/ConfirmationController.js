myApp.controller('ConfirmationController', ['DataService', function(DataService){
  confirmation = this;
  confirmation.confirmedPizzas = DataService.confirmedPizzas;
  confirmation.totalCost = DataService.totalCost;
  confirmation.calculateTotal = DataService.calculateTotal;
  confirmation.calculateTotal();
}]);
