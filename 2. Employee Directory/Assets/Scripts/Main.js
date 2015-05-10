/*  Main.js
    Employee Directory
    Saturday, 9 May, 2015
    Alexander Rhett Crammer  */

// Create the `EmployeeData` module
var EmployeeData = angular.module("EmployeeData", []);

EmployeeData.factory("DataService", function () {
  /* Properties */
  var employees = JSON.parse(localStorage.getItem("Employees")) || [
    {
      "name":"Nicole G. Weber",
      "address": {
        "street":"4621 Burke Street",
        "city": "Boston",
        "state": "MA",
        "ZIP": "02201"
      },
      "phone":"+1 (781) 338 - 5396"
    },
    {
      "name":"Timothy J. Le",
      "address": {
        "street":"1482 Orphan Road",
        "city": "Chetek",
        "state": "WI",
        "ZIP": "54728"
      },
      "phone":"+1 (715) 924 - 8846"
    },
    {
      "name":"Janet A. Sanchez",
      "address": {
        "street":"4266 Carolyns Circle",
        "city": "Plano",
        "state": "TX",
        "ZIP": "75074"
      },
      "phone":"+1 (214) 737 - 1368"
    },
    {
      "name":"William L. Kelley",
      "address": {
        "street":"2841 Pleasant Hill Road",
        "city": "Paramount",
        "state": "CA",
        "ZIP": "90723"
      },
      "phone":"+1 (562) 220 - 3209"
    },
    {
      "name":"Frank I. Emerson",
      "address": {
        "street":"2454 Johnson Street",
        "city": "Garner",
        "state": "NC",
        "ZIP": "27529"
      },
      "phone":"+1 (919) 817 - 8945"
    }
  ];
  
  return {
    employees
  };
});

// Create the `ListController` controller
EmployeeData.controller("ListController", ["$scope", "DataService", function ($scope, DataService) {
  /* Properties */
  $scope.people = DataService.employees;
  
  /* Methods */
  $scope.addEmployee = function () {
    /* Add the new employee to `$scope.people` */
    var formattedEmployee = {
      "name": document.getElementById("name").value,
      "address": {
        "street": document.getElementById("street").value,
        "city": document.getElementById("city").value,
        "state": document.getElementById("state").value,
        "ZIP": document.getElementById("ZIP").value
      },
      "phone": document.getElementById("phone").value
    };
    $scope.people.push(formattedEmployee);
    localStorage.setItem("Employees", JSON.stringify($scope.people));
  }
  
  $scope.removeEmployeeAtIndex = function (employeeIndex) {
    /* The user has tapped the deletion button */
    $scope.people.splice([employeeIndex], 1);
  }
}]);