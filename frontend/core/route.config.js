(function(module) {
	module.config(function($stateProvider, $urlRouterProvider) {
	  //
	  // For any unmatched url, redirect to /state1
	  $urlRouterProvider.otherwise("/");
	  //
	  // Now set up the states
	  $stateProvider
	    .state('login', {
	      url: "/",
	      templateUrl: "frontend/login/login.html"
	    })
	    .state('board', {
	    	abstract:true,
	      url: "/board",
	      templateUrl: "frontend/boards/main.html",
	      controller:'boardController as vm'
	    })
	    .state('board.create', {
	      url: "/create",
	      templateUrl: "frontend/boards/create.html"
	    })
	    .state('board.view', {
	      url: "/view/:id",
	      templateUrl: "frontend/boards/view.html"
	    });
	});
})(angular.module('app.core'));