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
  if (localStorage.getItem("CSGroceries") !== null) {
    console.log("\"CSGroceries\" was found.");
    $scope.groceries = JSON.parse(localStorage.getItem("CSGroceries"));
  } else {
    console.log("\"CSGroceries\" is null. Setting data...");
    $scope.groceries = [{
      "name":"Waffles"
    },{
      "name":"Tea"
    },{
      "name":"Coffee"
    },{
      "name":"Eggs"
    },{
      "name":"Soymilk"
    }];
    localStorage.setItem("CSGroceries", JSON.stringify($scope.groceries)); // Set some defaults for the list
    if (localStorage.getItem("CSGroceries") !== null) {
      /* Verify that the vanilla grocery list were stored */
      console.log("\"CSGroceries\" has been set to the default values.");
    }
  } // Fetch and set '$scope.groceries'
  
  /* Methods */
  
  /* Set-up */
  $("ul.list").sortable({
    "start": function (sortStart, element) {
      $(element.item[0]).addClass("held-grocery");
    },
    "stop": function (sortStop, element) {
      $(element.item[0]).removeClass("held-grocery");
      
      /* The user has dropped a list item so we'll make sure those changes are saved for later */
      $scope.groceries = [];
      $(sortStop.target).children().each(function (index, element) {
        $scope.groceries.push({
          "name": $(element).text().trim()
        });
      });
      /* Now we'll write that to localStorage */
      localStorage.setItem("CSGroceries", JSON.stringify($scope.groceries));
    }
  });
})

.controller("LectureListController", function ($scope) {
  
  /* Properties */
  $scope.pageTitle = "Lectures";
  $scope.lectures = [{
    "title":"Week 2 Overview",
    "professor":"Crystal Silvestro",
    "medium":"GoToTraining",
    "time":"2015-16-06 17:00"
  },{
    "title":"Week 3 Overview",
    "professor":"Crystal Silvestro",
    "medium":"GoToTraining",
    "time":"2015-16-06 17:00"
  },{
    "title":"Week 4 Overview",
    "professor":"Crystal Silvestro",
    "medium":"GoToTraining",
    "time":"2015-16-06 17:00"
  },];
  
  /* Methods */
});