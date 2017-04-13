myApp.factory('DataService', function(){
  //This will allow the data binding on Order page
  var orderedPizza = {};
  //This will store the pizzas to display to Checkout page
  var orderedPizzas = {
    orderedArray : []
  };
  //This adds the pizza to the orderedArray
  var orderPizza = function(thisPizza){
    var newPizza = angular.copy(thisPizza);
    orderedPizzas.orderedArray.push(newPizza);
    orderedPizza = {};
  };

  //No equivalent to orderedPizza above because we will ng-repeat on Checkout page
  //     and then be pulling the specific pizza from the divs
  //This will store the confirmed pizzas just because
  var confirmedPizzas = {
    confirmedArray : []
  };
  //This adds the pizzas to the confirmedArray
  var confirmPizza = function(thisPizza, $index){
    confirmedPizzas.confirmedArray.push(thisPizza);
    orderedPizzas.orderedArray.splice($index, 1);
  };

  //Working delete function!
  var removePizza = function(thisPizza){
    var index = orderedPizzas.orderedArray.indexOf(thisPizza);
   orderedPizzas.orderedArray.splice(index, 1);
  };

  //Function to take in pricing information
  var calculatePrice = function(pizzaSize){
    switch (pizzaSize) {
      case "Small":
        orderedPizza.price = 8;
        break;
      case "Medium":
      orderedPizza.price = 9;
        break;
      case "Large":
      orderedPizza.price = 10;
        break;
      case "Extra Large":
      orderedPizza.price = 11;
        break;
      default:
      orderedPizza.price = 100;
    }
    var form = document.forms[0]; // your form element (whatever)
    var checkedElms = form.querySelectorAll(':checked').length;
    orderedPizza.price = orderedPizza.price + checkedElms;
  };

//RETURNS
  return {
    orderedPizza : orderedPizza,
    orderedPizzas : orderedPizzas,
    orderPizza : orderPizza,
    calculatePrice : calculatePrice,

    confirmedPizzas : confirmedPizzas,
    confirmPizza : confirmPizza,

    removePizza : removePizza
  };
});
