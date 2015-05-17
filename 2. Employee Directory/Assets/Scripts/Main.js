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
    var newEmployeeName = document.getElementById("name").value;
    var newEmployeePhone = document.getElementById("phone").value;
    var newEmployeeStreet = document.getElementById("street").value;
    var newEmployeeCity = document.getElementById("city").value;
    var newEmployeeState = document.getElementById("state").value;
    var newEmployeeZIP = document.getElementById("ZIP").value;
    if (newEmployeeName != "" &&
        newEmployeePhone != "" &&
        newEmployeeStreet != "" &&
        newEmployeeCity != "" &&
        newEmployeeState != "" &&
        newEmployeeZIP != "") {
      document.forms[0].reset();
      $scope.people = DataService.addEmployee(newEmployeeName, newEmployeeStreet, newEmployeeCity, newEmployeeState, newEmployeeZIP, newEmployeePhone);
    }
    $scope.updateEmployeeList();
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