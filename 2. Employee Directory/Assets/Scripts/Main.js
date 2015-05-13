/*  Main.js
    Employee Directory
    Saturday, 9 May, 2015
    Alexander Rhett Crammer  */

// Create the `EmployeeData` module
var EmployeeData = angular.module("EmployeeData", []);

EmployeeData.controller("ListController", function ($scope, DataService) {
  
  /* Methods */
  $scope.addEmployee = function () {
    // Prevent extra items from being created without intent
    if (document.getElementById("name").val != "" &&
        document.getElementById("phone").val != "" &&
        document.getElementById("street").val != "" &&
        document.getElementById("city").val != "" &&
        document.getElementById("state").val != "" &&
        document.getElementById("ZIP").val != "") {
      document.forms[0].reset();
      DataService.addEmployee();
      $scope.updateEmployeeList();
    }
  }
  
  $scope.removeEmployeeAtIndex = function (employeeIndex) {
    // Is this too much just to get `employeeIndex` over to `DataService`?
    DataService.removeEmployeeAtIndex(employeeIndex);
    $scope.updateEmployeeList();
  }
  
  $scope.updateEmployeeList = function () {
    $scope.people = DataService.fetchEmployees();
  }
  
  /* Properties */
  $scope.updateEmployeeList(); /* This sets $scope.people */
});