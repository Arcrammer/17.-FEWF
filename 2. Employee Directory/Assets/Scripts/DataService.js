/*  DataService.js
    Employee Directory
    Tuesday, 12 May, 2015
    Alexander Rhett Crammer  */

angular.module("EmployeeData").service("DataService", function () {
  /* Properties */
  var employees = [
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
  
  if (localStorage.getItem("Employees") === null) {
    // localStorage doesn't have a value for the 'Employees' key
    console.log("Data not found");
    localStorage.setItem("Employees", JSON.stringify(employees));
  } else if (localStorage.getItem("Employees") !== null) {
    // localStorage exists and it has a value for the 'Employees' key
    console.log("Data was found.");
    this.employees = JSON.parse(localStorage.getItem("Employees"));
  }
  
  /* Methods */
  this.fetchEmployees = function () {
    /* Give the array of employees to 'ListController' */
    return JSON.parse(localStorage.getItem("Employees"));
  };
  
  this.addEmployee = function () {
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
      stateProvided = this.abbrState(stateProvided, "abbr");
    }
    var pulledLocalStorageData = JSON.parse(localStorage.getItem("Employees"));
    pulledLocalStorageData.push(formattedEmployee);
    this.employees = pulledLocalStorageData;
    localStorage.setItem("Employees", JSON.stringify(pulledLocalStorageData));
    return true;
  };
  
  this.removeEmployeeAtIndex = function (employeeIndex) {
    /* The user has tapped the deletion button */
    var pulledLocalStorageData = JSON.parse(localStorage.getItem("Employees"));
    pulledLocalStorageData.splice(employeeIndex, 1);
    localStorage.setItem("Employees", JSON.stringify(pulledLocalStorageData));
  };
  
  /* Caleb Grove's stateToAbbr.js https://gist.github.com/CalebGrove/c285a9510948b633aa47 */
  this.abbrState = function (input, to) {
    /* Properties */
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
  };
});