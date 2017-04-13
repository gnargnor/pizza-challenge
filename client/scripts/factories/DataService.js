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
  var confirmPizza = function(){
    confirmedPizzas.confirmedArray = orderedPizzas.orderedArray;
  };

  //Working delete function!
  var removePizza = function(thisPizza){
    var index = orderedPizzas.orderedArray.indexOf(thisPizza);
   orderedPizzas.orderedArray.splice(index, 1);
  };

  //Function to take in pricing information
  var calculatePrice = function(pizzaSize){
    console.log(pizzaSize);
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
    console.log(orderedPizza.price);
    var unCheck = function()
    {
      for (var i = 0; i < form.length; i++)  {
        if (form[i].checked) {
          form[i].checked = false;
        }
      }
    };
    unCheck();
  };

  var totalPrice = 0;
  var calculateTotal = function(){
    for (var i = 0; i < confirmedPizzas.confirmedArray.length; i++) {
      if(confirmedPizzas.confirmedArray[i].price){
        totalPrice = totalPrice + confirmedPizzas.confirmedArray[i].price;
      }
    }
  };

//RETURNS
  return {
    orderedPizza : orderedPizza,
    orderedPizzas : orderedPizzas,
    orderPizza : orderPizza,
    calculatePrice : calculatePrice,

    confirmedPizzas : confirmedPizzas,
    confirmPizza : confirmPizza,

    removePizza : removePizza,

    totalPrice : totalPrice,
    calculateTotal : calculateTotal
  };
});
