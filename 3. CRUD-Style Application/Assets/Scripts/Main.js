/*  Main.js
    CRUD-Style Application
    Saturday, 16 May, 2015
    Alexander Rhett Crammer  */

angular.module("CRUDStyleApplication", ["ngRoute"])

.config(function ($routeProvider) {
  
  /* Routes */
  $routeProvider.when("/Tasks", {
    templateUrl:"Tasks.html",
    controller:"TaskViewController"
  })
  
  .when("/Grocery", {
    templateUrl:"Grocery.html",
    controller:"GroceryListController"
  })
  
  .when("/Lectures", {
    templateUrl:"Lectures.html",
    controller:"LectureListController"
  })
  
  .when("/Parameters/:randomParameter", {
    templateUrl: "Parameters.html",
    controller: "UghController"
  })
  
  .otherwise({
    redirectTo: "/Tasks"
  });
})

.controller("UghController", function ($scope, $routeParams) {
  $scope.someContent = $routeParams.randomParameter;
})

.controller("TaskViewController", function ($scope) {
  
  /* Properties */
  $scope.pageTitle = "Tasks";
  
  /* Methods */
  $scope.addTaskNamed = function (named, byDate) {
    $scope.tasks.push({
      "description": named,
      "byTime": byDate.toISOString().substr(0,10)
    });
    $scope.exportTodoList();
  };
  
  $scope.removeTask = function (named) {
    for (task in $scope.tasks) {
      /* 'task' is an index of the array of objects */
      if ($scope.tasks[task].description == named) {
        $scope.tasks.splice(task, 1);
        /* Now that the task has been removed we'll write that to 'localStorage' */
        $scope.exportTodoList();
      }
    }
  };
  
  $scope.exportTodoList = function () {
    localStorage.setItem("CSTasks", JSON.stringify($scope.tasks));
  };
  
  /* Set-up */
  $("ul.list").sortable({
    "start": function (sortStart, element) {
      $(element.item[0]).addClass("held-item");
    },
    "stop": function (sortStop, element) {
      $(element.item[0]).removeClass("held-item");
      
      /* The user has dropped a list item so we'll make sure those changes are saved for later */
      $scope.tasks = [];
      $(sortStop.target).children().each(function (index, element) {
        $scope.tasks.push({
          "description": $(element).children("span")[0].innerHTML,
          "byTime": $(element).children("span")[1].innerHTML
        });
      });
      /* Now we'll write that to localStorage */
      $scope.exportTodoList();
    }
  });
  
  if (localStorage.getItem("CSTasks") !== null) {
    console.log("\"CSTasks\" was found.");
    $scope.tasks = JSON.parse(localStorage.getItem("CSTasks"));
  } else {
    console.log("\"CSTasks\" is null. Setting data...");
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
    $scope.exportTodoList();
    if (localStorage.getItem("CSTasks") !== null) {
      /* Verify that the vanilla task list was stored */
      console.log("\"CSTasks\" has been set to the default values.");
    }
  } // Fetch and set '$scope.groceries'
  
  $("ul").hover(function () {
    /* Append the subtraction buttons */
    $("ul.list li").each(function (index, element) {
      $(".date").addClass("hidden");
      $(".short").removeClass("hidden");
      var taskName = $(element).children()[0].innerHTML;
    });
  }, function () {
    $(".short").addClass("hidden");
    $(".date").removeClass("hidden");
  });
})

.controller("GroceryListController", function ($scope) {
  
  /* Properties */
  $scope.pageTitle = "Groceries";
  
  /* Methods */
  $scope.addGrocery = function (grocery) {
    $scope.groceries.push({
      "name": grocery
    });
    $scope.exportGroceryList();
  };
  
  $scope.removeGrocery = function (named) {
    for (grocery in $scope.groceries) {
      /* 'grocery' is an index of the array of objects */
      if ($scope.groceries[grocery].name == named) {
        $scope.groceries.splice(grocery, 1);
        /* Now that the grocery has been removed we'll write that to 'localStorage' */
        $scope.exportGroceryList();
      }
    }
  };
  
  $scope.exportGroceryList = function () {
    // Write the current content of '$scope.groceries' to 'localStorage'
    localStorage.setItem("CSGroceries", JSON.stringify($scope.groceries));
  };
  
  /* Set-up */
  $("ul.list").sortable({
    "start": function (sortStart, element) {
      $(element.item[0]).addClass("held-item");
    },
    "stop": function (sortStop, element) {
      $(element.item[0]).removeClass("held-item");
      
      /* The user has dropped a list item so we'll make sure those changes are saved for later */
      $scope.groceries = [];
      $(sortStop.target).children().each(function (index, element) {
        $scope.groceries.push({
          "name": $(element).text().trim()
        });
      });
      /* Now we'll write that to localStorage */
      $scope.exportGroceryList();
    }
  });
  
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
    $scope.exportGroceryList(); // Set some defaults for the list
    if (localStorage.getItem("CSGroceries") !== null) {
      /* Verify that the vanilla grocery list were stored */
      console.log("\"CSGroceries\" has been set to the default values.");
    }
  } // Fetch and set '$scope.groceries'
  
    $("ul").hover(function () {
    /* Append the subtraction buttons */
    $("ul.list li").each(function (index, element) {
      $(".date").addClass("hidden");
      $(".short").removeClass("hidden");
      var groceryName = $(element).children()[0].innerHTML;
    });
  }, function () {
    $(".short").addClass("hidden");
    $(".date").removeClass("hidden");
  });
})

.controller("LectureListController", function ($scope) {
  
  /* Properties */
  $scope.pageTitle = "Lectures";
  
  /* Methods */
  $scope.addLecture = function (title, professor, medium, time) {
    var lecture = {
      "title": title,
      "professor": professor,
      "medium": medium,
      "time": time
    };
    console.log(lecture);
    $scope.lectures.push({
      "title": lecture.title,
      "professor": lecture.professor,
      "medium": lecture.medium,
      "time": lecture.time
    });
    $scope.exportLectureList();
  };
  
  $scope.removeLecture = function (named) {
    for (lecture in $scope.lectures) {
      /* 'lecture' is an index of the array of objects */
      if ($scope.lectures[lecture].title == named) {
        $scope.lectures.splice(lecture, 1);
        /* Now that the lecture has been removed we'll write that to 'localStorage' */
        $scope.exportLectureList();
      }
    }
  };
  
  $scope.exportLectureList = function () {
    localStorage.setItem("CSLectures", JSON.stringify($scope.lectures));
  };
  
  /* Set-up */
  if (localStorage.getItem("CSLectures") !== null) {
    console.log("\"CSLectures\" was found.");
    $scope.lectures = JSON.parse(localStorage.getItem("CSLectures"));
  } else {
    console.log("\"CSLectures\" is null. Setting data...");
    $scope.lectures = [{
      "title":"Week 2 Overview",
      "professor":"Crystal Silvestro",
      "medium":"GoToTraining",
      "time":"2015-16-06 at 17:00"
    },{
      "title":"Week 3 Overview",
      "professor":"Crystal Silvestro",
      "medium":"GoToTraining",
      "time":"2015-16-06 at 17:00"
    },{
      "title":"Week 4 Overview",
      "professor":"Crystal Silvestro",
      "medium":"GoToTraining",
      "time":"2015-16-06 at 17:00"
    }];
    $scope.exportLectureList();
    $scope.exportLectureList(); // Set some defaults for the list
    if (localStorage.getItem("CSLectures") !== null) {
      /* Verify that the vanilla lecture list was stored */
      console.log("\"CSLectures\" has been set to the default values.");
    }
  }
  
  $("ul").hover(function () {
    /* Append the subtraction buttons */
    $("ul.list li").each(function (index, element) {
      $(".date").addClass("hidden");
      $(".short").removeClass("hidden");
      var lectureName = $(element).children()[0].innerHTML;
    });
  }, function () {
    $(".short").addClass("hidden");
    $(".date").removeClass("hidden");
  });
});