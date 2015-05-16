/*  Main.js
    CRUD-Style Application
    Saturday, 16 May, 2015
    Alexander Rhett Crammer  */

angular.module("CRUDStyleApplication", ["ngRoute"])

.config(function ($routeProvider) {
  
  /* Routes */
  $routeProvider.when("/Tasks/", {
    templateUrl:"Tasks.html",
    controller:"TaskViewController"
  });
  
  $routeProvider.when("/Grocery/", {
    templateUrl:"Grocery.html",
    controller:"GroceryListController"
  });
  
  $routeProvider.when("/Lectures/", {
    templateUrl:"Lectures.html",
    controller:"LectureListController"
  });
})

.controller("TaskViewController", function ($scope) {
  
  /* Properties */
  $scope.pageTitle = "Tasks";
  $scope.tasks = [{
    "description":"Feed Gary",
    "byTime":"2015-06-16"
  },{
    "description":"Wash the Laundry",
    "byTime":"2015-06-16"
  },{
    "description":"Charge the Roomba",
    "byTime":"2015-06-16"
  },{
    "description":"Feed the Kitties",
    "byTime":"2015-06-16"
  }];
  
  /* Methods */
})

.controller("GroceryListController", function ($scope) {
  
  /* Properties */
  $scope.pageTitle = "Groceries";
  
  /* Methods */
})

.controller("LectureListController", function ($scope) {
  
  /* Properties */
  $scope.pageTitle = "Lectures";
  
  /* Methods */
});