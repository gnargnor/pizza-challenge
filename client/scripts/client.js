var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/order', {
            templateUrl : 'views/templates/order.html',
            controller: 'OrderController',
            controllerAs: 'order'
        })
        .when('/checkout', {
            templateUrl : 'views/templates/checkout.html',
            controller: 'CheckoutController',
            controllerAs: 'checkout'
        })
        .when('/confirmation', {
          templateUrl : 'views/templates/confirmation.html',
          controller : 'ConfirmationController',
          controllerAs : 'confirmation'
        })
        .otherwise({
            redirectTo: 'order'
        });
}]);
