/*  Main.js
    Employee Directory
    Saturday, 9 May, 2015
    Alexander Rhett Crammer  */

// Create the `EmployeeData` module
var EmployeeData = angular.module("EmployeeData", []);

EmployeeData.controller("ListController", function ($scope, DataService) {
  
  /* Properties */
  $scope.people = DataService.fetchEmployees();
  
  /* Methods */
  $scope.addEmployee = function () {
    // Prevent extra items from being created without intent
    if (document.getElementById("name").val != "" &&
        document.getElementById("phone").val != "" &&
        document.getElementById("street").val != "" &&
        document.getElementById("city").val != "" &&
        document.getElementById("state").val != "" &&
        document.getElementById("ZIP").val != "") {
      DataService.addEmployee();
    }
  }
  
  $scope.removeEmployeeAtIndex = function (employeeIndex) {
    // Is this too much just to get `employeeIndex` over to `DataService`?
    DataService.removeEmployeeAtIndex(employeeIndex);
  }
  
  $scope.clearStorage = DataService.destroyLocalStorage();
});