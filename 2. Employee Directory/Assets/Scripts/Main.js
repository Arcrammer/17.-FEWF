/*  Main.js
    Employee Directory
    Saturday, 9 May, 2015
    Alexander Rhett Crammer  */

// Create the `EmployeeData` module
var app = angular.module("EmployeeData", []);

app.controller("ListController", function ($scope, DataService) {
  
  /* Properties */
  $scope.people = DataService.fetchEmployees();
  
  /* Methods */
  $scope.addEmployee = DataService.addEmployee();
  
  $scope.removeEmployeeAtIndex = function (employeeIndex) {
    DataService.removeEmployeeAtIndex(employeeIndex);
  }
  
  $scope.clearStorage = DataService.destroyLocalStorage();
});