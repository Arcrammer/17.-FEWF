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
    var stateProvided = formattedEmployee["address"]["state"];
    if (stateProvided.length > 2) {
      /* Convert the state to a two character string */
      formattedEmployee["address"]["state"] = abbrState(stateProvided, "abbr");
    }
    $scope.people.push(formattedEmployee);
    localStorage.setItem("Employees", JSON.stringify($scope.people));
  }
  
  $scope.removeEmployeeAtIndex = function (employeeIndex) {
    /* The user has tapped the deletion button */
    var localEmployeeData = JSON.parse(localStorage.getItem("Employees"));
    localEmployeeData.splice([employeeIndex], 1);
    localStorage.setItem("Employees", JSON.stringify(localEmployeeData));
    window.location.reload();
  }
  
  $scope.resetEverything = function () {
    localStorage.clear();
    window.location.reload();
  }
}]);

/* Caleb Grove's stateToAbbr.js https://gist.github.com/CalebGrove/c285a9510948b633aa47 */
function abbrState(input, to){
  
  var states = [
    ['Arizona', 'AZ'],
    ['Alabama', 'AL'],
    ['Alaska', 'AK'],
    ['Arizona', 'AZ'],
    ['Arkansas', 'AR'],
    ['California', 'CA'],
    ['Colorado', 'CO'],
    ['Connecticut', 'CT'],
    ['Delaware', 'DE'],
    ['Florida', 'FL'],
    ['Georgia', 'GA'],
    ['Hawaii', 'HI'],
    ['Idaho', 'ID'],
    ['Illinois', 'IL'],
    ['Indiana', 'IN'],
    ['Iowa', 'IA'],
    ['Kansas', 'KS'],
    ['Kentucky', 'KY'],
    ['Kentucky', 'KY'],
    ['Louisiana', 'LA'],
    ['Maine', 'ME'],
    ['Maryland', 'MD'],
    ['Massachusetts', 'MA'],
    ['Michigan', 'MI'],
    ['Minnesota', 'MN'],
    ['Mississippi', 'MS'],
    ['Missouri', 'MO'],
    ['Montana', 'MT'],
    ['Nebraska', 'NE'],
    ['Nevada', 'NV'],
    ['New Hampshire', 'NH'],
    ['New Jersey', 'NJ'],
    ['New Mexico', 'NM'],
    ['New York', 'NY'],
    ['North Carolina', 'NC'],
    ['North Dakota', 'ND'],
    ['Ohio', 'OH'],
    ['Oklahoma', 'OK'],
    ['Oregon', 'OR'],
    ['Pennsylvania', 'PA'],
    ['Rhode Island', 'RI'],
    ['South Carolina', 'SC'],
    ['South Dakota', 'SD'],
    ['Tennessee', 'TN'],
    ['Texas', 'TX'],
    ['Utah', 'UT'],
    ['Vermont', 'VT'],
    ['Virginia', 'VA'],
    ['Washington', 'WA'],
    ['West Virginia', 'WV'],
    ['Wisconsin', 'WI'],
    ['Wyoming', 'WY'],
  ];

  if (to == 'abbr'){
    input = input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    for(i = 0; i < states.length; i++){
      if(states[i][0] == input){
        return(states[i][1]);
      }
    }    
  } else if (to == 'name'){
    input = input.toUpperCase();
    for(i = 0; i < states.length; i++){
      if(states[i][1] == input){
        return(states[i][0]);
      }
    }    
  }
}