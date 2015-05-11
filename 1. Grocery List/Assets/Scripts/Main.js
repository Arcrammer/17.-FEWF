/*  Main.js
    Grocery List
    Monday, 4 May, 2015
    Alexander Rhett Crammer  */

var GroceryList = angular.module('GroceryList', []);
GroceryList.controller('ListController', ['$scope', function ($scope) {
  /* Properties */
  $scope.groceries = ["Soymilk","Eggs","Pasta","Tomatoes","Basil"];
  
  /* Methods */
  $scope.subtractGrocery = function (named) {
    var namedGroceryIndex = $scope.groceries.indexOf(named);
    $scope.groceries.splice(namedGroceryIndex, 1);
  }
  
  $scope.groceries.push = function () {
    document.getElementById("newItemField").value = "";
  }
}]);