myApp.controller('ConfirmationController', ['DataService', function(DataService){
  confirmation = this;

  confirmation.totalCost = DataService.totalCost;
  confirmation.calculateTotal = DataService.calculateTotal;
  confirmation.calculateTotal();
}]);
