myApp.factory('DataService', function(){
  //This will allow the data binding on Order page
  var orderedPizza = {};
  //This will store the pizzas to display to Checkout page
  var orderedPizzas = {
    orderedArray : []
  };
  //This adds the pizza to the orderedArray
  var orderPizza = function(thisPizza){
    orderedPizzas.orderedArray.push(thisPizza);
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

  //Not confident this will work...
  var removePizza = function(thisPizza){
    var index = orderedPizzas.orderedArray.indexOf(thisPizza);
   orderedPizzas.orderedArray.splice(index, 1);
  };

//RETURNS
  return {
    orderedPizza : orderedPizza,
    orderedPizzas : orderedPizzas,
    orderPizza : orderPizza,

    confirmedPizzas : confirmedPizzas,
    confirmPizza : confirmPizza,

    removePizza : removePizza
  };
});
